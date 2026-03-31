// 🤖 BotAluguel — Sistema de Aluguel de Bot WhatsApp

// ========== MÓDULOS ==========
const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  generateWAMessageFromContent,
  proto
} = require("baileys");
const fs        = require('fs');
const { Boom }  = require('@hapi/boom');
const NodeCache  = require("node-cache");
const readline   = require("readline");
const pino       = require('pino');
const chalk      = require('chalk');
const { v4: uuidv4 } = require('uuid');
const { sendButtons } = require('./buttons');
const EfiBankPix = require('./efipay');

// ========== BANNER ==========
console.log(chalk.cyanBright("🤖 BOTALUGUEL — Sistema de Aluguel via WhatsApp"));
console.log(chalk.cyan("═".repeat(50)));

// ========== CONFIG ==========
const prefixos  = ['.', '!', '/', '#'];
const sleep     = ms => new Promise(r => setTimeout(r, ms));
let botAtivo    = true;

let dono = process.env.DONO || "5511999999999";
dono = dono.replace(/\D/g, '') + "@s.whatsapp.net";

// ========== EFI BANK (INTACTO) ==========
let efipay = null, efipayReady = false;
const EFI_CLIENT_ID     = process.env.EFI_CLIENT_ID     || 'Client_Id_c5402771eee923060261f03590f4d8b82ce4b88c';
const EFI_CLIENT_SECRET = process.env.EFI_CLIENT_SECRET || 'Client_Secret_345bde04a214ac7e2464bbbb73b08b161ecfc2af';
const EFI_SANDBOX       = false;
const EFI_PIX_KEY       = process.env.EFI_PIX_KEY       || 'a45331e2-840e-41dc-bc93-8f1bd2b6fd91';
const EFI_CERT_PATH     = './certificado.p12';

if (EFI_CLIENT_ID !== 'SEU_CLIENT_ID_AQUI') {
  try {
    efipay = new EfiBankPix({
      client_id: EFI_CLIENT_ID, client_secret: EFI_CLIENT_SECRET,
      sandbox: EFI_SANDBOX, certificate: EFI_CERT_PATH
    });
    efipayReady = true;
    console.log(chalk.green(`✅ Efí Bank — modo: ${EFI_SANDBOX ? 'SANDBOX' : 'PRODUÇÃO'}`));
  } catch (err) { console.log(chalk.red("❌ Efí Bank:"), err.message); }
}

// ========== PLANOS (valores de teste: 1 moeda cada) ==========
const PLANOS = {
  basico:  { id: 'basico',  nome: '⭐ Básico',  moedas: 1,   dias: 30, maxGrupos: 1  },
  pro:     { id: 'pro',     nome: '💎 Pro',      moedas: 1,   dias: 30, maxGrupos: 5  },
  premium: { id: 'premium', nome: '👑 Premium',  moedas: 1,   dias: 30, maxGrupos: -1 }
};
// 1 BRL = 100 moedas — R$ 0,01 = 1 moeda (modo teste)
const BRL_POR_MOEDA = 0.01;

// ========== DATABASE ==========
const DB = './database';
const PATHS = {
  usuarios:     `${DB}/usuarios.json`,
  grupos:       `${DB}/grupos.json`,
  planosAtivos: `${DB}/planos_ativos.json`,
  pagamentos:   `${DB}/pagamentos.json`
};

function initDB() {
  if (!fs.existsSync(DB)) fs.mkdirSync(DB, { recursive: true });
  for (const p of Object.values(PATHS)) {
    if (!fs.existsSync(p)) fs.writeFileSync(p, JSON.stringify([], null, 2));
  }
}

const ler    = p => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return []; } };
const salvar = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 2));

// ========== USUÁRIOS ==========
function getUser(userId) { return ler(PATHS.usuarios).find(u => u.id === userId) || null; }
function createUser(userId, nome) {
  const users = ler(PATHS.usuarios);
  if (users.find(u => u.id === userId)) return false;
  users.push({ id: userId, nome, moedas: 30, criadoEm: new Date().toISOString() });
  salvar(PATHS.usuarios, users);
  return true;
}
function getMoedas(userId) { const u = getUser(userId); return u ? (u.moedas ?? 0) : 0; }
function addMoedas(userId, qtd) {
  const users = ler(PATHS.usuarios);
  const i = users.findIndex(u => u.id === userId);
  if (i === -1) return 0;
  users[i].moedas = (users[i].moedas ?? 0) + qtd;
  salvar(PATHS.usuarios, users);
  return users[i].moedas;
}
function remMoedas(userId, qtd) {
  const users = ler(PATHS.usuarios);
  const i = users.findIndex(u => u.id === userId);
  if (i === -1 || (users[i].moedas ?? 0) < qtd) return false;
  users[i].moedas -= qtd;
  salvar(PATHS.usuarios, users);
  return true;
}

