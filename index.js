// 🎰 CasinoBot — Bot de Cassino WhatsApp

// ========== MÓDULOS ==========
const { default: makeWASocket, DisconnectReason, useMultiFileAuthState,
  fetchLatestBaileysVersion, downloadContentFromMessage,
  generateWAMessageFromContent, proto } = require("baileys");
const fs      = require('fs');
const { Boom } = require('@hapi/boom');
const NodeCache = require("node-cache");
const readline  = require("readline");
const fetch     = require('node-fetch');
const pino      = require('pino');
const chalk     = require('chalk');
const { v4: uuidv4 } = require('uuid');

const { sendButtons } = require('./buttons');
const EfiBankPix = require('./efipay');

// ========== BANNER ==========
console.log(chalk.yellowBright("🎰 CASINO BOT — WhatsApp"));
console.log(chalk.cyan("═".repeat(40)));

// ========== CONFIG ==========
const prefixos = ['.', '!', '/', '#', '$'];
let botAtivo   = true;
const sleep    = ms => new Promise(r => setTimeout(r, ms));

let dono = "5511999999999@s.whatsapp.net";
const CASINO_IMG = 'https://static.wixstatic.com/media/79e6b8_5a82b1a250234f66a7aa8e237611160b~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/79e6b8_5a82b1a250234f66a7aa8e237611160b~mv2.jpg';

// ========== EFI BANK ==========
let efipay = null, efipayReady = false;
const EFI_CLIENT_ID     = 'Client_Id_c5402771eee923060261f03590f4d8b82ce4b88c';
const EFI_CLIENT_SECRET = 'Client_Secret_345bde04a214ac7e2464bbbb73b08b161ecfc2af';
const EFI_SANDBOX       = false;
const EFI_PIX_KEY       = 'a45331e2-840e-41dc-bc93-8f1bd2b6fd91';
const EFI_CERT_PATH     = './certificado.p12';

if (EFI_CLIENT_ID !== 'SEU_CLIENT_ID_AQUI') {
  try {
    efipay = new EfiBankPix({ client_id: EFI_CLIENT_ID, client_secret: EFI_CLIENT_SECRET, sandbox: EFI_SANDBOX, certificate: EFI_CERT_PATH });
    efipayReady = true;
    console.log(chalk.green(`✅ Efí Bank — modo: ${EFI_SANDBOX ? 'SANDBOX' : 'PRODUÇÃO'}`));
  } catch (err) { console.log(chalk.red("❌ Efí Bank:"), err.message); }
}

// ========== DATABASE ==========
const DB_PATH       = './database/';
const usuariosPath  = './database/usuarios.json';
const pagamentosPath = './database/pagamentos.json';

function initDatabase() {
  if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });
  if (!fs.existsSync(usuariosPath))  fs.writeFileSync(usuariosPath,  JSON.stringify([], null, 2));
  if (!fs.existsSync(pagamentosPath)) fs.writeFileSync(pagamentosPath, JSON.stringify([], null, 2));
}

const lerJSON  = p => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return []; } };
const salvarJSON = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 2));

function adicionarUsuario(userId, nome) {
  const users = lerJSON(usuariosPath);
  if (!users.find(u => u.id === userId)) {
    users.push({ id: userId, nome, fichas: 500, ultimoBonus: null, totalGanho: 0, criadoEm: new Date() });
    salvarJSON(usuariosPath, users);
    return true;
  }
  return false;
}

function getFichas(userId) {
  const u = lerJSON(usuariosPath).find(u => u.id === userId);
  return u ? (u.fichas ?? 500) : 500;
}

function addFichas(userId, qtd) {
  const users = lerJSON(usuariosPath);
  const i = users.findIndex(u => u.id === userId);
  if (i !== -1) { users[i].fichas = (users[i].fichas ?? 500) + qtd; salvarJSON(usuariosPath, users); return users[i].fichas; }
  return 0;
}

function remFichas(userId, qtd) {
  const users = lerJSON(usuariosPath);
  const i = users.findIndex(u => u.id === userId);
  if (i !== -1 && (users[i].fichas ?? 500) >= qtd) {
    users[i].fichas = (users[i].fichas ?? 500) - qtd;
    salvarJSON(usuariosPath, users); return true;
  }
  return false;
}

function podePegarBonus(userId) {
  const u = lerJSON(usuariosPath).find(u => u.id === userId);
  if (!u || !u.ultimoBonus) return true;
  const hj = new Date(); hj.setHours(0,0,0,0);
  return new Date(u.ultimoBonus) < hj;
}

function registrarBonus(userId) {
  const users = lerJSON(usuariosPath);
  const i = users.findIndex(u => u.id === userId);
  if (i !== -1) { users[i].ultimoBonus = new Date(); salvarJSON(usuariosPath, users); }
}

// ========== PAGAMENTO PIX (RECARGA) — 1 BRL = 1 FICHA ==========
async function gerarRecargaPix(userId, valorReais) {
  if (!efipayReady) return { error: "PIX não configurado. Contate o dono." };
  try {
    const fichas = Math.floor(valorReais);
    const cobranca = await efipay.pixCreateImmediateCharge({
      calendario: { expiracao: 3600 },
      valor: { original: valorReais.toFixed(2) },
      chave: EFI_PIX_KEY,
      solicitacaoPagador: `Casino Bot — ${fichas} fichas — ${userId.split('@')[0]}`
    });
    if (!cobranca?.txid) return { error: "Resposta inválida da Efí" };
    const qrData = await efipay.pixGenerateQRCode(cobranca.loc?.id);
    const pag = { txid: cobranca.txid, userId, fichas, valor: valorReais, status: 'pendente', criadoEm: new Date(), expiraEm: new Date(Date.now() + 3600000), qrCodeBase64: qrData.imagemQrcode, copiaCola: qrData.qrcode };
    const pags = lerJSON(pagamentosPath); pags.push(pag); salvarJSON(pagamentosPath, pags);
    return pag;
  } catch (err) { return { error: err.message }; }
}

