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

// Número do dono (sem @s.whatsapp.net)
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

// ========== PLANOS ==========
const PLANOS = {
  basico:  { id: 'basico',  nome: '⭐ Básico',  moedas: 150, dias: 30, maxGrupos: 1  },
  pro:     { id: 'pro',     nome: '💎 Pro',      moedas: 350, dias: 30, maxGrupos: 5  },
  premium: { id: 'premium', nome: '👑 Premium',  moedas: 600, dias: 30, maxGrupos: -1 }
};
// 1 BRL = 10 moedas
const BRL_POR_MOEDA = 0.10;

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
function getUser(userId) {
  return ler(PATHS.usuarios).find(u => u.id === userId) || null;
}
function createUser(userId, nome) {
  const users = ler(PATHS.usuarios);
  if (users.find(u => u.id === userId)) return false;
  users.push({ id: userId, nome, moedas: 30, criadoEm: new Date().toISOString() });
  salvar(PATHS.usuarios, users);
  return true;
}
function getMoedas(userId) {
  const u = getUser(userId);
  return u ? (u.moedas ?? 0) : 0;
}
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
    // expired
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
  // Mark old plans as expired
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
function getGrupo(groupId) {
  return ler(PATHS.grupos).find(g => g.id === groupId) || null;
}
function getGruposDoUsuario(userId) {
  return ler(PATHS.grupos).filter(g => g.dono === userId);
}
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
const aguardandoLink  = new Map(); // userId -> true (esperando link do grupo)
const gruposPendentes = new Map(); // groupId -> userId (bot entrou, aguardando ativar)

// ========== HELPERS DE MENSAGEM ==========
function formatarTempo(expiraEm) {
  const diff = new Date(expiraEm).getTime() - Date.now();
  if (diff <= 0) return 'Expirado';
  const dias  = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  if (dias > 0) return `${dias}d ${horas}h`;
  return `${horas}h`;
}

// ========== MENUS ==========
async function enviarMenuPrincipal(sock, from, info, sender, nome) {
  const moedas = getMoedas(sender);
  const plano  = getPlanoAtivo(sender);
  const grupos = getGruposDoUsuario(sender);

  const caption =
    `🤖 *BOTALUGUEL*\n${'═'.repeat(28)}\n\n` +
    `👤 *${nome}*\n` +
    `🪙 Saldo: *${moedas} moedas*\n` +
    `📦 Plano: *${plano ? plano.nomePlano : 'Nenhum'}*\n` +
    `🏠 Grupos: *${grupos.length}*`;

  try {
    await sock.sendMessage(from, {
      listMessage: {
        title: '🤖 BotAluguel — Menu Principal',
        text: caption,
        footer: 'Selecione uma opção abaixo',
        buttonText: '📋 ABRIR MENU',
        sections: [
          {
            title: '💰 Minha Conta',
            rows: [
              { title: '📊 Meu Painel',        rowId: '.painel',      description: `Saldo: ${moedas} moedas` },
              { title: '💳 Recarregar Moedas', rowId: '.recarregar',  description: 'Comprar moedas via PIX' }
            ]
          },
          {
            title: '🤖 Meu Bot',
            rows: [
              { title: '🔗 Adicionar ao Grupo', rowId: '.link',    description: 'Vincular bot a um novo grupo' },
              { title: '🏠 Meus Grupos',        rowId: '.grupos',  description: `${grupos.length} grupo(s) vinculado(s)` },
              { title: '✅ Ativar Bot',         rowId: '.ativar',  description: 'Ativar bot em um grupo pendente' }
            ]
          },
          {
            title: '📦 Planos',
            rows: [
              { title: '📋 Ver Planos',    rowId: '.planos',              description: 'Básico, Pro e Premium' },
              { title: '⭐ Comprar Básico', rowId: '.comprar basico',    description: '150 moedas • 30 dias • 1 grupo' },
              { title: '💎 Comprar Pro',    rowId: '.comprar pro',       description: '350 moedas • 30 dias • 5 grupos' },
              { title: '👑 Comprar Premium',rowId: '.comprar premium',   description: '600 moedas • 30 dias • ilimitado' }
            ]
          },
          {
            title: '❓ Ajuda',
            rows: [
              { title: '❓ Como Funciona', rowId: '.ajuda', description: 'Guia rápido de uso' }
            ]
          }
        ]
      }
    }, { quoted: info });
  } catch {
    // Fallback para texto simples
    await sock.sendMessage(from, { text: caption + '\n\nComandos: .painel • .recarregar • .link • .grupos • .planos • .ajuda' }, { quoted: info });
  }
}