// ========== PLANOS ATIVOS ==========
function getPlanoAtivo(userId) {
  const planos = ler(PATHS.planosAtivos);
  const p = planos.find(p => p.userId === userId && p.status === 'ativo');
  if (!p) return null;
  if (new Date(p.expiraEm) <= new Date()) {
    const arr = ler(PATHS.planosAtivos);
    const idx = arr.findIndex(x => x.userId === userId && x.status === 'ativo');
    if (idx !== -1) { arr[idx].status = 'expirado'; salvar(PATHS.planosAtivos, arr); }
    return null;
  }
  return p;
}
function ativarPlano(userId, planKey) {
  const plano = PLANOS[planKey];
  if (!plano) return false;
  if (!remMoedas(userId, plano.moedas)) return false;
  const arr = ler(PATHS.planosAtivos);
  arr.forEach(p => { if (p.userId === userId && p.status === 'ativo') p.status = 'expirado'; });
  const expiraEm = new Date();
  expiraEm.setDate(expiraEm.getDate() + plano.dias);
  arr.push({
    id: uuidv4(), userId, plano: planKey, nomePlano: plano.nome,
    status: 'ativo', maxGrupos: plano.maxGrupos,
    ativadoEm: new Date().toISOString(), expiraEm: expiraEm.toISOString(),
    notificado48h: false, notificado24h: false
  });
  salvar(PATHS.planosAtivos, arr);
  return true;
}

// ========== GRUPOS ==========
function getGrupo(groupId) { return ler(PATHS.grupos).find(g => g.id === groupId) || null; }
function getGruposDoUsuario(userId) { return ler(PATHS.grupos).filter(g => g.dono === userId); }
function addGrupo(groupId, userId, nomeGrupo) {
  const grupos = ler(PATHS.grupos);
  if (grupos.find(g => g.id === groupId)) return;
  grupos.push({
    id: groupId, dono: userId, nomeGrupo: nomeGrupo || groupId,
    status: 'inativo', aguardandoAdmin: true, adminRecebido: false,
    adicionadoEm: new Date().toISOString()
  });
  salvar(PATHS.grupos, grupos);
}
function updateGrupo(groupId, campos) {
  const grupos = ler(PATHS.grupos);
  const i = grupos.findIndex(g => g.id === groupId);
  if (i === -1) return;
  Object.assign(grupos[i], campos);
  salvar(PATHS.grupos, grupos);
}
function countGruposAtivos(userId) {
  return ler(PATHS.grupos).filter(g => g.dono === userId && g.status === 'ativo').length;
}

// ========== PIX — RECARGA DE MOEDAS ==========
async function gerarRecargaPix(userId, valorBRL) {
  if (!efipayReady) return { error: "PIX não configurado." };
  const moedas = Math.floor(valorBRL / BRL_POR_MOEDA);
  try {
    const cob = await efipay.pixCreateImmediateCharge({
      calendario: { expiracao: 3600 },
      valor: { original: valorBRL.toFixed(2) },
      chave: EFI_PIX_KEY,
      solicitacaoPagador: `BotAluguel — ${moedas} moedas — ${userId.split('@')[0]}`
    });
    if (!cob?.txid) return { error: "Resposta inválida da Efí" };
    const qr = await efipay.pixGenerateQRCode(cob.loc?.id);
    const pag = {
      txid: cob.txid, userId, tipo: 'recarga', moedas, valor: valorBRL,
      status: 'pendente', criadoEm: new Date().toISOString(),
      expiraEm: new Date(Date.now() + 3600000).toISOString(),
      qrCodeBase64: qr.imagemQrcode, copiaCola: qr.qrcode
    };
    const pags = ler(PATHS.pagamentos); pags.push(pag); salvar(PATHS.pagamentos, pags);
    return pag;
  } catch (err) { return { error: err.message }; }
}

async function verificarRecargaPix(txid) {
  if (!efipayReady) return { status: 'erro' };
  try {
    const res = await efipay.pixDetailCharge(txid);
    if (res.status === 'CONCLUIDA') {
      const pags = ler(PATHS.pagamentos);
      const i = pags.findIndex(p => p.txid === txid);
      if (i !== -1 && pags[i].status !== 'pago') {
        pags[i].status = 'pago'; pags[i].pagoEm = new Date().toISOString();
        salvar(PATHS.pagamentos, pags);
        addMoedas(pags[i].userId, pags[i].moedas);
        return { status: 'pago', moedas: pags[i].moedas, userId: pags[i].userId };
      }
    }
    return { status: res.status === 'ATIVA' ? 'pendente' : 'expirado' };
  } catch { return { status: 'erro' }; }
}

function monitorarPix(txid, from, sock) {
  let t = 0;
  const iv = setInterval(async () => {
    if (++t > 240) return clearInterval(iv);
    try {
      const r = await verificarRecargaPix(txid);
      if (r.status === 'pago') {
        clearInterval(iv);
        await sock.sendMessage(from, {
          text: `✅ *PAGAMENTO CONFIRMADO!*\n\n💰 *+${r.moedas} moedas* adicionadas!\n🪙 Novo saldo: *${getMoedas(r.userId)} moedas*\n\nUse *.planos* para comprar um plano de aluguel.`
        });
      }
    } catch {}
  }, 15000);
}

