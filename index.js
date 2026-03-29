// Base WhatsApp Bot - Com Sistema de Pagamentos Efí Bank
// Versão corrigida

// ========== MÓDULOS ==========
const { default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  downloadContentFromMessage
} = require("baileys");
const fs = require('fs');
const { Boom } = require('@hapi/boom');
const NodeCache = require("node-cache");
const readline = require("readline");
const fetch = require('node-fetch');
const pino = require('pino');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');

// ========== SISTEMA DE PAGAMENTO EFÍ (INTEGRAÇÃO PRÓPRIA VIA API REST) ==========
const EfiBankPix = require('./efipay');
let efipay = null;
let efipayReady = false;

// ========== CORES ==========
const color = (text, c) => {
  return !c ? chalk.green(text) : chalk.keyword(c)(text);
};

// ========== BANNER ==========
console.log(chalk.greenBright("🤖 MEU BOT - COM EFÍ BANK PIX"));
console.log(chalk.cyan("━".repeat(40)));

// ========== CONFIGURAÇÕES ==========
const prefixos = ['.', '!', '/', '#', '$'];
let botAtivo = true;

// ⚠️ ALTERE AQUI: coloque seu número completo com DDI (sem + ou espaços)
let dono = "5511999999999@s.whatsapp.net";

// ========== CONFIGURAÇÕES EFÍ BANK ==========
// ⚠️ ALTERE com suas credenciais reais do painel Efí Bank
const EFI_CLIENT_ID     = 'Client_Id_c5402771eee923060261f03590f4d8b82ce4b88c';
const EFI_CLIENT_SECRET = 'Client_Secret_345bde04a214ac7e2464bbbb73b08b161ecfc2af';
const EFI_SANDBOX       = false;   // false quando for produção
const EFI_PIX_KEY       = 'studiopecc@gmail.com';
const EFI_CERT_PATH     = './certificado.p12'; // obrigatório para produção

// Inicializa cliente Efí com integração própria via API REST
// ⚠️ O certificado .p12 é obrigatório tanto em SANDBOX quanto em PRODUÇÃO
if (EFI_CLIENT_ID !== 'SEU_CLIENT_ID_AQUI') {
  try {
    efipay = new EfiBankPix({
      client_id: EFI_CLIENT_ID,
      client_secret: EFI_CLIENT_SECRET,
      sandbox: EFI_SANDBOX,
      certificate: EFI_CERT_PATH  // sempre necessário — inclusive em sandbox
    });
    efipayReady = true;
    console.log(chalk.green(`✅ Efí Bank configurado — modo: ${EFI_SANDBOX ? 'SANDBOX' : 'PRODUÇÃO'}`));
  } catch (erro) {
    console.log(chalk.red("❌ Erro ao configurar Efí Bank:"), erro.message);
    efipayReady = false;
  }
} else {
  console.log(chalk.yellow("⚠️ Configure suas credenciais Efí Bank em index.js antes de usar pagamentos."));
}

// ========== PLANOS DISPONÍVEIS ==========
const PLANOS = {
  '7d':  { nome: '7 Dias - Teste', dias: 7,  valor: 0.01 },
  '15d': { nome: '15 Dias',        dias: 15, valor: 19.90 },
  '30d': { nome: '30 Dias',        dias: 30, valor: 34.90 }
};

// ========== BANCO DE DADOS JSON ==========
const databasePath    = './database/';
const usuariosPath    = './database/usuarios.json';
const pagamentosPath  = './database/pagamentos.json';
const planosAtivosPath = './database/planos_ativos.json';

function initDatabase() {
  if (!fs.existsSync(databasePath)) fs.mkdirSync(databasePath, { recursive: true });
  if (!fs.existsSync(usuariosPath))    fs.writeFileSync(usuariosPath,    JSON.stringify([], null, 2));
  if (!fs.existsSync(pagamentosPath))  fs.writeFileSync(pagamentosPath,  JSON.stringify([], null, 2));
  if (!fs.existsSync(planosAtivosPath)) fs.writeFileSync(planosAtivosPath, JSON.stringify([], null, 2));
}