async function enviarMenuGrupo(sock, from, info) {
  const grupo = getGrupo(from);
  try {
    await sock.sendMessage(from, {
      listMessage: {
        title: '🤖 BotAluguel',
        text: `Bot ativo neste grupo!\nPlano: *${grupo?.nomePlano || '?'}*`,
        footer: 'Selecione uma opção',
        buttonText: '📋 ABRIR MENU',
        sections: [
          {
            title: '⚙️ Gerenciamento',
            rows: [
              { title: '📊 Status do Bot',    rowId: '.status',   description: 'Ver tempo restante do plano' },
              { title: '📋 Informações',      rowId: '.info',     description: 'Info do bot neste grupo' }
            ]
          }
        ]
      }
    }, { quoted: info });
  } catch {
    await sock.sendMessage(from, { text: '🤖 *BotAluguel* ativo!\n\n.status — Ver tempo do plano\n.info — Informações' }, { quoted: info });
  }
}

// ========== BOT PRINCIPAL ==========
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

  // Pairing code se não registrado
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

  // Verificar expirações a cada 6 horas
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

  // ========== DETECÇÃO DE ADMIN ==========
  sock.ev.on("group-participants.update", async ({ id: groupId, participants, action }) => {
    try {
      if (action !== 'promote') return;
      const botJid = sock.user.id.split(':')[0] + '@s.whatsapp.net';
      if (!participants.includes(botJid)) return;

      // Bot foi promovido a admin neste grupo
      const grupo = getGrupo(groupId);
      if (!grupo) return;

      updateGrupo(groupId, { aguardandoAdmin: false, adminRecebido: true });

      await sock.sendMessage(groupId, {
        text: `✅ *BotAluguel — Admin recebido!*\n\n🤖 Agora sou administrador deste grupo.\n\n📩 Para ativar o bot aqui, o responsável pelo grupo deve me enviar no *privado*:\n\n*.ativar ${groupId}*\n\nApós ativação, todos os recursos estarão disponíveis! 🚀`
      });

      // Notificar o dono do grupo no privado
      if (grupo.dono) {
        await sock.sendMessage(grupo.dono, {
          text: `🎉 *Admin recebido no grupo!*\n\n🏠 Grupo: *${grupo.nomeGrupo || groupId}*\n\n✅ Agora sou admin lá!\n\nPara ativar o bot, envie:\n\n*.ativar ${groupId}*`
        });
      }
    } catch {}
  });

  // ========== MENSAGENS ==========
  sock.ev.on("messages.upsert", async (mensagem) => {
    try {
      const info = mensagem.messages[0];
      if (!info.message) return;
      if (info.key.remoteJid === "status@broadcast") return;
      if (info.key.fromMe) return;

      const from    = info.key.remoteJid;
      const ehGrupo = from.endsWith('@g.us');
      const sender  = ehGrupo ? info.key.participant : from;
      const nome    = info.pushName || "Usuário";

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
      const digitar = async (ms = 1500) => {
        await sock.sendPresenceUpdate('composing', from);
        await sleep(ms);
        await sock.sendPresenceUpdate('paused', from);
      };

      // Detectar prefixo
      let prefixoUsado = null;
      for (const p of prefixos) { if (conteudo.startsWith(p)) { prefixoUsado = p; break; } }

      // ========== FLUXO: AGUARDANDO LINK DO GRUPO ==========
      if (!ehGrupo && aguardandoLink.has(sender)) {
        aguardandoLink.delete(sender);
        const link = conteudo.trim();
        if (!link.includes('chat.whatsapp.com/')) {
          return enviar("❌ Link inválido. Envie um link válido do grupo (ex: https://chat.whatsapp.com/XXXXX)\n\nTente novamente com *.link*");
        }
        const code = link.split('chat.whatsapp.com/')[1]?.split(/[?&\s]/)[0];
        if (!code) return enviar("❌ Não consegui extrair o código do link. Tente copiar o link completo.");

        await enviar("⏳ Entrando no grupo...");
        try {
          const groupId = await sock.groupAcceptInvite(code);
          await sleep(2000);

          // Buscar nome do grupo
          let nomeGrupo = groupId;
          try {
            const meta = await sock.groupMetadata(groupId);
            nomeGrupo = meta.subject || groupId;
          } catch {}

          addGrupo(groupId, sender, nomeGrupo);
          gruposPendentes.set(groupId, sender);

          await enviar(
            `✅ *Entrei no grupo!*\n\n🏠 *${nomeGrupo}*\n\nAgora preciso ser *administrador* do grupo para funcionar.\n\n📌 Peça a um admin do grupo para me promover a admin.\n\nApós ser promovido, você receberá uma notificação aqui!`
          );

          await sleep(3000);
          await sock.sendMessage(groupId, {
            text: `👋 *Olá! Sou o BotAluguel!*\n\n🤖 Fui adicionado por *${nome}* para gerenciar este grupo.\n\n⚠️ Para funcionar, preciso ser *administrador*.\n\nSe você é admin, por favor me promova! Após isso o bot será ativado. 🚀`
          });
        } catch (err) {
          await enviar(`❌ Erro ao entrar no grupo: ${err.message}\n\nVerifique se o link está correto e ainda válido.`);
        }
        return;
      }

      // Criar usuário automaticamente
      createUser(sender, nome);

      if (!prefixoUsado) return;
      const cmd = conteudo.toLowerCase().slice(prefixoUsado.length).split(/\s+/)[0];

      if (!botAtivo && !ehDono) return;
      console.log(chalk.gray(`[CMD] ${nome} > ${prefixoUsado}${cmd}${q ? ' ' + q : ''}`));

      // =========================================================
      // ========== COMANDOS DE GRUPO (após ativação) ==========
      // =========================================================
      if (ehGrupo) {
        const grupo = getGrupo(from);
        if (!grupo || grupo.status !== 'ativo') return; // bot inativo neste grupo

        switch (cmd) {
          case 'menu': case 'start': {
            await reagir('🤖');
            await digitar();
            await enviarMenuGrupo(sock, from, info);
            break;
          }
          case 'status': {
            await reagir('📊');
            const plano = getPlanoAtivo(grupo.dono);
            if (!plano) return enviar("⚠️ Plano expirado! O responsável deve renovar em *.planos*");
            const tempo = formatarTempo(plano.expiraEm);
            await enviar(
              `📊 *STATUS DO BOT*\n${'─'.repeat(22)}\n\n` +
              `🏠 Grupo: *${grupo.nomeGrupo || 'Este grupo'}*\n` +
              `✅ Status: *Ativo*\n` +
              `📦 Plano: *${plano.nomePlano}*\n` +
              `⏳ Tempo restante: *${tempo}*`
            );
            break;
          }
          case 'info': {
            await reagir('ℹ️');
            const metaGrupo = await sock.groupMetadata(from).catch(() => null);
            await enviar(
              `ℹ️ *INFORMAÇÕES*\n${'─'.repeat(22)}\n\n` +
              `🤖 Bot: *BotAluguel*\n` +
              `🏠 Grupo: *${metaGrupo?.subject || from}*\n` +
              `👥 Membros: *${metaGrupo?.participants?.length || '?'}*\n\n` +
              `Use *.menu* para ver as opções disponíveis.`
            );
            break;
          }
        }
        return;
      }

      // =========================================================
      // ========== COMANDOS PRIVADOS ==========
      // =========================================================
      switch (cmd) {

        // ----- MENU -----
        case 'menu': case 'start': case 'inicio': {
          await reagir('🤖');
          await digitar();
          await enviarMenuPrincipal(sock, from, info, sender, nome);
          break;
        }

        // ----- PAINEL -----
        case 'painel': case 'perfil': case 'eu': {
          await reagir('📊');
          await digitar();
          const moedas = getMoedas(sender);
          const plano  = getPlanoAtivo(sender);
          const grupos = getGruposDoUsuario(sender);
          const gruposAtivos = grupos.filter(g => g.status === 'ativo').length;

          let msg = `📊 *MEU PAINEL*\n${'═'.repeat(28)}\n\n`;
          msg += `👤 *${nome}*\n`;
          msg += `🪙 Moedas: *${moedas}*\n\n`;

          if (plano) {
            msg += `📦 *PLANO ATIVO*\n`;
            msg += `• Plano: *${plano.nomePlano}*\n`;
            msg += `• Grupos: *${plano.maxGrupos === -1 ? '∞ ilimitado' : plano.maxGrupos}*\n`;
            msg += `• Expira em: *${formatarTempo(plano.expiraEm)}*\n\n`;
          } else {
            msg += `📦 *Nenhum plano ativo.*\n_Use .planos para ver opções._\n\n`;
          }

          if (grupos.length > 0) {
            msg += `🏠 *MEUS GRUPOS (${grupos.length})*\n`;
            for (const g of grupos) {
              const ico = g.status === 'ativo' ? '✅' : (g.aguardandoAdmin ? '⏳' : '🔴');
              msg += `${ico} ${g.nomeGrupo || g.id}\n`;
              if (g.status === 'ativo' && plano) msg += `   ⏳ ${formatarTempo(plano.expiraEm)} restante\n`;
            }
          } else {
            msg += `🏠 *Nenhum grupo vinculado.*\n_Use .link para adicionar._`;
          }

          await enviar(msg);
          break;
        }

        // ----- RECARREGAR MOEDAS -----
        case 'recarregar': case 'recarga': {
          await reagir('💳');
          await digitar();

          if (q && !isNaN(parseFloat(q))) {
            // Valor informado diretamente
            const valor = parseFloat(parseFloat(q).toFixed(2));
            if (valor < 5) return enviar("❌ Valor mínimo: R$ 5,00 (50 moedas)");

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
            // Mostrar opções
            try {
              await sock.sendMessage(from, {
                listMessage: {
                  title: '💳 Recarregar Moedas',
                  text: `🪙 Saldo atual: *${getMoedas(sender)} moedas*\n\n1 BRL = 10 moedas\nMínimo: R$ 5,00 = 50 moedas`,
                  footer: 'Pagamento via PIX (Efí Bank)',
                  buttonText: '💳 ESCOLHER VALOR',
                  sections: [{
                    title: 'Escolha o valor',
                    rows: [
                      { title: 'R$ 10,00 = 100 moedas',  rowId: '.recarregar 10',  description: 'Ideal para 1 plano Básico' },
                      { title: 'R$ 20,00 = 200 moedas',  rowId: '.recarregar 20',  description: 'Dá para renovar planos' },
                      { title: 'R$ 35,00 = 350 moedas',  rowId: '.recarregar 35',  description: '1 plano Pro completo' },
                      { title: 'R$ 60,00 = 600 moedas',  rowId: '.recarregar 60',  description: '1 plano Premium completo' },
                      { title: 'R$ 100,00 = 1000 moedas',rowId: '.recarregar 100', description: 'Estoque de moedas' }
                    ]
                  }]
                }
              }, { quoted: info });
            } catch {
              await enviar(
                `💳 *RECARREGAR MOEDAS*\n${'─'.repeat(26)}\n\n` +
                `1 BRL = 10 moedas 🪙\nSaldo: *${getMoedas(sender)} moedas*\n\n` +
                `Use: *.recarregar [valor]*\n\nEx:\n• .recarregar 10 → 100 moedas\n• .recarregar 35 → 350 moedas\n• .recarregar 60 → 600 moedas`
              );
            }
          }
          break;
        }

        // ----- PLANOS -----
        case 'planos': {
          await reagir('📦');
          await digitar();
          const moedas = getMoedas(sender);
          const planoAtivo = getPlanoAtivo(sender);

          let msg = `📦 *PLANOS DISPONÍVEIS*\n${'═'.repeat(28)}\n\n`;
          msg += `🪙 Suas moedas: *${moedas}*\n\n`;

          for (const [, p] of Object.entries(PLANOS)) {
            const pode = moedas >= p.moedas ? '✅' : '❌';
            msg += `${p.nome}\n`;
            msg += `• Custo: *${p.moedas} moedas*\n`;
            msg += `• Duração: *${p.dias} dias*\n`;
            msg += `• Grupos: *${p.maxGrupos === -1 ? '∞ ilimitados' : p.maxGrupos}*\n`;
            msg += `• Disponível: ${pode}\n`;
            msg += `_Comando: .comprar ${p.id}_\n\n`;
          }

          if (planoAtivo) {
            msg += `📌 *Plano atual:* ${planoAtivo.nomePlano}\n`;
            msg += `⏳ Expira em: ${formatarTempo(planoAtivo.expiraEm)}`;
          }

          await enviar(msg);
          break;
        }

        // ----- COMPRAR PLANO -----
        case 'comprar': {
          await reagir('🛒');
          const planKey = q.toLowerCase().trim();
          const plano = PLANOS[planKey];

          if (!plano) {
            return enviar(`❌ Plano inválido.\n\nPlanos disponíveis:\n• .comprar basico\n• .comprar pro\n• .comprar premium`);
          }

          const moedas = getMoedas(sender);
          if (moedas < plano.moedas) {
            return enviar(
              `❌ *Moedas insuficientes!*\n\n` +
              `Você tem: *${moedas} moedas*\n` +
              `Necessário: *${plano.moedas} moedas*\n` +
              `Faltam: *${plano.moedas - moedas} moedas*\n\n` +
              `Use *.recarregar* para comprar moedas via PIX.`
            );
          }

          // Confirmar
          await digitar();
          try {
            await sock.sendMessage(from, {
              listMessage: {
                title: `🛒 Confirmar compra`,
                text: `${plano.nome}\n• ${plano.moedas} moedas\n• ${plano.dias} dias\n• ${plano.maxGrupos === -1 ? '∞ ilimitados' : plano.maxGrupos} grupos\n\nSeu saldo: ${moedas} moedas`,
                footer: 'Selecione para confirmar',
                buttonText: '🛒 CONFIRMAR',
                sections: [{
                  title: 'Ação',
                  rows: [
                    { title: `✅ Sim, comprar ${plano.nome}`, rowId: `.confirmar_compra ${planKey}`, description: `Gastar ${plano.moedas} moedas` },
                    { title: '❌ Cancelar', rowId: '.planos', description: 'Voltar aos planos' }
                  ]
                }]
              }
            }, { quoted: info });
          } catch {
            // Direto
            const ok = ativarPlano(sender, planKey);
            if (ok) {
              await reagir('🎉');
              await enviar(`✅ *Plano ${plano.nome} ativado!*\n\n🪙 Moedas gastas: *${plano.moedas}*\n💰 Saldo restante: *${getMoedas(sender)} moedas*\n⏳ Válido por *${plano.dias} dias*\n🏠 Grupos: *${plano.maxGrupos === -1 ? '∞ ilimitados' : plano.maxGrupos}*\n\nAgora use *.link* para adicionar o bot a um grupo!`);
            } else {
              await enviar("❌ Erro ao ativar plano. Tente novamente.");
            }
          }
          break;
        }

        // ----- CONFIRMAR COMPRA (seleção de lista) -----
        case 'confirmar_compra': {
          const planKey = q.toLowerCase().trim();
          const plano = PLANOS[planKey];
          if (!plano) return;

          await digitar();
          const ok = ativarPlano(sender, planKey);
          if (ok) {
            await reagir('🎉');
            await enviar(
              `✅ *Plano ${plano.nome} ativado!*\n${'═'.repeat(28)}\n\n` +
              `🪙 Moedas gastas: *${plano.moedas}*\n` +
              `💰 Saldo restante: *${getMoedas(sender)} moedas*\n` +
              `⏳ Duração: *${plano.dias} dias*\n` +
              `🏠 Grupos permitidos: *${plano.maxGrupos === -1 ? '∞ ilimitados' : plano.maxGrupos}*\n\n` +
              `🔗 Agora use *.link* para adicionar o bot ao seu grupo!`
            );
          } else {
            await enviar("❌ Erro ao ativar plano. Verifique seu saldo com *.painel*");
          }
          break;
        }

        // ----- ADICIONAR AO GRUPO (.link) -----
        case 'link': case 'adicionar': {
          await reagir('🔗');
          const plano = getPlanoAtivo(sender);

          if (!plano) {
            return enviar(
              `❌ *Você não tem um plano ativo!*\n\nAdquira um plano com *.planos* para poder adicionar o bot a grupos.\n\n_Use *.recarregar* para comprar moedas._`
            );
          }

          // Verificar limite de grupos
          const gruposAtivos = countGruposAtivos(sender);
          if (plano.maxGrupos !== -1 && gruposAtivos >= plano.maxGrupos) {
            return enviar(
              `❌ *Limite de grupos atingido!*\n\nSeu plano *${plano.nomePlano}* permite *${plano.maxGrupos}* grupo(s).\nVocê já tem *${gruposAtivos}* grupo(s) ativo(s).\n\nFaça upgrade com *.comprar pro* ou *.comprar premium*.`
            );
          }

          aguardandoLink.set(sender, true);
          await digitar();
          await enviar(
            `🔗 *ADICIONAR BOT AO GRUPO*\n${'─'.repeat(26)}\n\n` +
            `📋 Plano: *${plano.nomePlano}*\n` +
            `🏠 Grupos usados: *${gruposAtivos}/${plano.maxGrupos === -1 ? '∞' : plano.maxGrupos}*\n\n` +
            `Envie o link de convite do grupo:\n\n` +
            `_Exemplo: https://chat.whatsapp.com/XXXXX_\n\n` +
            `_(Abra o grupo → 3 pontos → Convidar pelo link → Copiar link)_`
          );
          break;
        }

        // ----- ATIVAR BOT NO GRUPO -----
        case 'ativar': {
          await reagir('✅');
          const groupId = q.trim();

          if (!groupId) {
            // Mostrar grupos pendentes
            const grupos = getGruposDoUsuario(sender).filter(g => g.adminRecebido && g.status !== 'ativo');
            if (grupos.length === 0) {
              return enviar(`❌ Nenhum grupo aguardando ativação.\n\nUse *.link* para adicionar o bot a um grupo primeiro.`);
            }
            let msg = `✅ *ATIVAR BOT*\n${'─'.repeat(22)}\n\nGrupos prontos para ativar:\n\n`;
            grupos.forEach((g, i) => { msg += `${i+1}. *${g.nomeGrupo || g.id}*\n\`\`\`${g.id}\`\`\`\n\n`; });
            msg += `Envie: *.ativar [ID do grupo]*`;
            return enviar(msg);
          }

          // Ativar grupo específico
          const grupo = getGrupo(groupId);
          if (!grupo) return enviar("❌ Grupo não encontrado.");
          if (grupo.dono !== sender) return enviar("❌ Este grupo não pertence a você.");
          if (!grupo.adminRecebido && !ehDono) {
            return enviar("⚠️ O bot ainda não recebeu permissão de admin neste grupo.\nPeça a um admin do grupo para me promover.");
          }
          if (grupo.status === 'ativo') return enviar("✅ O bot já está ativo neste grupo!");

          const plano = getPlanoAtivo(sender);
          if (!plano) return enviar("❌ Você não tem um plano ativo!\nAdquira um plano com *.planos*");

          const gruposAtivos = countGruposAtivos(sender);
          if (plano.maxGrupos !== -1 && gruposAtivos >= plano.maxGrupos) {
            return enviar(`❌ Limite de grupos atingido (${plano.maxGrupos}).\nFaça upgrade do seu plano.`);
          }

          updateGrupo(groupId, { status: 'ativo', ativadoEm: new Date().toISOString(), nomePlano: plano.nomePlano });
          await digitar();
          await enviar(
            `✅ *Bot ativado com sucesso!*\n\n` +
            `🏠 Grupo: *${grupo.nomeGrupo || groupId}*\n` +
            `📦 Plano: *${plano.nomePlano}*\n` +
            `⏳ Expira em: *${formatarTempo(plano.expiraEm)}*\n\n` +
            `O bot está funcionando no grupo agora! 🚀`
          );

          await sock.sendMessage(groupId, {
            text: `🎉 *BotAluguel — Ativado!*\n\n✅ O bot foi ativado neste grupo!\n\nUse *.menu* para ver as opções disponíveis. 🤖`
          });
          break;
        }

        // ----- MEUS GRUPOS -----
        case 'grupos': case 'meusgrupos': {
          await reagir('🏠');
          await digitar();
          const grupos = getGruposDoUsuario(sender);
          const plano  = getPlanoAtivo(sender);

          if (grupos.length === 0) {
            return enviar(`🏠 *Nenhum grupo vinculado.*\n\nUse *.link* para adicionar o bot a um grupo.`);
          }

          let msg = `🏠 *MEUS GRUPOS (${grupos.length})*\n${'═'.repeat(28)}\n\n`;
          for (const [i, g] of grupos.entries()) {
            const ico = g.status === 'ativo' ? '✅ Ativo' : g.adminRecebido ? '🟡 Aguardando ativação' : '⏳ Aguardando admin';
            msg += `*${i+1}. ${g.nomeGrupo || 'Grupo'}*\n`;
            msg += `• Status: ${ico}\n`;
            if (g.status === 'ativo' && plano) msg += `• Tempo: ${formatarTempo(plano.expiraEm)}\n`;
            if (g.adminRecebido && g.status !== 'ativo') msg += `• Use: \`.ativar ${g.id}\`\n`;
            msg += `\n`;
          }

          await enviar(msg);
          break;
        }

        // ----- AJUDA -----
        case 'ajuda': case 'help': case 'comandos': {
          await reagir('❓');
          await digitar();
          await enviar(
            `❓ *COMO FUNCIONA*\n${'═'.repeat(28)}\n\n` +
            `*1️⃣ Compre moedas*\n` +
            `*.recarregar [valor]* — Pague via PIX\n` +
            `_Ex: .recarregar 35 = 350 moedas_\n\n` +
            `*2️⃣ Escolha um plano*\n` +
            `*.planos* — Ver planos disponíveis\n` +
            `*.comprar [plano]* — Comprar plano\n` +
            `_Ex: .comprar basico_\n\n` +
            `*3️⃣ Adicione o bot ao grupo*\n` +
            `*.link* — Enviar link do grupo\n\n` +
            `*4️⃣ Ative o bot*\n` +
            `*.ativar [id]* — Após receber admin\n\n` +
            `${'─'.repeat(28)}\n` +
            `📋 *Todos os comandos:*\n` +
            `• .menu — Menu principal\n` +
            `• .painel — Seu painel\n` +
            `• .recarregar — Comprar moedas\n` +
            `• .planos — Ver planos\n` +
            `• .comprar — Comprar plano\n` +
            `• .link — Adicionar ao grupo\n` +
            `• .ativar — Ativar bot no grupo\n` +
            `• .grupos — Meus grupos\n` +
            `• .ajuda — Esta mensagem`
          );
          break;
        }

        // ========== COMANDOS DO DONO ==========
        case 'ligar': {
          if (!ehDono) return;
          botAtivo = true;
          return enviar("✅ Bot ligado!");
        }
        case 'desligar': {
          if (!ehDono) return;
          botAtivo = false;
          return enviar("🔴 Bot desligado!");
        }
        case 'darmoedas': {
          if (!ehDono) return;
          const [num, qtd] = q.split(' ');
          if (!num || !qtd) return enviar("❌ Use: .darmoedas [número] [quantidade]");
          const targetId = num.replace(/\D/g, '') + '@s.whatsapp.net';
          createUser(targetId, 'Usuário');
          addMoedas(targetId, parseInt(qtd));
          return enviar(`✅ ${qtd} moedas adicionadas para ${num}`);
        }
        case 'usuarios': {
          if (!ehDono) return;
          const users = ler(PATHS.usuarios);
          return enviar(`👥 Total de usuários: *${users.length}*`);
        }
        case 'grupos_total': {
          if (!ehDono) return;
          const grupos = ler(PATHS.grupos);
          const ativos = grupos.filter(g => g.status === 'ativo').length;
          return enviar(`🏠 Total de grupos: *${grupos.length}* (${ativos} ativos)`);
        }
      }

    } catch (err) {
      console.error(chalk.red("[ERRO]"), err.message);
    }
  });
}

iniciarBot();