// ========== NOTIFICAÇÕES DE EXPIRAÇÃO ==========
async function verificarExpiracoes(sock) {
  const planos = ler(PATHS.planosAtivos).filter(p => p.status === 'ativo');
  const agora = Date.now();
  for (const p of planos) {
    const restante = new Date(p.expiraEm).getTime() - agora;
    const h48 = 48 * 60 * 60 * 1000;
    const h24 = 24 * 60 * 60 * 1000;
    if (!p.notificado48h && restante > 0 && restante <= h48) {
      await sock.sendMessage(p.userId, {
        text: `⚠️ *AVISO — Plano expirando!*\n\nSeu plano *${p.nomePlano}* expira em *menos de 48 horas*.\n\nRenove com *.planos* para continuar usando o bot nos seus grupos. 🤖`
      });
      const arr = ler(PATHS.planosAtivos);
      const idx = arr.findIndex(x => x.id === p.id);
      if (idx !== -1) { arr[idx].notificado48h = true; salvar(PATHS.planosAtivos, arr); }
    }
    if (!p.notificado24h && restante > 0 && restante <= h24) {
      await sock.sendMessage(p.userId, {
        text: `🚨 *URGENTE — Plano expira em 24h!*\n\nSeu plano *${p.nomePlano}* expira em menos de 24 horas!\n\nRenove agora com *.planos* antes que seus grupos sejam desativados. ⏰`
      });
      const arr = ler(PATHS.planosAtivos);
      const idx = arr.findIndex(x => x.id === p.id);
      if (idx !== -1) { arr[idx].notificado24h = true; salvar(PATHS.planosAtivos, arr); }
    }
  }
}

// ========== FLUXOS PENDENTES (MEMÓRIA) ==========
const aguardandoLink  = new Map();
const gruposPendentes = new Map();

// ========== HELPERS ==========
function formatarTempo(expiraEm) {
  const diff = new Date(expiraEm).getTime() - Date.now();
  if (diff <= 0) return 'Expirado';
  const dias  = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  if (dias > 0) return `${dias}d ${horas}h`;
  return `${horas}h`;
}

// ========== WRAPPER DE BOTÕES SEGURO ==========
// Envia quick_reply buttons (clicáveis diretamente no chat)
async function enviarBotoes(sock, from, texto, rodape, botoes, infoMsg) {
  try {
    await sendButtons(sock, from, {
      text: texto,
      footer: rodape,
      buttons: botoes.map(b => ({ id: b.id, text: b.label }))
    });
  } catch {
    // fallback: texto + lista de comandos
    const lista = botoes.map(b => `• ${b.label} → ${b.id}`).join('\n');
    await sock.sendMessage(from, { text: `${texto}\n\n${lista}` }, infoMsg ? { quoted: infoMsg } : {});
  }
}

// Envia list message (caixa/modal que abre ao clicar no botão)
async function enviarLista(sock, from, titulo, texto, rodape, textoBotao, secoes, infoMsg) {
  try {
    await sock.sendMessage(from, {
      listMessage: {
        title: titulo,
        text: texto,
        footer: rodape,
        buttonText: textoBotao,
        listType: 1,
        sections: secoes
      }
    }, infoMsg ? { quoted: infoMsg } : {});
  } catch {
    // fallback: botões simples
    const todosOsBotoes = secoes.flatMap(s =>
      (s.rows || []).map(r => ({ id: r.rowId, label: r.title }))
    );
    await enviarBotoes(sock, from, `${titulo}\n\n${texto}`, rodape, todosOsBotoes.slice(0, 10), infoMsg);
  }
}

// ========== MENUS ==========
async function enviarMenuPrincipal(sock, from, infoMsg, sender, nome) {
  const moedas = getMoedas(sender);
  const plano  = getPlanoAtivo(sender);
  const grupos = getGruposDoUsuario(sender);

  const cabecalho =
    `🤖 *BOTALUGUEL*\n${'═'.repeat(26)}\n\n` +
    `👤 *${nome}*\n` +
    `🪙 Moedas: *${moedas}*\n` +
    `📦 Plano: *${plano ? plano.nomePlano : 'Nenhum ativo'}*\n` +
    `🏠 Grupos: *${grupos.length}*`;

  // Botões principais visíveis diretamente no chat
  await enviarBotoes(sock, from, cabecalho, 'Selecione uma opção 👇', [
    { label: '📊 Meu Painel',         id: '.painel'      },
    { label: '💳 Recarregar Moedas',  id: '.recarregar'  },
    { label: '📦 Ver Planos',         id: '.planos'      },
    { label: '🔗 Adicionar ao Grupo', id: '.link'        },
    { label: '🏠 Meus Grupos',        id: '.grupos'      },
    { label: '❓ Ajuda',              id: '.ajuda'       }
  ], infoMsg);
}

async function enviarMenuGrupo(sock, from, infoMsg) {
  const grupo = getGrupo(from);
  const plano = grupo?.dono ? getPlanoAtivo(grupo.dono) : null;
  const tempo = plano ? formatarTempo(plano.expiraEm) : '?';

  await enviarBotoes(sock, from,
    `🤖 *BotAluguel* — Ativo!\n📦 Plano: *${grupo?.nomePlano || '?'}*\n⏳ Tempo: *${tempo}*`,
    'O que deseja fazer?',
    [
      { label: '📊 Status do Plano', id: '.status' },
      { label: 'ℹ️ Informações',     id: '.info'   }
    ],
    infoMsg
  );
}

