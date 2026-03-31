// api.js — BotAluguel REST API
// Serve dados para o painel web

const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const { v4: uuidv4 } = require('uuid');
const EfiBankPix = require('./efipay');

const app  = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json());

// ========== EFI BANK ==========
let efipay = null, efipayReady = false;
const EFI_CLIENT_ID     = process.env.EFI_CLIENT_ID     || 'Client_Id_c5402771eee923060261f03590f4d8b82ce4b88c';
const EFI_CLIENT_SECRET = process.env.EFI_CLIENT_SECRET || 'Client_Secret_345bde04a214ac7e2464bbbb73b08b161ecfc2af';
const EFI_SANDBOX       = false;
const EFI_PIX_KEY       = process.env.EFI_PIX_KEY       || 'a45331e2-840e-41dc-bc93-8f1bd2b6fd91';
const EFI_CERT_PATH     = './certificado.p12';
const BRL_POR_MOEDA     = 0.01; // TESTE: 1 BRL = 100 moedas, R$ 0,01 = 1 moeda

try {
  efipay = new EfiBankPix({
    client_id: EFI_CLIENT_ID, client_secret: EFI_CLIENT_SECRET,
    sandbox: EFI_SANDBOX, certificate: EFI_CERT_PATH
  });
  efipayReady = true;
} catch {}

// ========== DATABASE ==========
const DB    = './database';
const PATHS = {
  usuarios:     `${DB}/usuarios.json`,
  grupos:       `${DB}/grupos.json`,
  planosAtivos: `${DB}/planos_ativos.json`,
  pagamentos:   `${DB}/pagamentos.json`
};
const ler    = p => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return []; } };
const salvar = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 2));

// ========== PLANOS ==========
const PLANOS = {
  basico:  { id: 'basico',  nome: '⭐ Básico',   moedas: 1, dias: 30, maxGrupos: 1  },
  pro:     { id: 'pro',     nome: '💎 Pro',       moedas: 1, dias: 30, maxGrupos: 5  },
  premium: { id: 'premium', nome: '👑 Premium',   moedas: 1, dias: 30, maxGrupos: -1 }
};

// ========== HELPERS ==========
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

function normalizePhone(phone) {
  return phone.replace(/\D/g, '') + '@s.whatsapp.net';
}

// ========== MIDDLEWARE DE AUTH ==========
function authMiddleware(req, res, next) {
  const phone = req.headers['x-user-phone'];
  if (!phone) return res.status(401).json({ error: 'Não autorizado' });
  const userId = normalizePhone(phone);
  const users = ler(PATHS.usuarios);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });
  req.userId = userId;
  req.user = user;
  next();
}

// =========================================================
// ========== ROTAS PÚBLICAS ==========
// =========================================================

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// GET /api/planos — listar planos disponíveis
app.get('/api/planos', (req, res) => {
  res.json({ planos: Object.values(PLANOS) });
});

// POST /api/auth/login — login por número de telefone
app.post('/api/auth/login', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Telefone obrigatório' });

  const userId = normalizePhone(phone);
  const users  = ler(PATHS.usuarios);
  let user     = users.find(u => u.id === userId);

  if (!user) {
    // Criar usuário novo
    user = { id: userId, nome: 'Usuário', moedas: 30, criadoEm: new Date().toISOString() };
    users.push(user);
    salvar(PATHS.usuarios, users);
  }

  res.json({
    success: true,
    user: { id: userId, phone: phone.replace(/\D/g, ''), nome: user.nome, moedas: user.moedas }
  });
});

// =========================================================
// ========== ROTAS AUTENTICADAS ==========
// =========================================================

// GET /api/user/me — dados do usuário logado
app.get('/api/user/me', authMiddleware, (req, res) => {
  const plano  = getPlanoAtivo(req.userId);
  const grupos = ler(PATHS.grupos).filter(g => g.dono === req.userId);
  const user   = req.user;

  res.json({
    id:     user.id,
    nome:   user.nome,
    moedas: user.moedas,
    plano:  plano,
    grupos: grupos.length,
    gruposAtivos: grupos.filter(g => g.status === 'ativo').length
  });
});

// GET /api/user/grupos — grupos do usuário
app.get('/api/user/grupos', authMiddleware, (req, res) => {
  const grupos  = ler(PATHS.grupos).filter(g => g.dono === req.userId);
  const plano   = getPlanoAtivo(req.userId);

  const resultado = grupos.map(g => ({
    id:            g.id,
    nomeGrupo:     g.nomeGrupo || g.id,
    status:        g.status,
    aguardandoAdmin: g.aguardandoAdmin,
    adminRecebido: g.adminRecebido,
    adicionadoEm:  g.adicionadoEm,
    ativadoEm:     g.ativadoEm,
    nomePlano:     g.nomePlano,
    expiraEm:      plano?.expiraEm || null
  }));

  res.json({ grupos: resultado, total: resultado.length });
});

// GET /api/user/plano — plano ativo do usuário
app.get('/api/user/plano', authMiddleware, (req, res) => {
  const plano = getPlanoAtivo(req.userId);
  res.json({ plano: plano || null });
});