async function verificarRecarga(txid) {
  if (!efipayReady) return { status: 'erro' };
  try {
    const res = await efipay.pixDetailCharge(txid);
    if (res.status === 'CONCLUIDA') {
      const pags = lerJSON(pagamentosPath);
      const i = pags.findIndex(p => p.txid === txid);
      if (i !== -1 && pags[i].status !== 'pago') {
        pags[i].status = 'pago'; pags[i].pagoEm = new Date();
        salvarJSON(pagamentosPath, pags);
        addFichas(pags[i].userId, pags[i].fichas);
        return { status: 'pago', fichas: pags[i].fichas, userId: pags[i].userId };
      }
    }
    return { status: res.status === 'ATIVA' ? 'pendente' : 'expirado' };
  } catch { return { status: 'erro' }; }
}

function monitorarRecarga(txid, from, sock) {
  let t = 0;
  const iv = setInterval(async () => {
    if (++t > 240) return clearInterval(iv);
    try {
      const r = await verificarRecarga(txid);
      if (r.status === 'pago') {
        clearInterval(iv);
        await sock.sendMessage(from, { text: `✅ *RECARGA CONFIRMADA!*\n\n🎰 *+${r.fichas} fichas* adicionadas!\n💰 Novo saldo: *${getFichas(r.userId)} fichas*` });
      }
    } catch {}
  }, 15000);
}

// ========== SESSÕES DE JOGO EM MEMÓRIA ==========
const sessoesJogo = new Map();

// ========== FUNÇÕES DOS JOGOS ==========

// --- SLOT ---
const SLOT_EMOJIS = ['🍒','🍋','🔔','💎','7️⃣','⭐','🃏'];

function gerarSlot() {
  return Array(3).fill(0).map(() => SLOT_EMOJIS[Math.floor(Math.random() * SLOT_EMOJIS.length)]);
}

function calcularGanhoSlot(res, aposta) {
  if (res[0] === res[1] && res[1] === res[2]) {
    if (res[0] === '7️⃣') return { ganho: aposta * 10, msg: '🎊 JACKPOT MÁXIMO! 10x' };
    if (res[0] === '💎') return { ganho: aposta * 5,  msg: '💎 DIAMANTE! 5x' };
    if (res[0] === '⭐') return { ganho: aposta * 3,  msg: '⭐ ESTRELA! 3x' };
    return { ganho: aposta * 2, msg: '🎉 TRIPLO! 2x' };
  }
  if (res[0] === res[1] || res[1] === res[2] || res[0] === res[2]) return { ganho: Math.floor(aposta * 0.5), msg: '😅 Par... devolveu metade' };
  return { ganho: 0, msg: '😢 Sem sorte!' };
}

// --- ROLETA ---
const ROLETA = [];
for (let n = 0; n <= 36; n++) {
  const cor = n === 0 ? '⚫' : (n % 2 === 0 ? '⚫' : '🔴');
  ROLETA.push({ n, cor });
}

function calcularGanhoRoleta(aposta, tipo, resultado) {
  const { n, cor } = resultado;
  if (tipo === 'vermelho' && cor === '🔴') return aposta * 1.8;
  if (tipo === 'preto'    && cor === '⚫' && n !== 0) return aposta * 1.8;
  if (tipo === 'par'      && n !== 0 && n % 2 === 0) return aposta * 1.8;
  if (tipo === 'impar'    && n % 2 !== 0) return aposta * 1.8;
  if (tipo === '1-12'     && n >= 1 && n <= 12)  return aposta * 2.8;
  if (tipo === '13-24'    && n >= 13 && n <= 24) return aposta * 2.8;
  if (tipo === '25-36'    && n >= 25 && n <= 36) return aposta * 2.8;
  if (!isNaN(parseInt(tipo)) && parseInt(tipo) === n) return aposta * 35;
  return 0;
}

// --- BLACKJACK ---
const BJ_NAIPES = ['♠','♥','♦','♣'];
const BJ_VALS   = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function criarBaralho() {
  return BJ_NAIPES.flatMap(n => BJ_VALS.map(v => ({ n, v }))).sort(() => Math.random() - 0.5);
}

function valorCarta(v) {
  if (['J','Q','K'].includes(v)) return 10;
  if (v === 'A') return 11;
  return parseInt(v);
}

function calcMao(mao) {
  let t = mao.reduce((s, c) => s + valorCarta(c.v), 0);
  let as = mao.filter(c => c.v === 'A').length;
  while (t > 21 && as-- > 0) t -= 10;
  return t;
}

function exibirMao(mao) { return mao.map(c => `${c.n}${c.v}`).join(' '); }

// --- MINES ---
const MINES_MULTS = [1.2, 1.5, 2.0, 3.0, 5.0, 8.0, 13.0, 20.0, 50.0];

function gerarMines(qtdBombas = 3) {
  const idx = Array.from({length: 9}, (_, i) => i).sort(() => Math.random() - 0.5);
  return idx.slice(0, qtdBombas);
}

function montarTextoBoardMines(sess) {
  const icons = Array(9).fill('🔒');
  for (const r of sess.reveladas) icons[r] = sess.bombas.includes(r) ? '💣' : '💎';
  const linhas = [
    `${icons[0]} ${icons[1]} ${icons[2]}`,
    `${icons[3]} ${icons[4]} ${icons[5]}`,
    `${icons[6]} ${icons[7]} ${icons[8]}`
  ];
  const gemasReveladas = sess.reveladas.filter(r => !sess.bombas.includes(r)).length;
  const mult = MINES_MULTS[Math.min(gemasReveladas, MINES_MULTS.length - 1)];
  return `💣 *CAMPO MINADO*\nAposta: ${sess.aposta} fichas\n\n${linhas.join('\n')}\n\nGemas: ${gemasReveladas}/6 | Próx mult: ${mult}x\nPotencial: ${Math.floor(sess.aposta * mult)} fichas`;
}

function montarBotoesMines(sess) {
  const bts = [];
  for (let i = 0; i < 9; i++) {
    if (!sess.reveladas.includes(i)) {
      bts.push({ label: `🔒 ${i+1}`, id: `.celula${i}` });
    }
  }
  const gemasRev = sess.reveladas.filter(r => !sess.bombas.includes(r)).length;
  if (gemasRev > 0) {
    const mult = MINES_MULTS[Math.min(gemasRev - 1, MINES_MULTS.length - 1)];
    bts.unshift({ label: `💰 Sacar (${Math.floor(sess.aposta * mult)} fichas)`, id: '.sacar' });
  }
  return bts;
}