function lerJSON(caminho) {
  try {
    return JSON.parse(fs.readFileSync(caminho, 'utf8'));
  } catch {
    return [];
  }
}

function salvarJSON(caminho, dados) {
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

function adicionarUsuario(userId, nome, username) {
  const usuarios = lerJSON(usuariosPath);
  if (!usuarios.find(u => u.id === userId)) {
    usuarios.push({
      id: userId,
      nome,
      username: username || nome,
      coins: 100,
      nivel: 1,
      xp: 0,
      criadoEm: new Date()
    });
    salvarJSON(usuariosPath, usuarios);
  }
}

function getCoins(userId) {
  const usuarios = lerJSON(usuariosPath);
  const user = usuarios.find(u => u.id === userId);
  return user ? (user.coins ?? 100) : 100;
}

function adicionarCoins(userId, quantidade) {
  const usuarios = lerJSON(usuariosPath);
  const index = usuarios.findIndex(u => u.id === userId);
  if (index !== -1) {
    usuarios[index].coins = (usuarios[index].coins ?? 100) + quantidade;
    salvarJSON(usuariosPath, usuarios);
    return usuarios[index].coins;
  }
  return 0;
}

function removerCoins(userId, quantidade) {
  const usuarios = lerJSON(usuariosPath);
  const index = usuarios.findIndex(u => u.id === userId);
  if (index !== -1) {
    const coinsAtuais = usuarios[index].coins ?? 100;
    if (coinsAtuais >= quantidade) {
      usuarios[index].coins = coinsAtuais - quantidade;
      salvarJSON(usuariosPath, usuarios);
      return true;
    }
  }
  return false;
}

function isUsuarioAtivo(userId) {
  const planos = lerJSON(planosAtivosPath);
  const plano = planos.find(p => p.userId === userId && p.status === 'ativo');
  return plano && new Date(plano.expiraEm) > new Date();
}

function getPlanoUsuario(userId) {
  const planos = lerJSON(planosAtivosPath);
  const plano = planos.find(p => p.userId === userId && p.status === 'ativo');
  if (plano && new Date(plano.expiraEm) > new Date()) return plano;
  return null;
}

function ativarPlano(userId, planType, dias) {
  let planos = lerJSON(planosAtivosPath);
  planos = planos.filter(p => p.userId !== userId);
  const expiraEm = new Date();
  expiraEm.setDate(expiraEm.getDate() + dias);
  planos.push({
    userId,
    plano: planType,
    status: 'ativo',
    ativadoEm: new Date(),
    expiraEm
  });
  salvarJSON(planosAtivosPath, planos);
  return true;
}

// ========== FUNÇÕES DE PAGAMENTO (CORRIGIDAS) ==========
async function gerarPagamentoPIX(userId, userNome, planType) {
  if (!efipayReady) return { error: "Sistema de pagamento não configurado" };

  try {
    const plano = PLANOS[planType];
    if (!plano) return { error: "Plano inválido" };

    const body = {
      calendario: { expiracao: 3600 },
      devedor: {
        nome: userNome.substring(0, 30),
        cpf: '12345678909' // use o CPF real do cliente em produção
      },
      valor: { original: plano.valor.toFixed(2) },
      chave: EFI_PIX_KEY,
      solicitacaoPagador: `Plano ${plano.nome} - ${userId.split('@')[0]}`
    };

    // Cria a cobrança na Efí Bank (POST /v2/cob)
    const cobranca = await efipay.pixCreateImmediateCharge(body);

    if (!cobranca || !cobranca.txid) {
      console.error('Resposta inesperada da Efí:', JSON.stringify(cobranca));
      return { error: "Resposta inválida da Efí Bank" };
    }

    // Gera QR Code usando o locId retornado pela cobrança
    const locId = cobranca.loc?.id;
    if (!locId) {
      console.error('loc.id não encontrado na resposta:', JSON.stringify(cobranca));
      return { error: "QR Code indisponível" };
    }

    const qrData = await efipay.pixGenerateQRCode(locId);

    const pagamento = {
      txid: cobranca.txid,
      userId,
      plano: planType,
      valor: plano.valor,
      status: 'pendente',
      criadoEm: new Date(),
      expiraEm: new Date(Date.now() + 3600000),
      qrCodeBase64: qrData.imagemQrCode,
      copiaCola: qrData.qrcode
    };

    const pagamentos = lerJSON(pagamentosPath);
    pagamentos.push(pagamento);
    salvarJSON(pagamentosPath, pagamentos);

    return {
      txid: cobranca.txid,
      qrCodeBase64: qrData.imagemQrCode,
      copiaCola: qrData.qrcode,
      valor: plano.valor,
      expiraEm: pagamento.expiraEm
    };

  } catch (erro) {
    console.error(chalk.red('❌ Erro ao gerar PIX:'), erro.message);
    if (erro.response) {
      console.error('Resposta API Efí:', JSON.stringify(erro.response.data, null, 2));
    }
    return { error: erro.message || "Erro desconhecido" };
  }
}

async function verificarPagamento(txid) {
  if (!efipayReady) return 'erro';

  try {
    const response = await efipay.pixDetailCharge(txid);

    if (response.status === 'CONCLUIDA') {
      const pagamentos = lerJSON(pagamentosPath);
      const index = pagamentos.findIndex(p => p.txid === txid);
      if (index !== -1) {
        pagamentos[index].status = 'pago';
        pagamentos[index].pagoEm = new Date();
        salvarJSON(pagamentosPath, pagamentos);
        const plano = PLANOS[pagamentos[index].plano];
        if (plano) ativarPlano(pagamentos[index].userId, pagamentos[index].plano, plano.dias);
      }
      return 'pago';
    } else if (response.status === 'ATIVA') {
      return 'pendente';
    } else {
      return 'expirado';
    }
  } catch (erro) {
    console.error(chalk.red('❌ Erro ao verificar pagamento:'), erro.message);
    return 'erro';
  }
}

// ========== FUNÇÕES DE JOGOS ==========
function jogarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function jogarSlot() {
  const emojis = ['🍒', '🍋', '🔔', '💎', '7️⃣'];
  return [
    emojis[Math.floor(Math.random() * 5)],
    emojis[Math.floor(Math.random() * 5)],
    emojis[Math.floor(Math.random() * 5)]
  ];
}

function calcularGanhoSlot(resultado, aposta) {
  if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
    if (resultado[0] === '7️⃣') return aposta * 10;
    if (resultado[0] === '💎') return aposta * 5;
    return aposta * 2;
  }
  return 0;
}

