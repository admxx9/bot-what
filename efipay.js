// Módulo de integração com Efí Bank (PIX) via API REST + mTLS
// Documentação: https://dev.efipay.com.br/docs/api-pix
//
// ⚠️ IMPORTANTE: A API Pix da Efí Bank exige autenticação mTLS (certificado .p12)
//    tanto em SANDBOX quanto em PRODUÇÃO. Sem o certificado a conexão é recusada
//    com "socket hang up" ou "ECONNRESET".

const axios = require('axios');
const fs = require('fs');
const https = require('https');
const path = require('path');

class EfiBankPix {
  constructor(options) {
    this.clientId     = options.client_id;
    this.clientSecret = options.client_secret;
    this.sandbox      = options.sandbox !== false;
    this.certPath     = options.certificate || null;

    this.baseUrl = this.sandbox
      ? 'https://pix-h.api.efipay.com.br'
      : 'https://pix.api.efipay.com.br';

    this.accessToken   = null;
    this.tokenExpiraEm = null;

    this.httpsAgent = this._criarAgente();
  }

  _criarAgente() {
    if (!this.certPath) {
      console.warn('[EfiBank] ⚠️  Nenhum certificado configurado.');
      console.warn('[EfiBank]    A API Pix exige certificado mesmo em sandbox.');
      console.warn('[EfiBank]    Baixe em: painel Efí Bank → API → Certificados → Homologação');
      return new https.Agent({ rejectUnauthorized: false });
    }

    const certAbsoluto = path.resolve(this.certPath);

    if (!fs.existsSync(certAbsoluto)) {
      console.warn(`[EfiBank] ⚠️  Certificado não encontrado em: ${certAbsoluto}`);
      console.warn('[EfiBank]    Verifique se o arquivo está na mesma pasta do index.js');
      return new https.Agent({ rejectUnauthorized: false });
    }

    try {
      const certBuffer = fs.readFileSync(certAbsoluto);
      const ext = path.extname(certAbsoluto).toLowerCase();

      let agentOptions = { rejectUnauthorized: false };

      if (ext === '.p12' || ext === '.pfx') {
        // Formato PKCS#12 — certificado + chave em binário
        agentOptions.pfx = certBuffer;
        agentOptions.passphrase = ''; // senha do .p12 (normalmente vazio)
        console.log(`[EfiBank] ✅ Certificado .p12 carregado: ${certAbsoluto}`);

      } else if (ext === '.pem' || ext === '.crt') {
        // Formato PEM — o arquivo contém o certificado e a chave privada em texto
        // Passamos o mesmo buffer para cert e key; o TLS extrai cada bloco automaticamente
        agentOptions.cert = certBuffer;
        agentOptions.key  = certBuffer;
        console.log(`[EfiBank] ✅ Certificado .pem carregado: ${certAbsoluto}`);

      } else {
        // Extensão desconhecida: tenta como PEM primeiro, depois como P12
        console.warn(`[EfiBank] ⚠️  Extensão desconhecida "${ext}", tentando como PEM...`);
        agentOptions.cert = certBuffer;
        agentOptions.key  = certBuffer;
      }

      return new https.Agent(agentOptions);

    } catch (e) {
      console.error('[EfiBank] ❌ Erro ao carregar certificado:', e.message);
      return new https.Agent({ rejectUnauthorized: false });
    }
  }

  async _getToken() {
    if (this.accessToken && this.tokenExpiraEm && Date.now() < this.tokenExpiraEm) {
      return this.accessToken;
    }

    const credentials = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    try {
      const response = await axios.post(
        `${this.baseUrl}/oauth/token`,
        { grant_type: 'client_credentials' },
        {
          httpsAgent: this.httpsAgent,
          headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/json'
          },
          timeout: 15000
        }
      );

      this.accessToken   = response.data.access_token;
      this.tokenExpiraEm = Date.now() + (response.data.expires_in - 300) * 1000;
      return this.accessToken;

    } catch (err) {
      // Mensagens de erro mais claras para diagnóstico
      if (err.code === 'ECONNRESET' || err.code === 'ECONNREFUSED' || err.message?.includes('socket hang up')) {
        throw new Error(
          'Conexão recusada pela Efí Bank. Verifique se o certificado .p12 está correto e na pasta certa. ' +
          'Em sandbox baixe o certificado de HOMOLOGAÇÃO no painel Efí Bank.'
        );
      }
      if (err.response?.status === 401) {
        throw new Error('Credenciais inválidas (CLIENT_ID ou CLIENT_SECRET incorretos).');
      }
      throw err;
    }
  }

  async _request(method, path, data = null) {
    const token = await this._getToken();

    const config = {
      method,
      url: `${this.baseUrl}${path}`,
      httpsAgent: this.httpsAgent,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      timeout: 15000
    };

    if (data) config.data = data;

    try {
      const response = await axios(config);
      return response.data;
    } catch (err) {
      if (err.response) {
        const body = err.response.data;
        const msg  = body?.mensagem || body?.message || JSON.stringify(body);
        throw new Error(`Efí Bank API [${err.response.status}]: ${msg}`);
      }
      throw err;
    }
  }

  // POST /v2/cob — cria cobrança imediata
  async pixCreateImmediateCharge(body) {
    return this._request('POST', '/v2/cob', body);
  }

  // GET /v2/loc/{locId}/qrcode — gera QR Code
  async pixGenerateQRCode(locId) {
    return this._request('GET', `/v2/loc/${locId}/qrcode`);
  }

  // GET /v2/cob/{txid} — consulta status da cobrança
  async pixDetailCharge(txid) {
    return this._request('GET', `/v2/cob/${txid}`);
  }
}

module.exports = EfiBankPix;