// GET /api/user/pagamentos — histórico de pagamentos
app.get('/api/user/pagamentos', authMiddleware, (req, res) => {
  const pags = ler(PATHS.pagamentos)
    .filter(p => p.userId === req.userId)
    .map(p => ({ txid: p.txid, tipo: p.tipo, valor: p.valor, moedas: p.moedas, status: p.status, criadoEm: p.criadoEm }))
    .sort((a, b) => new Date(b.criadoEm) - new Date(a.criadoEm))
    .slice(0, 20);
  res.json({ pagamentos: pags });
});

// POST /api/pix/recarga — gerar PIX para recarga de moedas
app.post('/api/pix/recarga', authMiddleware, async (req, res) => {
  const { valor } = req.body;
  if (!valor || isNaN(valor) || valor < 5) {
    return res.status(400).json({ error: 'Valor mínimo: R$ 5,00' });
  }
  if (!efipayReady) {
    return res.status(503).json({ error: 'PIX não configurado' });
  }

  const valorBRL = parseFloat(parseFloat(valor).toFixed(2));
  const moedas   = Math.floor(valorBRL / BRL_POR_MOEDA);

  try {
    const cob = await efipay.pixCreateImmediateCharge({
      calendario: { expiracao: 3600 },
      valor: { original: valorBRL.toFixed(2) },
      chave: EFI_PIX_KEY,
      solicitacaoPagador: `BotAluguel — ${moedas} moedas — ${req.userId.split('@')[0]}`
    });
    if (!cob?.txid) return res.status(500).json({ error: 'Resposta inválida da Efí' });

    const qr = await efipay.pixGenerateQRCode(cob.loc?.id);
    const pag = {
      txid: cob.txid, userId: req.userId, tipo: 'recarga', moedas, valor: valorBRL,
      status: 'pendente', criadoEm: new Date().toISOString(),
      expiraEm: new Date(Date.now() + 3600000).toISOString(),
      qrCodeBase64: qr.imagemQrcode, copiaCola: qr.qrcode
    };
    const pags = ler(PATHS.pagamentos); pags.push(pag); salvar(PATHS.pagamentos, pags);

    res.json({
      txid: pag.txid, moedas, valor: valorBRL,
      qrCode: qr.imagemQrcode, copiaCola: qr.qrcode,
      expiraEm: pag.expiraEm
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/pix/status/:txid — verificar status do pagamento
app.get('/api/pix/status/:txid', authMiddleware, async (req, res) => {
  const { txid } = req.params;
  const pags = ler(PATHS.pagamentos);
  const pag  = pags.find(p => p.txid === txid && p.userId === req.userId);

  if (!pag) return res.status(404).json({ error: 'Pagamento não encontrado' });

  // Se já marcado como pago
  if (pag.status === 'pago') {
    return res.json({ status: 'pago', moedas: pag.moedas });
  }

  // Verificar na API da Efí
  if (efipayReady) {
    try {
      const result = await efipay.pixDetailCharge(txid);
      if (result.status === 'CONCLUIDA' && pag.status !== 'pago') {
        const i = pags.findIndex(p => p.txid === txid);
        if (i !== -1) {
          pags[i].status = 'pago'; pags[i].pagoEm = new Date().toISOString();
          salvar(PATHS.pagamentos, pags);
          // Adicionar moedas
          const users = ler(PATHS.usuarios);
          const ui = users.findIndex(u => u.id === req.userId);
          if (ui !== -1) { users[ui].moedas = (users[ui].moedas || 0) + pag.moedas; salvar(PATHS.usuarios, users); }
        }
        return res.json({ status: 'pago', moedas: pag.moedas });
      }
      const status = result.status === 'ATIVA' ? 'pendente' : 'expirado';
      res.json({ status });
    } catch {
      res.json({ status: pag.status });
    }
  } else {
    res.json({ status: pag.status });
  }
});

// POST /api/planos/comprar — comprar plano com moedas
app.post('/api/planos/comprar', authMiddleware, (req, res) => {
  const { planKey } = req.body;
  const plano = PLANOS[planKey];
  if (!plano) return res.status(400).json({ error: 'Plano inválido' });

  const users = ler(PATHS.usuarios);
  const i = users.findIndex(u => u.id === req.userId);
  if (i === -1) return res.status(404).json({ error: 'Usuário não encontrado' });

  const moedas = users[i].moedas || 0;
  if (moedas < plano.moedas) {
    return res.status(400).json({ error: `Moedas insuficientes. Você tem ${moedas}, precisa de ${plano.moedas}.` });
  }

  // Debitar moedas
  users[i].moedas = moedas - plano.moedas;
  salvar(PATHS.usuarios, users);

  // Ativar plano
  const arr = ler(PATHS.planosAtivos);
  arr.forEach(p => { if (p.userId === req.userId && p.status === 'ativo') p.status = 'expirado'; });

  const expiraEm = new Date();
  expiraEm.setDate(expiraEm.getDate() + plano.dias);
  const novoPlano = {
    id: uuidv4(), userId: req.userId, plano: planKey, nomePlano: plano.nome,
    status: 'ativo', maxGrupos: plano.maxGrupos,
    ativadoEm: new Date().toISOString(), expiraEm: expiraEm.toISOString(),
    notificado48h: false, notificado24h: false
  };
  arr.push(novoPlano);
  salvar(PATHS.planosAtivos, arr);

  res.json({ success: true, plano: novoPlano, moedasRestantes: users[i].moedas });
});

// ========== START ==========
app.listen(PORT, () => {
  console.log(`🌐 API BotAluguel rodando na porta ${PORT}`);
});

module.exports = app;