// ========== FUNÇÃO PRINCIPAL ==========
async function iniciarBot() {
  console.log(chalk.cyanBright("\n🤖 Iniciando bot..."));

  initDatabase();

  const { state, saveCreds } = await useMultiFileAuthState("./sessao");
  const { version } = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: {
      creds: state.creds,
      keys: state.keys
    },
    markOnlineOnConnect: true,
    msgRetryCounterCache,
  });

  if (!sock.authState.creds.registered) {
    const rlInterface = readline.createInterface({ input: process.stdin, output: process.stdout });
    const question = (texto) => new Promise((resolve) => rlInterface.question(texto, resolve));
    let numero = await question(chalk.cyan("📱 Digite seu número com código do país (apenas números, ex: 5511999999999): "));
    rlInterface.close();
    numero = numero.replace(/[^0-9]/g, "");

    if (!numero) {
      console.log(chalk.red("❌ Número inválido."));
      process.exit(1);
    }

    try {
      const codigo = await sock.requestPairingCode(numero);
      console.log(chalk.bgGreen.black("\n✅ CÓDIGO DE VINCULAÇÃO:"), chalk.white.bold(codigo));
      console.log(chalk.yellow("Digite esse código no WhatsApp: Configurações > Aparelhos conectados > Conectar com código\n"));
    } catch (err) {
      console.error(chalk.red("❌ Erro ao gerar código:"), err.message);
      process.exit(1);
    }
  }

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red("❌ Sessão encerrada. Delete a pasta 'sessao' e reconecte."));
        process.exit(0);
      } else {
        console.log(chalk.yellow("⚠️ Conexão perdida. Reconectando em 3s..."));
        setTimeout(iniciarBot, 3000);
      }
    } else if (connection === "open") {
      console.log(chalk.greenBright("✅ Bot conectado com sucesso!"));
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async (mensagem) => {
    try {
      const info = mensagem.messages[0];
      if (!info.message) return;
      if (info.key.remoteJid === "status@broadcast") return;
      if (info.key.fromMe) return;

      const from   = info.key.remoteJid;
      const ehGrupo = from.endsWith('@g.us');
      const sender  = ehGrupo ? info.key.participant : from;
      const nome    = info.pushName || "Usuário";
      const conteudo = info.message.conversation ||
                       info.message.extendedTextMessage?.text || "";

      const args = conteudo.trim().split(/ +/).slice(1);
      const comando = conteudo.toLowerCase().split(" ")[0];
      const q = args.join(' ');
      const ehDono = sender === dono;

      let prefixoUsado = null;
      for (const p of prefixos) {
        if (comando.startsWith(p)) { prefixoUsado = p; break; }
      }
      if (!prefixoUsado) return;

      const comandoLimpo = comando.slice(prefixoUsado.length);
      adicionarUsuario(sender, nome, info.pushName || nome);

      const enviar = (texto) => sock.sendMessage(from, { text: texto }, { quoted: info });

      // Comandos do dono
      if (comandoLimpo === 'ligar') {
        if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
        botAtivo = true;
        return enviar("✅ Bot ligado!");
      }

      if (comandoLimpo === 'desligar') {
        if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
        botAtivo = false;
        return enviar("❌ Bot desligado!");
      }

      // Ativar plano manualmente (dono)
      if (comandoLimpo === 'ativar') {
        if (!ehDono) return enviar("❌ Apenas o dono pode usar este comando.");
        const [numTarget, planTarget] = q.split(' ');
        if (!numTarget || !planTarget || !PLANOS[planTarget]) {
          return enviar("❌ Use: .ativar [número] [7d/15d/30d]\nEx: .ativar 5511999999999 30d");
        }
        const targetId = `${numTarget}@s.whatsapp.net`;
        ativarPlano(targetId, planTarget, PLANOS[planTarget].dias);
        return enviar(`✅ Plano ${PLANOS[planTarget].nome} ativado para ${numTarget}`);
      }

      if (!botAtivo && !ehDono) return;

      console.log(chalk.gray(`[CMD] ${nome} > ${prefixoUsado}${comandoLimpo}${q ? ' ' + q : ''}`));

      const temPlanoAtivo = isUsuarioAtivo(sender);
      const precisaPlano = ['slot', 'dado', 'roleta', 'duplicar', 'blackjack'];

      if (precisaPlano.includes(comandoLimpo) && !temPlanoAtivo && !ehDono) {
        return enviar(`⚠️ *VOCÊ NÃO TEM UM PLANO ATIVO!*\n\nPara jogar, você precisa de uma assinatura.\n\n📋 *Planos:*\n• 7 dias - R$ 0,01\n• 15 dias - R$ 19,90\n• 30 dias - R$ 34,90\n\nUse: ${prefixoUsado}planos`);
      }

      switch (comandoLimpo) {

        case 'menu':
        case 'ajuda':
        case 'start': {
          const planoStatus = temPlanoAtivo ? "✅ ATIVO" : "❌ INATIVO";
          enviar(`╔════━━━━━ ❖ ━━━━━═══╗
         🤖 *MEU BOT* 🤖
╠════━━━━━ ❖ ━━━━━═══╣
┃
┃ 🏠 *GERAL*
┃ • menu - Mostrar menu
┃ • perfil - Ver seus dados
┃ • rank - Ranking de usuários
┃
┃ 💳 *PLANOS*
┃ • planos - Ver planos
┃ • comprar [7d/15d/30d]
┃ • confirmar [TXID]
┃ • meuplano - Ver seu plano
┃
┃ 🎮 *JOGOS* (precisa de plano)
┃ • dado [valor] - Jogue o dado
┃ • slot [valor] - Caça-níqueis
┃ • duplicar [valor] - 50/50
┃
╠════━━━━━ ❖ ━━━━━═══╣
┃ 💰 *SEU STATUS*
┃ 👤 ${nome}
┃ 🎮 Coins: ${getCoins(sender)}
┃ 📋 Plano: ${planoStatus}
╚════━━━━━ ❖ ━━━━━═══╝`);
          break;
        }

        case 'planos':
          enviar(`💳 *PLANOS DISPONÍVEIS*\n\n💰 *7 Dias - Teste*: R$ 0,01\n💰 *15 Dias*: R$ 19,90\n💰 *30 Dias*: R$ 34,90\n\n*Como comprar:*\n${prefixoUsado}comprar 7d\n${prefixoUsado}confirmar [TXID após pagar]`);
          break;

        case 'comprar': {
          if (!efipayReady) {
            return enviar("⚠️ Sistema de pagamento temporariamente indisponível.\nEntre em contato com o dono.");
          }
          if (!q) return enviar(`💳 Use: ${prefixoUsado}comprar [7d, 15d, 30d]`);

          const planType = q.toLowerCase().trim();
          if (!PLANOS[planType]) return enviar('❌ Plano inválido! Use: 7d, 15d ou 30d');

          await enviar('⏳ Gerando pagamento PIX...');

          const pagamento = await gerarPagamentoPIX(sender, nome, planType);

          if (!pagamento || pagamento.error) {
            return enviar(`❌ Erro ao gerar pagamento: ${pagamento?.error || "Tente novamente."}`);
          }

          const planoSelecionado = PLANOS[planType];

          const pixMsg = `💳 *PAGAMENTO PIX*\n\n📋 *Plano:* ${planoSelecionado.nome}\n💰 *Valor:* R$ ${planoSelecionado.valor.toFixed(2)}\n🆔 *TXID:* \`${pagamento.txid}\`\n\n*🔑 Copia e Cola:*\n\`${pagamento.copiaCola}\`\n\n✅ Após pagar use:\n${prefixoUsado}confirmar ${pagamento.txid}`;

          // FIX: imagemQrCode é base64 — precisa converter para Buffer
          if (pagamento.qrCodeBase64) {
            try {
              const base64Data = pagamento.qrCodeBase64.replace(/^data:image\/\w+;base64,/, '');
              const imageBuffer = Buffer.from(base64Data, 'base64');
              await sock.sendMessage(from, {
                image: imageBuffer,
                caption: pixMsg
              }, { quoted: info });
            } catch (imgErr) {
              // Se falhar o envio da imagem, manda só o texto
              console.error('Erro ao enviar imagem do QR:', imgErr.message);
              await enviar(pixMsg);
            }
          } else {
            await enviar(pixMsg);
          }
          break;
        }

        case 'confirmar': {
          if (!q) return enviar(`🔍 Use: ${prefixoUsado}confirmar [TXID]`);

          const txid = q.toUpperCase().trim();
          await enviar('⏳ Verificando pagamento...');

          const status = await verificarPagamento(txid);

          if (status === 'pago') {
            enviar(`✅ *PAGAMENTO CONFIRMADO!*\n\n🎉 Seu plano foi ativado!\nAgora você tem acesso a todos os jogos!\n\nUse: ${prefixoUsado}menu`);
          } else if (status === 'pendente') {
            enviar('⏳ Pagamento ainda pendente. Aguarde alguns minutos e tente novamente.');
          } else if (status === 'expirado') {
            enviar('❌ PIX expirado. Gere um novo com: ' + prefixoUsado + 'comprar');
          } else {
            enviar('❌ Erro ao verificar pagamento. Tente novamente mais tarde.');
          }
          break;
        }

        case 'meuplano': {
          if (!temPlanoAtivo) return enviar(`⚠️ Você não tem um plano ativo!\nUse ${prefixoUsado}planos para comprar.`);
          const planoAtivo = getPlanoUsuario(sender);
          if (planoAtivo) {
            const expiraEm = new Date(planoAtivo.expiraEm);
            const diasRestantes = Math.ceil((expiraEm - new Date()) / (1000 * 60 * 60 * 24));
            enviar(`✅ *PLANO ATIVO*\n📋 Tipo: ${PLANOS[planoAtivo.plano]?.nome || planoAtivo.plano}\n📅 Expira em: ${diasRestantes} dia(s)\n📆 Data: ${expiraEm.toLocaleDateString('pt-BR')}`);
          }
          break;
        }

        case 'perfil':
          enviar(`📱 *PERFIL*\n👤 Nome: ${nome}\n💰 Coins: ${getCoins(sender)}\n📋 Plano: ${temPlanoAtivo ? "✅ Ativo" : "❌ Inativo"}`);
          break;

        case 'rank': {
          const usuarios = lerJSON(usuariosPath);
          usuarios.sort((a, b) => (b.coins || 0) - (a.coins || 0));
          let rankMsg = `🏆 *RANKING TOP 10* 🏆\n\n`;
          usuarios.slice(0, 10).forEach((user, index) => {
            const medalha = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
            rankMsg += `${medalha} ${user.nome.substring(0, 20)} — ${user.coins || 0} coins\n`;
          });
          enviar(rankMsg);
          break;
        }

        case 'dado': {
          const apostaDado = parseInt(q);
          if (isNaN(apostaDado) || apostaDado <= 0) return enviar(`🎲 Use: ${prefixoUsado}dado [valor]\nEx: ${prefixoUsado}dado 10`);
          if (getCoins(sender) < apostaDado) return enviar(`❌ Você tem apenas ${getCoins(sender)} coins.`);

          const num = jogarDado();
          const ganhouDado = num === 6;
          const premioDado = ganhouDado ? apostaDado * 5 : 0;

          if (ganhouDado) adicionarCoins(sender, premioDado);
          else removerCoins(sender, apostaDado);

          enviar(`🎲 *DADO*\nVocê tirou: *${num}*\nAposta: ${apostaDado} coins\n${ganhouDado ? `🎉 GANHOU +${premioDado} coins!` : '😢 PERDEU!'}\n💰 Saldo: ${getCoins(sender)} coins`);
          break;
        }

        case 'slot': {
          const apostaSlot = parseInt(q);
          if (isNaN(apostaSlot) || apostaSlot <= 0) return enviar(`🎰 Use: ${prefixoUsado}slot [valor]`);
          if (getCoins(sender) < apostaSlot) return enviar(`❌ Você tem apenas ${getCoins(sender)} coins.`);

          const resultado = jogarSlot();
          const ganho = calcularGanhoSlot(resultado, apostaSlot);

          if (ganho > 0) adicionarCoins(sender, ganho);
          else removerCoins(sender, apostaSlot);

          enviar(`🎰 *CAÇA-NÍQUEIS*\n[ ${resultado[0]} ] [ ${resultado[1]} ] [ ${resultado[2]} ]\nAposta: ${apostaSlot} coins\n${ganho > 0 ? `🎉 GANHOU +${ganho} coins! (${ganho / apostaSlot}x)` : '😢 PERDEU!'}\n💰 Saldo: ${getCoins(sender)} coins`);
          break;
        }

        case 'duplicar': {
          const apostaDup = parseInt(q);
          if (isNaN(apostaDup) || apostaDup <= 0) return enviar(`⚡ Use: ${prefixoUsado}duplicar [valor]`);
          if (getCoins(sender) < apostaDup) return enviar(`❌ Você tem apenas ${getCoins(sender)} coins.`);

          const ganhouDup = Math.random() < 0.5;
          if (ganhouDup) {
            adicionarCoins(sender, apostaDup);
            enviar(`🎉 DUPLICOU! +${apostaDup} coins!\n💰 Saldo: ${getCoins(sender)} coins`);
          } else {
            removerCoins(sender, apostaDup);
            enviar(`💀 PERDEU! -${apostaDup} coins\n💰 Saldo: ${getCoins(sender)} coins`);
          }
          break;
        }

        case 'dono':
        case 'criador':
          enviar(`👑 *CRIADO POR:*\n📱 wa.me/${dono.split('@')[0]}\n💳 Pagamentos via Efí Bank PIX`);
          break;

        default:
          if (comandoLimpo) {
            enviar(`❌ Comando "${prefixoUsado}${comandoLimpo}" não encontrado.\nDigite ${prefixoUsado}menu`);
          }
          break;
      }

    } catch (erro) {
      console.error(chalk.red("❌ Erro no handler:"), erro.message);
    }
  });
}

iniciarBot();