// ========== BOT PRINCIPAL ==========
let SOCK_GLOBAL = null; // referência global para acesso no admin event

async function iniciarBot() {
  console.log(chalk.cyanBright("\n🤖 Iniciando BotAluguel..."));
  initDB();

  const { state, saveCreds } = await useMultiFileAuthState("./sessao");
  const { version }          = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: { creds: state.creds, keys: state.keys },
    markOnlineOnConnect: true,
    msgRetryCounterCache
  });

  SOCK_GLOBAL = sock;

  if (!sock.authState.creds.registered) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const q  = t => new Promise(r => rl.question(t, r));
    let num  = await q(chalk.cyan("📱 Número com DDI (ex: 5511999999999): "));
    rl.close();
    num = num.replace(/\D/g, "");
    if (!num) { console.log(chalk.red("❌ Número inválido.")); process.exit(1); }
    try {
      const code = await sock.requestPairingCode(num);
      console.log(chalk.bgGreen.black("\n✅ CÓDIGO:"), chalk.white.bold(code));
      console.log(chalk.yellow("WhatsApp > Config > Aparelhos conectados > Conectar com código\n"));
    } catch (err) { console.error(chalk.red("❌ Erro:"), err.message); process.exit(1); }
  }

  setInterval(() => verificarExpiracoes(sock).catch(() => {}), 6 * 60 * 60 * 1000);

  // ========== CONEXÃO ==========
  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) { console.log(chalk.red("❌ Sessão encerrada.")); process.exit(0); }
      else { console.log(chalk.yellow("⚠️ Reconectando em 3s...")); setTimeout(iniciarBot, 3000); }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ BotAluguel conectado!"));
    }
  });

  sock.ev.on("creds.update", saveCreds);

  // ========== DETECÇÃO DE ADMIN — Método 1: group-participants.update ==========
  sock.ev.on("group-participants.update", async (update) => {
    try {
      const { id: groupId, participants, action } = update;
      if (action !== 'promote') return;

      const botJid = sock.user?.id?.split(':')[0] + '@s.whatsapp.net';
      const botJidAlt = sock.user?.id?.replace(/:.*@/, '@'); // formato alternativo

      const foiPromovido = participants.some(p =>
        p === botJid || p === botJidAlt || p.split('@')[0] === botJid.split('@')[0]
      );
      if (!foiPromovido) return;

      console.log(chalk.green(`[ADMIN] Bot promovido a admin no grupo: ${groupId}`));
      await notificarAdminRecebido(sock, groupId);
    } catch (err) {
      console.error(chalk.red("[ADMIN EVENT ERRO]"), err.message);
    }
  });

  // ========== MENSAGENS ==========
  sock.ev.on("messages.upsert", async (mensagem) => {
    try {
      const info = mensagem.messages[0];
      if (!info.message && !info.messageStubType) return;
      if (info.key.remoteJid === "status@broadcast") return;
      if (info.key.fromMe) return;

      const from    = info.key.remoteJid;
      const ehGrupo = from.endsWith('@g.us');
      const sender  = ehGrupo ? info.key.participant : from;
      const nome    = info.pushName || "Usuário";

      // ========== DETECÇÃO DE ADMIN — Método 2: messageStubType ==========
      // messageStubType 29 = PROMOTE (alguém foi promovido a admin no grupo)
      if (ehGrupo && info.messageStubType === 29) {
        try {
          const botJid = sock.user?.id?.split(':')[0] + '@s.whatsapp.net';
          const promovido = info.messageStubParameters?.[0] || '';
          if (
            promovido === botJid ||
            promovido.split('@')[0] === botJid.split('@')[0]
          ) {
            console.log(chalk.green(`[ADMIN STUB] Bot promovido no grupo: ${from}`));
            await notificarAdminRecebido(sock, from);
          }
        } catch {}
        return;
      }

      if (!info.message) return;

      let conteudo = info.message?.conversation ||
        info.message?.extendedTextMessage?.text ||
        info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
        info.message?.buttonsResponseMessage?.selectedButtonId ||
        info.message?.templateButtonReplyMessage?.selectedId || "";

      if (!conteudo && info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
        try { conteudo = JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id || ""; } catch {}
      }

      const args    = conteudo.trim().split(/ +/).slice(1);
      const q       = args.join(' ');
      const ehDono  = sender === dono;

      const enviar  = t => sock.sendMessage(from, { text: t }, { quoted: info });
      const reagir  = e => sock.sendMessage(from, { react: { text: e, key: info.key } });
      const digitar = async (ms = 1200) => {
        await sock.sendPresenceUpdate('composing', from);
        await sleep(ms);
        await sock.sendPresenceUpdate('paused', from);
      };

      let prefixoUsado = null;
      for (const p of prefixos) { if (conteudo.startsWith(p)) { prefixoUsado = p; break; } }

      // ========== FLUXO AGUARDANDO LINK DO GRUPO ==========
      if (!ehGrupo && aguardandoLink.has(sender)) {
        aguardandoLink.delete(sender);
        const link = conteudo.trim();
        if (!link.includes('chat.whatsapp.com/')) {
          return enviar("❌ Link inválido. Envie um link válido do grupo (ex: https://chat.whatsapp.com/XXXXX)\n\nTente novamente com *.link*");
        }
        const code = link.split('chat.whatsapp.com/')[1]?.split(/[?&\s]/)[0];
        if (!code) return enviar("❌ Não consegui extrair o código do link.");

        await enviar("⏳ Entrando no grupo...");
        try {
          const groupId = await sock.groupAcceptInvite(code);
          await sleep(2000);
          let nomeGrupo = groupId;
          try { const meta = await sock.groupMetadata(groupId); nomeGrupo = meta.subject || groupId; } catch {}
          addGrupo(groupId, sender, nomeGrupo);
          gruposPendentes.set(groupId, sender);

          await enviar(
            `✅ *Entrei no grupo!*\n\n🏠 *${nomeGrupo}*\n\nAgora preciso ser *administrador* do grupo para funcionar.\n\n📌 Peça a um admin para me promover. Você receberá uma notificação aqui quando receber admin!`
          );
          await sleep(3000);
          await sock.sendMessage(groupId, {
            text: `👋 *Olá! Sou o BotAluguel!*\n\n🤖 Fui adicionado por *${nome}* para gerenciar este grupo.\n\n⚠️ Para funcionar, preciso ser *administrador*.\n\nPor favor, me promova a admin! 🙏`
          });
        } catch (err) {
          await enviar(`❌ Erro ao entrar no grupo: ${err.message}`);
        }
        return;
      }

      createUser(sender, nome);
      if (!prefixoUsado) return;
      const cmd = conteudo.toLowerCase().slice(prefixoUsado.length).split(/\s+/)[0];
      if (!botAtivo && !ehDono) return;

      console.log(chalk.gray(`[CMD] ${nome} > ${prefixoUsado}${cmd}${q ? ' ' + q : ''}`));

      // ===== COMANDOS DE GRUPO (após ativação) =====
      if (ehGrupo) {
        const grupo = getGrupo(from);
        if (!grupo || grupo.status !== 'ativo') return;

        switch (cmd) {
          case 'menu': case 'start': {
            await reagir('🤖'); await digitar();
            await enviarMenuGrupo(sock, from, info);
            break;
          }
          case 'status': {
            await reagir('📊');
            const plano = getPlanoAtivo(grupo.dono);
            if (!plano) return enviar("⚠️ Plano expirado! O responsável deve renovar com *.planos*");
            await enviar(
              `📊 *STATUS DO BOT*\n${'─'.repeat(22)}\n\n🏠 Grupo: *${grupo.nomeGrupo || 'Este grupo'}*\n✅ Status: *Ativo*\n📦 Plano: *${plano.nomePlano}*\n⏳ Tempo restante: *${formatarTempo(plano.expiraEm)}*`
            );
            break;
          }
          case 'info': {
            await reagir('ℹ️');
            const meta = await sock.groupMetadata(from).catch(() => null);
            await enviar(
              `ℹ️ *INFORMAÇÕES*\n${'─'.repeat(22)}\n\n🤖 Bot: *BotAluguel*\n🏠 Grupo: *${meta?.subject || from}*\n👥 Membros: *${meta?.participants?.length || '?'}*\n\nUse *.menu* para ver as opções.`
            );
            break;
          }
        }
        return;
      }

      // ===== COMANDOS PRIVADOS =====
      switch (cmd) {

        case 'menu': case 'start': case 'inicio': {
          await reagir('🤖'); await digitar();
          await enviarMenuPrincipal(sock, from, info, sender, nome);
          break;
        }

        case 'painel': case 'perfil': case 'eu': {
          await reagir('📊'); await digitar();
          const moedas = getMoedas(sender);
          const plano  = getPlanoAtivo(sender);
          const grupos = getGruposDoUsuario(sender);

          let msg = `📊 *MEU PAINEL*\n${'═'.repeat(26)}\n\n👤 *${nome}*\n🪙 Moedas: *${moedas}*\n\n`;
          if (plano) {
            msg += `📦 *PLANO ATIVO*\n• ${plano.nomePlano}\n• Grupos: ${plano.maxGrupos === -1 ? '∞' : plano.maxGrupos}\n• Expira: ${formatarTempo(plano.expiraEm)}\n\n`;
          } else {
            msg += `📦 *Sem plano ativo.* Use .planos\n\n`;
          }
          if (grupos.length > 0) {
            msg += `🏠 *GRUPOS (${grupos.length})*\n`;
            for (const g of grupos) {
              const ico = g.status === 'ativo' ? '✅' : g.aguardandoAdmin ? '⏳' : '🔴';
              msg += `${ico} ${g.nomeGrupo || g.id}\n`;
            }
          } else {
            msg += `🏠 *Sem grupos.* Use .link`;
          }

          await enviar(msg);

          // Botões de ação rápida abaixo do painel
          await sleep(500);
          await enviarBotoes(sock, from, '⚡ *Ações rápidas*', '', [
            { label: '💳 Recarregar',    id: '.recarregar' },
            { label: '📦 Ver Planos',    id: '.planos'     },
            { label: '🔗 Adicionar Grupo', id: '.link'     }
          ], info);
          break;
        }

        case 'recarregar': case 'recarga': {
          await reagir('💳'); await digitar();

          if (q && !isNaN(parseFloat(q))) {
            const valor = parseFloat(parseFloat(q).toFixed(2));
            if (valor < 0.01) return enviar("❌ Valor mínimo: R$ 0,01");

            await enviar('⏳ Gerando PIX...');
            const pag = await gerarRecargaPix(sender, valor);
            if (pag.error) return enviar(`❌ Erro: ${pag.error}`);

            const moedas = Math.floor(valor / BRL_POR_MOEDA);
            if (pag.qrCodeBase64) {
              try {
                const buf = Buffer.from(pag.qrCodeBase64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                await sock.sendMessage(from, {
                  image: buf,
                  caption: `💳 *PIX — R$ ${valor.toFixed(2)}*\n🪙 +${moedas} moedas após confirmação!\n⏳ Válido por 1 hora.`
                }, { quoted: info });
              } catch { await enviar(`💳 *PIX — R$ ${valor.toFixed(2)}*\n🪙 +${moedas} moedas!`); }
            }
            await sleep(2000);
            await sock.sendMessage(from, { text: '```' + pag.copiaCola + '```' }, { quoted: info });
            monitorarPix(pag.txid, from, sock);
          } else {
            // Menu de recarga com LIST (caixa de seleção)
            await enviarLista(sock, from,
              '💳 Recarregar Moedas',
              `🪙 Saldo atual: *${getMoedas(sender)} moedas*\n\n1 BRL = 100 moedas (modo teste)\nMínimo: R$ 0,01`,
              'Pagamento instantâneo via PIX',
              '💳 ESCOLHER VALOR',
              [{
                title: 'Escolha o valor',
                rows: [
                  { title: 'R$ 0,01 = 1 moeda',    rowId: '.recarregar 0.01',  description: 'Teste rápido' },
                  { title: 'R$ 0,10 = 10 moedas',  rowId: '.recarregar 0.10',  description: 'Pacote mínimo' },
                  { title: 'R$ 1,00 = 100 moedas',  rowId: '.recarregar 1',    description: 'Pacote básico' },
                  { title: 'R$ 5,00 = 500 moedas',  rowId: '.recarregar 5',    description: 'Pacote médio'  },
                  { title: 'R$ 10,00 = 1000 moedas',rowId: '.recarregar 10',   description: 'Pacote avançado' }
                ]
              }],
              info
            );
          }
          break;
        }

        case 'planos': {
          await reagir('📦'); await digitar();
          const moedas = getMoedas(sender);
          const planoAtivo = getPlanoAtivo(sender);

          let msg = `📦 *PLANOS DISPONÍVEIS*\n${'═'.repeat(26)}\n\n🪙 Suas moedas: *${moedas}*\n\n`;
          for (const [, p] of Object.entries(PLANOS)) {
            const pode = moedas >= p.moedas ? '✅' : '❌';
            msg += `${p.nome} — ${p.moedas} 🪙\n• ${p.dias} dias • ${p.maxGrupos === -1 ? '∞ grupos' : `${p.maxGrupos} grupo(s)`} • ${pode}\n\n`;
          }
          if (planoAtivo) msg += `📌 Plano atual: ${planoAtivo.nomePlano} (expira em ${formatarTempo(planoAtivo.expiraEm)})`;

          await enviar(msg);
          await sleep(400);

          // Botões de compra diretos
          await enviarBotoes(sock, from,
            `🛒 *Comprar plano* — Saldo: ${moedas} 🪙`,
            'Selecione o plano desejado',
            [
              { label: '⭐ Básico (1🪙 • 1 grupo)',     id: '.confirmar_compra basico'   },
              { label: '💎 Pro (1🪙 • 5 grupos)',        id: '.confirmar_compra pro'      },
              { label: '👑 Premium (1🪙 • ilimitado)',   id: '.confirmar_compra premium'  }
            ],
            info
          );
          break;
        }

        case 'comprar': {
          await reagir('🛒');
          const planKey = q.toLowerCase().trim();
          if (!PLANOS[planKey]) {
            return enviarBotoes(sock, from,
              `❌ Plano inválido. Escolha abaixo:`,
              '',
              [
                { label: '⭐ Básico',  id: '.confirmar_compra basico'  },
                { label: '💎 Pro',     id: '.confirmar_compra pro'     },
                { label: '👑 Premium', id: '.confirmar_compra premium' }
              ],
              info
            );
          }
          const plano  = PLANOS[planKey];
          const moedas = getMoedas(sender);

          if (moedas < plano.moedas) {
            return enviar(
              `❌ *Moedas insuficientes!*\n\nVocê tem: *${moedas}*\nNecessário: *${plano.moedas}*\n\nUse *.recarregar* para comprar moedas via PIX.`
            );
          }

          await digitar();
          await enviarBotoes(sock, from,
            `🛒 *Confirmar compra?*\n\n${plano.nome}\n🪙 Custo: ${plano.moedas} moeda(s)\n⏳ ${plano.dias} dias\n🏠 ${plano.maxGrupos === -1 ? '∞ grupos' : `${plano.maxGrupos} grupo(s)`}\n\nSeu saldo: ${moedas} moedas`,
            'Confirme para ativar',
            [
              { label: `✅ Confirmar — ${plano.nome}`, id: `.confirmar_compra ${planKey}` },
              { label: '❌ Cancelar',                  id: '.planos'                      }
            ],
            info
          );
          break;
        }

        case 'confirmar_compra': {
          const planKey = q.toLowerCase().trim();
          const plano = PLANOS[planKey];
          if (!plano) return;
          await digitar();
          const ok = ativarPlano(sender, planKey);
          if (ok) {
            await reagir('🎉');
            await enviar(
              `✅ *Plano ${plano.nome} ativado!*\n${'═'.repeat(26)}\n\n🪙 Gasto: *${plano.moedas}*\n💰 Saldo: *${getMoedas(sender)} moedas*\n⏳ Duração: *${plano.dias} dias*\n🏠 Grupos: *${plano.maxGrupos === -1 ? '∞ ilimitados' : plano.maxGrupos}*`
            );
            await sleep(500);
            await enviarBotoes(sock, from,
              '🔗 Próximo passo: adicione o bot ao seu grupo!',
              '',
              [
                { label: '🔗 Adicionar ao Grupo', id: '.link'   },
                { label: '🏠 Meus Grupos',         id: '.grupos' }
              ],
              info
            );
          } else {
            await enviar("❌ Erro ao ativar. Verifique seu saldo com *.painel*");
          }
          break;
        }

        case 'link': case 'adicionar': {
          await reagir('🔗');
          const plano = getPlanoAtivo(sender);
          if (!plano) {
            return enviarBotoes(sock, from,
              `❌ *Sem plano ativo!*\n\nAdquira um plano antes de adicionar grupos.`,
              '',
              [
                { label: '📦 Ver Planos', id: '.planos'     },
                { label: '💳 Recarregar', id: '.recarregar' }
              ],
              info
            );
          }
          const gruposAtivos = countGruposAtivos(sender);
          if (plano.maxGrupos !== -1 && gruposAtivos >= plano.maxGrupos) {
            return enviar(
              `❌ *Limite atingido!*\n\nSeu plano ${plano.nomePlano} permite *${plano.maxGrupos}* grupo(s).\nVocê já tem *${gruposAtivos}* ativo(s).\n\nFaça upgrade: *.comprar pro* ou *.comprar premium*`
            );
          }
          aguardandoLink.set(sender, true);
          await digitar();
          await enviar(
            `🔗 *ADICIONAR BOT AO GRUPO*\n${'─'.repeat(26)}\n\n📋 Plano: *${plano.nomePlano}*\n🏠 Grupos: *${gruposAtivos}/${plano.maxGrupos === -1 ? '∞' : plano.maxGrupos}*\n\n📎 Envie o link de convite do grupo:\n\n_Exemplo: https://chat.whatsapp.com/XXXXX_\n\n_(Grupo → 3 pontos → Convidar pelo link → Copiar link)_`
          );
          break;
        }

        case 'ativar': {
          await reagir('✅');
          const groupId = q.trim();

          if (!groupId) {
            const grupos = getGruposDoUsuario(sender).filter(g => g.adminRecebido && g.status !== 'ativo');
            if (grupos.length === 0) {
              return enviar(`❌ Nenhum grupo pronto para ativar.\n\nUse *.link* para adicionar o bot a um grupo.`);
            }
            let msg = `✅ *ATIVAR BOT*\n\nGrupos prontos:\n\n`;
            grupos.forEach((g, i) => { msg += `${i+1}. *${g.nomeGrupo}*\n\`\`\`${g.id}\`\`\`\n\n`; });
            msg += `Envie: *.ativar [ID do grupo]*`;
            return enviar(msg);
          }

          const grupo = getGrupo(groupId);
          if (!grupo)           return enviar("❌ Grupo não encontrado.");
          if (grupo.dono !== sender && !ehDono) return enviar("❌ Este grupo não pertence a você.");
          if (!grupo.adminRecebido && !ehDono) return enviar("⚠️ Bot ainda não é admin neste grupo. Peça a um admin para me promover.");
          if (grupo.status === 'ativo') return enviar("✅ O bot já está ativo neste grupo!");

          const plano = getPlanoAtivo(sender);
          if (!plano) return enviar("❌ Sem plano ativo! Adquira um com *.planos*");

          const gruposAtivos = countGruposAtivos(sender);
          if (plano.maxGrupos !== -1 && gruposAtivos >= plano.maxGrupos) {
            return enviar(`❌ Limite de grupos atingido (${plano.maxGrupos}). Faça upgrade.`);
          }

          updateGrupo(groupId, { status: 'ativo', ativadoEm: new Date().toISOString(), nomePlano: plano.nomePlano });
          await digitar();
          await enviar(
            `✅ *Bot ativado!*\n\n🏠 ${grupo.nomeGrupo || groupId}\n📦 ${plano.nomePlano}\n⏳ ${formatarTempo(plano.expiraEm)}`
          );
          await sock.sendMessage(groupId, {
            text: `🎉 *BotAluguel — Ativado!*\n\nUse *.menu* para ver as opções disponíveis. 🤖`
          });
          break;
        }

        case 'grupos': case 'meusgrupos': {
          await reagir('🏠'); await digitar();
          const grupos = getGruposDoUsuario(sender);
          const plano  = getPlanoAtivo(sender);

          if (grupos.length === 0) {
            return enviarBotoes(sock, from,
              `🏠 *Nenhum grupo vinculado.*\n\nAdicione o bot ao seu grupo para começar!`,
              '',
              [{ label: '🔗 Adicionar ao Grupo', id: '.link' }],
              info
            );
          }

          let msg = `🏠 *MEUS GRUPOS (${grupos.length})*\n${'═'.repeat(26)}\n\n`;
          for (const [i, g] of grupos.entries()) {
            const ico = g.status === 'ativo' ? '✅' : g.adminRecebido ? '🟡' : '⏳';
            msg += `${i+1}. ${ico} *${g.nomeGrupo || 'Grupo'}*\n`;
            if (g.status === 'ativo' && plano) msg += `   ⏳ ${formatarTempo(plano.expiraEm)}\n`;
            if (g.adminRecebido && g.status !== 'ativo') msg += `   ➜ \`.ativar ${g.id}\`\n`;
            if (!g.adminRecebido) msg += `   ➜ Aguardando ser promovido a admin\n`;
            msg += '\n';
          }
          await enviar(msg);
          break;
        }

        case 'ajuda': case 'help': {
          await reagir('❓'); await digitar();
          await enviar(
            `❓ *GUIA RÁPIDO*\n${'═'.repeat(26)}\n\n` +
            `*1. Recarregue moedas*\n.recarregar → pague via PIX\n\n` +
            `*2. Compre um plano*\n.planos → veja os planos\n.comprar [plano] → ative\n\n` +
            `*3. Adicione ao grupo*\n.link → envie o link do grupo\n\n` +
            `*4. Ative o bot*\n.ativar → após receber admin\n\n` +
            `${'─'.repeat(26)}\n` +
            `*.menu* *.painel* *.recarregar*\n*.planos* *.comprar* *.link*\n*.ativar* *.grupos* *.ajuda*`
          );
          await sleep(400);
          await enviarBotoes(sock, from, '⚡ Ações rápidas', '', [
            { label: '📊 Meu Painel',   id: '.painel'     },
            { label: '📦 Ver Planos',   id: '.planos'     },
            { label: '🔗 Adicionar',    id: '.link'       }
          ], info);
          break;
        }

        // ===== COMANDOS DO DONO =====
        case 'ligar':   { if (!ehDono) return; botAtivo = true;  return enviar("✅ Bot ligado!"); }
        case 'desligar':{ if (!ehDono) return; botAtivo = false; return enviar("🔴 Bot desligado!"); }
        case 'darmoedas': {
          if (!ehDono) return;
          const [num, qtd] = q.split(' ');
          if (!num || !qtd) return enviar("❌ Use: .darmoedas [número] [quantidade]");
          const targetId = num.replace(/\D/g, '') + '@s.whatsapp.net';
          createUser(targetId, 'Usuário');
          addMoedas(targetId, parseInt(qtd));
          return enviar(`✅ ${qtd} moedas → ${num}`);
        }
        case 'usuarios': {
          if (!ehDono) return;
          return enviar(`👥 Usuários: *${ler(PATHS.usuarios).length}*`);
        }
      }

    } catch (err) {
      console.error(chalk.red("[ERRO]"), err.message);
    }
  });
}