// --- TORRE ---
const TORRE_MULTS = [1.5, 2.5, 4.0, 7.0, 15.0];

// --- CRASH ---
function gerarCrashPoint() {
  const r = Math.random();
  if (r < 0.4) return parseFloat((1.0 + Math.random()).toFixed(2));
  if (r < 0.7) return parseFloat((2.0 + Math.random() * 2).toFixed(2));
  if (r < 0.9) return parseFloat((4.0 + Math.random() * 6).toFixed(2));
  return parseFloat((10.0 + Math.random() * 40).toFixed(2));
}

// ========== FUNÇÃO PRINCIPAL ==========
async function iniciarBot() {
  console.log(chalk.cyanBright("\n🎰 Iniciando Casino Bot..."));
  initDatabase();

  const { state, saveCreds } = await useMultiFileAuthState("./sessao");
  const { version }          = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  const sock = makeWASocket({
    version, logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: { creds: state.creds, keys: state.keys },
    markOnlineOnConnect: true,
    msgRetryCounterCache
  });

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
      console.log(chalk.yellow("WhatsApp > Configurações > Aparelhos conectados > Conectar com código\n"));
    } catch (err) { console.error(chalk.red("❌ Erro:"), err.message); process.exit(1); }
  }

  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) { console.log(chalk.red("❌ Sessão encerrada.")); process.exit(0); }
      else { console.log(chalk.yellow("⚠️ Reconectando em 3s...")); setTimeout(iniciarBot, 3000); }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ Casino Bot conectado!"));
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async (mensagem) => {
    try {
      const info = mensagem.messages[0];
      if (!info.message) return;
      if (info.key.remoteJid === "status@broadcast") return;
      if (info.key.fromMe) return;

      const from    = info.key.remoteJid;
      const ehGrupo = from.endsWith('@g.us');
      const sender  = ehGrupo ? info.key.participant : from;
      const nome    = info.pushName || "Jogador";

      let conteudo = info.message?.conversation ||
        info.message?.extendedTextMessage?.text ||
        info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
        info.message?.buttonsResponseMessage?.selectedButtonId ||
        info.message?.templateButtonReplyMessage?.selectedId || "";

      if (!conteudo && info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
        try { conteudo = JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id || ""; } catch {}
      }

      const args       = conteudo.trim().split(/ +/).slice(1);
      const comando    = conteudo.toLowerCase().split(" ")[0];
      const q          = args.join(' ');
      const ehDono     = sender === dono;

      const enviar  = t => sock.sendMessage(from, { text: t }, { quoted: info });
      const reagir  = e => sock.sendMessage(from, { react: { text: e, key: info.key } });
      const digitar = async (ms = 2000) => {
        await sock.sendPresenceUpdate('available', from);
        await sock.sendPresenceUpdate('composing', from);
        await sleep(ms);
        await sock.sendPresenceUpdate('paused', from);
      };

      const enviarBotoes = (titulo, corpo, rodape, botoes) =>
        sendButtons(sock, from, { title: titulo, text: corpo, footer: rodape, buttons: botoes.map(b => ({ id: b.id, text: b.label })) });

      // ========== MENU CASSINO COM IMAGEM ==========
      const enviarMenu = async () => {
        const fichas = getFichas(sender);
        const caption =
          `🎰 *CASINO BOT*\n` +
          `${'═'.repeat(22)}\n\n` +
          `👤 *${nome}*\n` +
          `💰 Fichas: *${fichas.toLocaleString('pt-BR')}* 🪙\n\n` +
          `_Bem-vindo ao cassino! Boa sorte!_ 🍀`;

        await sock.sendMessage(from, { image: { url: CASINO_IMG }, caption }, { quoted: info });
        await sleep(800);
        await enviarBotoes(
          "🎰 CASINO BOT",
          `💰 Fichas: ${fichas.toLocaleString('pt-BR')} 🪙`,
          "O que você quer fazer?",
          [
            { label: "🎮 Jogar",         id: ".jogos"       },
            { label: "👤 Meu Perfil",    id: ".perfil"      },
            { label: "🏆 Ranking",       id: ".rank"        },
            { label: "🎁 Bônus Diário",  id: ".diario"      },
            { label: "💳 Recarregar",    id: ".recarregar"  }
          ]
        );
      };

      // ========== DETECÇÃO DE PREFIXO ==========
      let prefixoUsado = null;
      for (const p of prefixos) { if (comando.startsWith(p)) { prefixoUsado = p; break; } }

      // ========== NOVO USUÁRIO ==========
      const ehNovo = adicionarUsuario(sender, nome);
      if (ehNovo && !prefixoUsado) {
        await digitar(2500);
        await reagir('🎰');
        await enviar(`🎰 *Bem-vindo ao Casino Bot, ${nome}!*\n\nVocê ganhou *500 fichas* de boas-vindas! 🪙\n\nUse .menu para começar.`);
        await sleep(1500);
        await enviarMenu();
        return;
      }

      if (!prefixoUsado) return;

      const cmd = comando.slice(prefixoUsado.length);
      if (!botAtivo && !ehDono) return;

      console.log(chalk.gray(`[CMD] ${nome} > ${prefixoUsado}${cmd}${q ? ' '+q : ''}`));

      // ========== SESSÕES ATIVAS — PRIORIDADE ==========
      const sessao = sessoesJogo.get(sender);

      if (sessao) {
        // --- BLACKJACK ---
        if (sessao.jogo === 'bj') {
          if (cmd === 'pedir') {
            await reagir('🃏');
            sessao.maoJogador.push(sessao.baralho.pop());
            const total = calcMao(sessao.maoJogador);
            if (total > 21) {
              sessoesJogo.delete(sender);
              remFichas(sender, sessao.aposta);
              await reagir('💀');
              return enviar(`🃏 *BLACKJACK*\n\nSua mão: ${exibirMao(sessao.maoJogador)} = *${total}*\n\n💥 *ESTOUROU! PERDEU!*\n💰 Saldo: ${getFichas(sender)} fichas`);
            }
            await enviarBotoes(
              "🃏 Blackjack",
              `Sua mão: ${exibirMao(sessao.maoJogador)} = *${total}*\nDealer: ${exibirMao([sessao.maoDealer[0]])} ?`,
              `Aposta: ${sessao.aposta} fichas`,
              [{ label: "🃏 Pedir carta", id: ".pedir" }, { label: "🛑 Parar", id: ".parar" }]
            );
            return;
          }

          if (cmd === 'parar') {
            await reagir('🛑');
            await digitar(2000);
            // Dealer joga
            while (calcMao(sessao.maoDealer) < 17) sessao.maoDealer.push(sessao.baralho.pop());
            const pJ = calcMao(sessao.maoJogador);
            const pD = calcMao(sessao.maoDealer);
            sessoesJogo.delete(sender);
            let resultado, ganho;
            if (pD > 21 || pJ > pD) {
              ganho = Math.floor(sessao.aposta * 1.8);
              addFichas(sender, ganho);
              resultado = `🎉 *VOCÊ GANHOU!* +${ganho} fichas`;
              await reagir('🎉');
            } else if (pJ === pD) {
              ganho = sessao.aposta;
              addFichas(sender, ganho);
              resultado = `🤝 *EMPATE!* Fichas devolvidas`;
            } else {
              remFichas(sender, sessao.aposta);
              resultado = `😢 *DEALER GANHOU!* -${sessao.aposta} fichas`;
              await reagir('😢');
            }
            return enviar(`🃏 *BLACKJACK — RESULTADO*\n\nSua mão: ${exibirMao(sessao.maoJogador)} = *${pJ}*\nDealer: ${exibirMao(sessao.maoDealer)} = *${pD}*\n\n${resultado}\n💰 Saldo: ${getFichas(sender)} fichas`);
          }
        }

        // --- MINES ---
        if (sessao.jogo === 'mines') {
          if (cmd === 'sacar') {
            const gemasRev = sessao.reveladas.filter(r => !sessao.bombas.includes(r)).length;
            if (gemasRev === 0) { sessoesJogo.delete(sender); return enviar("❌ Revele pelo menos 1 gema antes de sacar!"); }
            const mult = MINES_MULTS[Math.min(gemasRev - 1, MINES_MULTS.length - 1)];
            const ganho = Math.floor(sessao.aposta * mult);
            addFichas(sender, ganho);
            sessoesJogo.delete(sender);
            await reagir('💰');
            return enviar(`💰 *MINES — SAQUE*\n\nGemas reveladas: ${gemasRev}\nMultiplicador: ${mult}x\n🎉 Ganhou: *+${ganho} fichas*\n💰 Saldo: ${getFichas(sender)} fichas`);
          }

          if (cmd.startsWith('celula') && !isNaN(cmd.slice(6))) {
            const idx = parseInt(cmd.slice(6));
            if (idx < 0 || idx > 8 || sessao.reveladas.includes(idx)) return;
            sessao.reveladas.push(idx);
            await reagir('🔍');

            if (sessao.bombas.includes(idx)) {
              // BOMBA!
              sessoesJogo.delete(sender);
              remFichas(sender, sessao.aposta);
              const board = montarTextoBoardMines(sessao);
              await reagir('💥');
              return enviar(`${board}\n\n💥 *BOOM! VOCÊ BATEU EM UMA BOMBA!*\nPERDEU ${sessao.aposta} fichas!\n💰 Saldo: ${getFichas(sender)} fichas`);
            }

            // Gema!
            const gemasRev = sessao.reveladas.filter(r => !sessao.bombas.includes(r)).length;
            if (gemasRev >= 6) {
              // Todas gemas reveladas = jackpot
              const ganho = Math.floor(sessao.aposta * MINES_MULTS[MINES_MULTS.length - 1]);
              addFichas(sender, ganho);
              sessoesJogo.delete(sender);
              await reagir('🎊');
              return enviar(`${montarTextoBoardMines(sessao)}\n\n🎊 *JACKPOT! TODAS AS GEMAS!*\n+${ganho} fichas!\n💰 Saldo: ${getFichas(sender)} fichas`);
            }

            const board = montarTextoBoardMines(sessao);
            await enviar(board);
            await sleep(500);
            await enviarBotoes(
              "💣 Mines",
              `Gemas: ${gemasRev} reveladas`,
              "Clique numa célula ou saque!",
              montarBotoesMines(sessao)
            );
            return;
          }
        }

        // --- TORRE ---
        if (sessao.jogo === 'torre') {
          const portaCmd = { 'porta1': 1, 'porta2': 2, 'porta3': 3 };
          if (cmd in portaCmd) {
            const escolha = portaCmd[cmd];
            await reagir('🗼');
            const portaCerta = sessao.portasCertas[sessao.andarAtual - 1];

            if (escolha !== portaCerta) {
              // ELIMINADO
              sessoesJogo.delete(sender);
              remFichas(sender, sessao.aposta);
              await reagir('💥');
              return enviar(`🗼 *TORRE — ANDAR ${sessao.andarAtual}*\n\n💥 A Porta ${escolha} era uma ARMADILHA!\nA porta certa era a ${portaCerta}!\n\nPERDEU ${sessao.aposta} fichas!\n💰 Saldo: ${getFichas(sender)} fichas`);
            }

            // PASSOU!
            if (sessao.andarAtual >= 5) {
              const ganho = Math.floor(sessao.aposta * TORRE_MULTS[4]);
              addFichas(sender, ganho);
              sessoesJogo.delete(sender);
              await reagir('🏆');
              return enviar(`🗼 *TORRE — COMPLETOU!*\n\n🏆 Chegou ao topo!\nMultiplicador: 15x\n🎉 Ganhou: *+${ganho} fichas*!\n💰 Saldo: ${getFichas(sender)} fichas`);
            }

            sessao.andarAtual++;
            const mult = TORRE_MULTS[sessao.andarAtual - 2];
            const multProx = TORRE_MULTS[sessao.andarAtual - 1];
            const sacando = Math.floor(sessao.aposta * mult);
            await digitar(1500);
            await enviarBotoes(
              `🗼 Torre — Andar ${sessao.andarAtual}/5`,
              `✅ Passou! Mult atual: ${mult}x\nAndar ${sessao.andarAtual} — Próximo: ${multProx}x`,
              `Sacar agora (${sacando} fichas) ou continue?`,
              [
                { label: "🚪 Porta 1", id: ".porta1" },
                { label: "🚪 Porta 2", id: ".porta2" },
                { label: "🚪 Porta 3", id: ".porta3" },
                { label: `💰 Sacar (${sacando} fichas)`, id: ".sacar" }
              ]
            );
            return;
          }

          if (cmd === 'sacar') {
            const mult = sessao.andarAtual > 1 ? TORRE_MULTS[sessao.andarAtual - 2] : 0;
            if (sessao.andarAtual === 1) { return enviar("❌ Escolha uma porta primeiro para poder sacar!"); }
            const ganho = Math.floor(sessao.aposta * mult);
            addFichas(sender, ganho);
            sessoesJogo.delete(sender);
            await reagir('💰');
            return enviar(`🗼 *TORRE — SAQUE*\n\nAndar atingido: ${sessao.andarAtual - 1}/5\nMultiplicador: ${mult}x\n🎉 Ganhou: *+${ganho} fichas*!\n💰 Saldo: ${getFichas(sender)} fichas`);
          }
        }

        // --- CRASH ---
        if (sessao.jogo === 'crash' && cmd === 'ejetar') {
          clearInterval(sessao.timer);
          const mult = sessao.multAtual;
          const ganho = Math.floor(sessao.aposta * mult);
          sessoesJogo.delete(sender);
          addFichas(sender, ganho);
          await reagir('🚀');
          return enviar(`💥 *CRASH — EJETOU!*\n\nMultiplicador: *${mult}x*\n🎉 Ganhou: *+${ganho} fichas*!\n💰 Saldo: ${getFichas(sender)} fichas`);
        }

        // --- RASPADINHA ---
        if (sessao.jogo === 'raspadinha') {
          const rasparCmd = { 'raspar1': 0, 'raspar2': 1, 'raspar3': 2 };
          if (cmd in rasparCmd) {
            const idx = rasparCmd[cmd];
            if (sessao.reveladas[idx]) return;
            sessao.reveladas[idx] = true;
            await reagir('🎁');

            const mostrar = sessao.simbolos.map((s, i) => sessao.reveladas[i] ? s : '🔒');
            const todasReveladas = sessao.reveladas.every(Boolean);

            if (!todasReveladas) {
              const bts = [];
              if (!sessao.reveladas[0]) bts.push({ label: "🔒 Raspar 1", id: ".raspar1" });
              if (!sessao.reveladas[1]) bts.push({ label: "🔒 Raspar 2", id: ".raspar2" });
              if (!sessao.reveladas[2]) bts.push({ label: "🔒 Raspar 3", id: ".raspar3" });
              await enviarBotoes(
                "🎁 Raspadinha",
                `[ ${mostrar[0]} ] [ ${mostrar[1]} ] [ ${mostrar[2]} ]\nRaspando...`,
                `Aposta: ${sessao.aposta} fichas`,
                bts
              );
              return;
            }

            // Todas reveladas — resultado
            sessoesJogo.delete(sender);
            const s = sessao.simbolos;
            let ganho = 0, msg;
            if (s[0] === s[1] && s[1] === s[2]) {
              if (s[0] === '💎') { ganho = sessao.aposta * 10; msg = '💎 JACKPOT TRIPLO! 10x'; }
              else if (s[0] === '7️⃣') { ganho = sessao.aposta * 5; msg = '🎰 TRIPLO SETE! 5x'; }
              else { ganho = sessao.aposta * 3; msg = '🎉 TRIPLO! 3x'; }
            } else if (s[0] === s[1] || s[1] === s[2] || s[0] === s[2]) {
              ganho = Math.floor(sessao.aposta * 1.5);
              msg = '😊 PAR! 1.5x';
            } else {
              msg = '😢 Sem sorte!';
            }
            if (ganho > 0) { addFichas(sender, ganho); await reagir('🎉'); }
            else { remFichas(sender, sessao.aposta); await reagir('😢'); }
            return enviar(`🎁 *RASPADINHA — RESULTADO*\n\n[ ${s[0]} ] [ ${s[1]} ] [ ${s[2]} ]\n\n${msg}\n${ganho > 0 ? `🎉 +${ganho} fichas` : `💸 -${sessao.aposta} fichas`}\n💰 Saldo: ${getFichas(sender)} fichas`);
          }
        }

        // --- DRAGÃO OU FÊNIX ---
        if (sessao.jogo === 'dragao') {
          if (cmd === 'dragao' || cmd === 'fenix') {
            const escolha = cmd;
            await reagir('🐉');
            await digitar(2000);

            const scoreDragao = parseFloat((Math.random() * 9).toFixed(1));
            const scoreFenix  = parseFloat((Math.random() * 9).toFixed(1));
            const distDragao  = Math.abs(7.5 - scoreDragao);
            const distFenix   = Math.abs(7.5 - scoreFenix);

            sessoesJogo.delete(sender);

            let vencedor;
            if (Math.abs(distDragao - distFenix) < 0.01) vencedor = 'empate';
            else vencedor = distDragao < distFenix ? 'dragao' : 'fenix';

            let resultado, ganho = 0;
            if (vencedor === 'empate') {
              ganho = Math.floor(sessao.aposta * 0.9);
              addFichas(sender, ganho);
              resultado = `🤝 *EMPATE!* Devolvidos ${ganho} fichas`;
            } else if (vencedor === escolha) {
              ganho = Math.floor(sessao.aposta * 1.9);
              addFichas(sender, ganho);
              resultado = `🎉 *VOCÊ GANHOU!* +${ganho} fichas`;
              await reagir('🎉');
            } else {
              remFichas(sender, sessao.aposta);
              resultado = `😢 *PERDEU!* -${sessao.aposta} fichas`;
              await reagir('😢');
            }

            return enviar(`🐉🔥 *DRAGÃO ou FÊNIX*\n\n🐉 Dragão: *${scoreDragao}* pts\n🔥 Fênix: *${scoreFenix}* pts\n_(mais próximo de 7.5 vence)_\n\nVencedor: ${vencedor === 'empate' ? 'EMPATE' : vencedor === 'dragao' ? '🐉 Dragão' : '🔥 Fênix'}\nSua escolha: ${escolha === 'dragao' ? '🐉 Dragão' : '🔥 Fênix'}\n\n${resultado}\n💰 Saldo: ${getFichas(sender)} fichas`);
          }
        }
      }

      // ========== COMANDOS PRINCIPAIS ==========
      switch (cmd) {

        // ----- MENU -----
        case 'menu': case 'start': case 'inicio': {
          await reagir('🎰');
          await digitar(1500);
          await enviarMenu();
          break;
        }

        // ----- JOGOS -----
        case 'jogos': {
          await reagir('🎮');
          await digitar(1500);
          await enviarBotoes(
            "🎮 Escolha um Jogo",
            `💰 Suas fichas: ${getFichas(sender)} 🪙\n\nTodos os jogos aceitam apostas.\nUse: .jogo [valor da aposta]`,
            "Selecione ou use o comando",
            [
              { label: "🎰 Slot — .slot 50",          id: ".slot 50"      },
              { label: "🎲 Dado — .dado 50",           id: ".dado 50"      },
              { label: "⚡ Duplicar — .duplicar 50",   id: ".duplicar 50"  },
              { label: "🎡 Roleta — .roleta 50",       id: ".roleta 50"    },
              { label: "🎁 Raspadinha — .raspadinha 50", id: ".raspadinha 50" },
              { label: "🃏 Blackjack — .bj 50",        id: ".bj 50"        },
              { label: "💣 Mines — .mines 50",         id: ".mines 50"     },
              { label: "🗼 Torre — .torre 50",          id: ".torre 50"     },
              { label: "💥 Crash — .crash 50",         id: ".crash 50"     },
              { label: "🐉 Dragão ou Fênix — .dragao 50", id: ".dragao 50" }
            ]
          );
          break;
        }

        // ----- PERFIL -----
        case 'perfil': {
          await reagir('👤');
          await digitar(1500);
          const users  = lerJSON(usuariosPath);
          const u      = users.find(u => u.id === sender);
          const posRank = users.sort((a,b) => (b.fichas||0)-(a.fichas||0)).findIndex(u => u.id === sender) + 1;
          enviar(
            `👤 *PERFIL*\n${'─'.repeat(20)}\n` +
            `Nome: *${nome}*\n` +
            `💰 Fichas: *${getFichas(sender).toLocaleString('pt-BR')}* 🪙\n` +
            `🏆 Ranking: *#${posRank}*\n` +
            `📅 Membro desde: ${u?.criadoEm ? new Date(u.criadoEm).toLocaleDateString('pt-BR') : '?'}`
          );
          break;
        }

        // ----- BÔNUS DIÁRIO -----
        case 'diario': case 'bonus': {
          await reagir('🎁');
          await digitar(1500);
          if (!podePegarBonus(sender)) {
            return enviar("⏰ Você já pegou seu bônus hoje!\nVolte amanhã para mais 100 fichas! 🎁");
          }
          registrarBonus(sender);
          addFichas(sender, 100);
          await reagir('🎉');
          enviar(`🎁 *BÔNUS DIÁRIO!*\n\n+100 fichas adicionadas! 🪙\n💰 Novo saldo: *${getFichas(sender)} fichas*\n\nVolte amanhã para mais! 🍀`);
          break;
        }

        // ----- RANKING -----
        case 'rank': {
          await reagir('🏆');
          await digitar(1500);
          const users = lerJSON(usuariosPath).sort((a, b) => (b.fichas||0) - (a.fichas||0));
          const medalhas = ['🥇','🥈','🥉'];
          let msg = `🏆 *TOP 10 — CASINO BOT*\n${'═'.repeat(22)}\n\n`;
          users.slice(0, 10).forEach((u, i) => {
            msg += `${medalhas[i] || `${i+1}.`} ${u.nome.substring(0,18)} — *${(u.fichas||0).toLocaleString('pt-BR')}* 🪙\n`;
          });
          enviar(msg);
          break;
        }

        // ----- RECARREGAR -----
        case 'recarregar': case 'recarga': {
          await reagir('💳');
          await digitar(1500);
          await enviarBotoes(
            "💳 Recarga de Fichas",
            `1 real = 1 ficha 🪙\nSaldo atual: ${getFichas(sender)} fichas`,
            "Escolha o valor da recarga",
            [
              { label: "💵 R$ 10 = 10 fichas",   id: ".pix 10"  },
              { label: "💵 R$ 25 = 25 fichas",   id: ".pix 25"  },
              { label: "💵 R$ 50 = 50 fichas",   id: ".pix 50"  },
              { label: "💵 R$ 100 = 100 fichas", id: ".pix 100" }
            ]
          );
          break;
        }

        case 'pix': {
          await reagir('💸');
          const valor = parseFloat(q);
          if (isNaN(valor) || valor < 1) return enviar("❌ Use: .pix [valor]\nEx: .pix 50");
          await enviar('⏳ Gerando PIX...');
          const pag = await gerarRecargaPix(sender, valor);
          if (pag.error) return enviar(`❌ Erro: ${pag.error}`);
          if (pag.qrCodeBase64) {
            try {
              const buf = Buffer.from(pag.qrCodeBase64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
              await sock.sendMessage(from, { image: buf, caption: `💳 *PIX — R$ ${valor.toFixed(2)}*\n🎰 +${Math.floor(valor)} fichas após confirmação!\n⏳ Válido por 1 hora.` }, { quoted: info });
            } catch { await enviar(`💳 *PIX — R$ ${valor.toFixed(2)}*\n🎰 +${Math.floor(valor)} fichas!`); }
          }
          await sleep(3000);
          await sock.sendMessage(from, { text: '```' + pag.copiaCola + '```' }, { quoted: info });
          monitorarRecarga(pag.txid, from, sock);
          break;
        }

        // ----- SLOT — COM ANIMAÇÃO DE EDIÇÃO ==========
        case 'slot': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🎰 Use: .slot [aposta]\nEx: .slot 50`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes! Você tem ${getFichas(sender)} 🪙`);
          await reagir('🎰');

          // Animação de giro
          const msgAnim = await sock.sendMessage(from, { text: `🎰 *SLOT MACHINE*\n\n[ 🔄 ] [ 🔄 ] [ 🔄 ]\n\n_Girando..._` }, { quoted: info });
          await sleep(400);

          const frames = [
            `[ ${SLOT_EMOJIS[Math.floor(Math.random()*7)]} ] [ 🔄 ] [ 🔄 ]`,
            `[ ${SLOT_EMOJIS[Math.floor(Math.random()*7)]} ] [ ${SLOT_EMOJIS[Math.floor(Math.random()*7)]} ] [ 🔄 ]`,
          ];
          for (const f of frames) {
            await sleep(500);
            await sock.sendMessage(from, { text: `🎰 *SLOT MACHINE*\n\n${f}\n\n_Girando..._`, edit: msgAnim.key });
          }

          const res  = gerarSlot();
          const info2 = calcularGanhoSlot(res, ap);

          await sleep(500);
          if (info2.ganho > 0) { addFichas(sender, info2.ganho); await reagir('🎉'); }
          else { remFichas(sender, ap); await reagir('😢'); }

          await sock.sendMessage(from, {
            text: `🎰 *SLOT MACHINE*\n\n[ ${res[0]} ] [ ${res[1]} ] [ ${res[2]} ]\n\n${info2.msg}\n${info2.ganho > 0 ? `🎉 +${info2.ganho} fichas` : `💸 -${ap} fichas`}\n💰 Saldo: ${getFichas(sender)} fichas`,
            edit: msgAnim.key
          });
          break;
        }

        // ----- DADO -----
        case 'dado': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🎲 Use: .dado [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          await reagir('🎲');
          await digitar(2000);
          const num  = Math.floor(Math.random() * 6) + 1;
          const gan  = num === 6;
          const dds  = ['⚀','⚁','⚂','⚃','⚄','⚅'];
          if (gan) { addFichas(sender, ap * 5); await reagir('🎉'); }
          else { remFichas(sender, ap); await reagir('😢'); }
          enviar(`🎲 *DADO*\n\n${dds[num-1]} Você tirou: *${num}*\nAposta: ${ap} fichas\n\n${gan ? `🎉 GANHOU! Tirou 6! +${ap*5} fichas` : `😢 PERDEU! Precisava de 6.`}\n💰 Saldo: ${getFichas(sender)} fichas`);
          break;
        }

        // ----- DUPLICAR -----
        case 'duplicar': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`⚡ Use: .duplicar [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          await reagir('⚡');
          await digitar(2500);
          const ganhou = Math.random() < 0.5;
          if (ganhou) { addFichas(sender, ap); await reagir('🎉'); enviar(`🎉 *DUPLICOU!*\n\n+${ap} fichas! 🪙\n💰 Saldo: ${getFichas(sender)} fichas`); }
          else { remFichas(sender, ap); await reagir('💀'); enviar(`💀 *PERDEU!*\n\n-${ap} fichas 😢\n💰 Saldo: ${getFichas(sender)} fichas`); }
          break;
        }

        // ----- ROLETA — COM ANIMAÇÃO ==========
        case 'roleta': {
          const partes = q.trim().split(' ');
          const ap     = parseInt(partes[0]);
          const tipo   = (partes[1] || '').toLowerCase().replace('í','i').replace('ê','e');
          const tiposValidos = ['vermelho','preto','par','impar','1-12','13-24','25-36'];
          if (isNaN(ap) || ap <= 0) return enviar(`🎡 Use: .roleta [aposta] [tipo]\nTipos: vermelho, preto, par, impar, 1-12, 13-24, 25-36, ou número (0-36)\nEx: .roleta 50 vermelho`);
          const isNumero = !isNaN(parseInt(tipo)) && parseInt(tipo) >= 0 && parseInt(tipo) <= 36;
          if (!tiposValidos.includes(tipo) && !isNumero) return enviar(`❌ Tipo inválido!\nTipos: vermelho, preto, par, impar, 1-12, 13-24, 25-36, ou número 0-36`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          await reagir('🎡');

          // Animação girando
          const cores = ['🔴','⚫','🔴','⚫','🔴','⚫','🟢'];
          const msgAnim = await sock.sendMessage(from, { text: `🎡 *ROLETA*\n\n${cores.join(' ')}\n\n_A roleta está girando..._` }, { quoted: info });

          for (let i = 0; i < 6; i++) {
            await sleep(350);
            const frame = cores.slice(i % cores.length).concat(cores.slice(0, i % cores.length));
            await sock.sendMessage(from, { text: `🎡 *ROLETA*\n\n${frame.join(' ')}\n\n_Girando..._`, edit: msgAnim.key });
          }

          const resultado = ROLETA[Math.floor(Math.random() * ROLETA.length)];
          const ganho    = Math.floor(calcularGanhoRoleta(ap, tipo, resultado));

          await sleep(400);
          if (ganho > 0) { addFichas(sender, ganho); await reagir('🎉'); }
          else { remFichas(sender, ap); await reagir('😢'); }

          await sock.sendMessage(from, {
            text: `🎡 *ROLETA — RESULTADO*\n\n${resultado.cor} Número: *${resultado.n}*\nSua aposta: *${tipo}*\n\n${ganho > 0 ? `🎉 GANHOU! +${ganho} fichas` : `😢 PERDEU! -${ap} fichas`}\n💰 Saldo: ${getFichas(sender)} fichas`,
            edit: msgAnim.key
          });
          break;
        }

        // ----- BLACKJACK -----
        case 'bj': case 'blackjack': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🃏 Use: .bj [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo! Termine-o primeiro.");
          await reagir('🃏');
          await digitar(1500);
          const baralho = criarBaralho();
          const maoJ = [baralho.pop(), baralho.pop()];
          const maoD = [baralho.pop(), baralho.pop()];
          const totalJ = calcMao(maoJ);
          sessoesJogo.set(sender, { jogo: 'bj', aposta: ap, maoJogador: maoJ, maoDealer: maoD, baralho });
          if (totalJ === 21) {
            const ganho = Math.floor(ap * 2.5);
            addFichas(sender, ganho);
            sessoesJogo.delete(sender);
            await reagir('🎉');
            return enviar(`🃏 *BLACKJACK NATURAL!* 21!\n\nSua mão: ${exibirMao(maoJ)} = *21*\n🎊 +${ganho} fichas (2.5x)!\n💰 Saldo: ${getFichas(sender)} fichas`);
          }
          await enviarBotoes(
            "🃏 Blackjack",
            `Sua mão: ${exibirMao(maoJ)} = *${totalJ}*\nDealer: ${exibirMao([maoD[0]])} ?`,
            `Aposta: ${ap} fichas | Objetivo: chegar mais perto de 21`,
            [{ label: "🃏 Pedir carta", id: ".pedir" }, { label: "🛑 Parar", id: ".parar" }]
          );
          break;
        }

        // ----- MINES -----
        case 'mines': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`💣 Use: .mines [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo!");
          await reagir('💣');
          await digitar(1500);
          const bombas = gerarMines(3);
          const sessaoMines = { jogo: 'mines', aposta: ap, bombas, reveladas: [] };
          sessoesJogo.set(sender, sessaoMines);
          await enviar(montarTextoBoardMines(sessaoMines));
          await sleep(500);
          await enviarBotoes(
            "💣 Mines",
            "Clique nas células para revelar gemas 💎\nEvite as bombas 💣",
            `3 bombas escondidas | Aposta: ${ap} fichas`,
            Array.from({length: 9}, (_, i) => ({ label: `🔒 ${i+1}`, id: `.celula${i}` }))
          );
          break;
        }

        // ----- TORRE -----
        case 'torre': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🗼 Use: .torre [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo!");
          await reagir('🗼');
          await digitar(1500);
          const portasCertas = Array.from({length: 5}, () => Math.floor(Math.random() * 3) + 1);
          sessoesJogo.set(sender, { jogo: 'torre', aposta: ap, andarAtual: 1, portasCertas });
          await enviarBotoes(
            "🗼 Torre — Andar 1/5",
            `Multiplicadores: 1.5x → 2.5x → 4x → 7x → 15x\nEscolha a porta certa para subir!`,
            `Aposta: ${ap} fichas | 1 porta certa, 2 armadilhas`,
            [
              { label: "🚪 Porta 1", id: ".porta1" },
              { label: "🚪 Porta 2", id: ".porta2" },
              { label: "🚪 Porta 3", id: ".porta3" }
            ]
          );
          break;
        }

        // ----- CRASH -----
        case 'crash': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`💥 Use: .crash [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo!");
          await reagir('🚀');

          const crashPoint = gerarCrashPoint();
          let mult = 1.00;
          const sessaoCrash = { jogo: 'crash', aposta: ap, multAtual: mult, crashPoint, timer: null };
          sessoesJogo.set(sender, sessaoCrash);

          const msgCrash = await sock.sendMessage(from, { text: `💥 *CRASH*\n\n🚀 *${mult.toFixed(2)}x*\n\n_Mande .ejetar para sacar!\nAposta: ${ap} fichas_` }, { quoted: info });

          const timer = setInterval(async () => {
            if (!sessoesJogo.has(sender)) return clearInterval(timer);
            const s = sessoesJogo.get(sender);
            s.multAtual = parseFloat((s.multAtual + 0.10 + s.multAtual * 0.03).toFixed(2));

            if (s.multAtual >= crashPoint) {
              clearInterval(timer);
              sessoesJogo.delete(sender);
              remFichas(sender, ap);
              try {
                await sock.sendMessage(from, {
                  text: `💥 *CRASH!*\n\n💣 Crashou em *${s.multAtual.toFixed(2)}x*!\n😢 PERDEU ${ap} fichas!\n💰 Saldo: ${getFichas(sender)} fichas`,
                  edit: msgCrash.key
                });
              } catch {}
              return;
            }

            try {
              await sock.sendMessage(from, {
                text: `💥 *CRASH*\n\n🚀 *${s.multAtual.toFixed(2)}x* ↗️\n\n_Mande .ejetar para sacar!\nAposta: ${ap} fichas | Potencial: ${Math.floor(ap * s.multAtual)} fichas_`,
                edit: msgCrash.key
              });
            } catch {}
          }, 2000);

          sessaoCrash.timer = timer;
          break;
        }

        // ----- RASPADINHA -----
        case 'raspadinha': case 'raspar': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🎁 Use: .raspadinha [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo!");
          await reagir('🎁');
          await digitar(1500);
          const simb = ['🍒','💎','7️⃣','⭐','🍋','🔔'];
          const simbolos = Array(3).fill(0).map(() => simb[Math.floor(Math.random() * simb.length)]);
          sessoesJogo.set(sender, { jogo: 'raspadinha', aposta: ap, simbolos, reveladas: [false, false, false] });
          await enviarBotoes(
            "🎁 Raspadinha",
            `[ 🔒 ] [ 🔒 ] [ 🔒 ]\nRaspe as 3 células!`,
            `Aposta: ${ap} fichas`,
            [
              { label: "🔒 Raspar 1", id: ".raspar1" },
              { label: "🔒 Raspar 2", id: ".raspar2" },
              { label: "🔒 Raspar 3", id: ".raspar3" }
            ]
          );
          break;
        }

        // ----- DRAGÃO OU FÊNIX -----
        case 'dragao': {
          const ap = parseInt(q);
          if (isNaN(ap) || ap <= 0) return enviar(`🐉 Use: .dragao [aposta]`);
          if (getFichas(sender) < ap) return enviar(`❌ Fichas insuficientes!`);
          if (sessoesJogo.has(sender)) return enviar("⚠️ Você já tem um jogo ativo!");
          await reagir('🐉');
          await digitar(1000);
          sessoesJogo.set(sender, { jogo: 'dragao', aposta: ap });
          await enviarBotoes(
            "🐉🔥 Dragão ou Fênix",
            `Escolha um lado!\nO mais próximo de 7.5 pontos vence.\n\nEmpate = 90% devolvido`,
            `Aposta: ${ap} fichas`,
            [
              { label: "🐉 Dragão",  id: ".dragao"  },
              { label: "🔥 Fênix",   id: ".fenix"   }
            ]
          );
          break;
        }

        // ----- COMANDOS DO DONO -----
        case 'ligar': {
          if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
          botAtivo = true; return enviar("✅ Bot ligado!");
        }
        case 'desligar': {
          if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
          botAtivo = false; return enviar("🔴 Bot desligado!");
        }
        case 'darfichas': {
          if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
          const [num, qtd] = q.split(' ');
          if (!num || !qtd) return enviar("❌ Use: .darfichas [número] [quantidade]");
          addFichas(`${num}@s.whatsapp.net`, parseInt(qtd));
          return enviar(`✅ ${qtd} fichas adicionadas para ${num}`);
        }

        default: {
          if (cmd) enviar(`❌ Comando não encontrado.\nDigite .menu para ver as opções.`);
          break;
        }
      }

    } catch (err) {
      console.error(chalk.red("❌ Erro no handler:"), err.message);
    }
  });
}

iniciarBot();