// ========== NOTIFICAÇÃO ADMIN RECEBIDO (função compartilhada) ==========
async function notificarAdminRecebido(sock, groupId) {
  try {
    const grupo = getGrupo(groupId);

    if (grupo) {
      // Grupo registrado — notificar dono
      updateGrupo(groupId, { aguardandoAdmin: false, adminRecebido: true });

      await sock.sendMessage(groupId, {
        text: `✅ *BotAluguel — Sou admin agora!*\n\n🤖 Obrigado! Agora o responsável deve me ativar enviando no privado:\n\n*.ativar ${groupId}*`
      });

      if (grupo.dono) {
        await sock.sendMessage(grupo.dono, {
          text:
            `🎉 *Admin recebido!*\n\n🏠 Grupo: *${grupo.nomeGrupo || groupId}*\n\n✅ Já sou admin! Para ativar o bot envie:\n\n*.ativar ${groupId}*`
        });
      }
    } else {
      // Grupo NÃO registrado (bot foi adicionado diretamente sem usar .link)
      await sock.sendMessage(groupId, {
        text:
          `✅ *BotAluguel — Sou admin neste grupo!*\n\n🤖 Para me ativar aqui, o responsável deve:\n1. Me enviar no privado: *.menu*\n2. Comprar um plano com *.planos*\n3. Usar *.link* para vincular este grupo`
      });
    }

    console.log(chalk.green(`[ADMIN] Notificação enviada para grupo: ${groupId}`));
  } catch (err) {
    console.error(chalk.red("[ADMIN NOTIFY ERRO]"), err.message);
  }
}

iniciarBot();
