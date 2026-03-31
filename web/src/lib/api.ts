import axios from 'axios'

const BASE_URL = '/api'

const client = axios.create({ baseURL: BASE_URL })

client.interceptors.request.use(config => {
  const phone = localStorage.getItem('ba_phone')
  if (phone) config.headers['x-user-phone'] = phone
  return config
})

export interface User {
  id: string
  nome: string
  moedas: number
  plano: PlanoAtivo | null
  grupos: number
  gruposAtivos: number
}

export interface PlanoAtivo {
  id: string
  userId: string
  plano: string
  nomePlano: string
  status: string
  maxGrupos: number
  ativadoEm: string
  expiraEm: string
}

export interface Grupo {
  id: string
  nomeGrupo: string
  status: 'ativo' | 'inativo'
  aguardandoAdmin: boolean
  adminRecebido: boolean
  adicionadoEm: string
  ativadoEm?: string
  nomePlano?: string
  expiraEm?: string
}

export interface PlanoDisponivel {
  id: string
  nome: string
  moedas: number
  dias: number
  maxGrupos: number
}

export interface Pagamento {
  txid: string
  tipo: string
  valor: number
  moedas: number
  status: string
  criadoEm: string
}

export interface PixResponse {
  txid: string
  moedas: number
  valor: number
  qrCode: string
  copiaCola: string
  expiraEm: string
}

// ===== Auth =====
export const login = async (phone: string) => {
  const { data } = await client.post('/auth/login', { phone })
  return data
}

// ===== User =====
export const getMe = async (): Promise<User> => {
  const { data } = await client.get('/user/me')
  return data
}

export const getGrupos = async (): Promise<{ grupos: Grupo[]; total: number }> => {
  const { data } = await client.get('/user/grupos')
  return data
}

export const getPlanoAtivo = async (): Promise<{ plano: PlanoAtivo | null }> => {
  const { data } = await client.get('/user/plano')
  return data
}

export const getPagamentos = async (): Promise<{ pagamentos: Pagamento[] }> => {
  const { data } = await client.get('/user/pagamentos')
  return data
}

// ===== Planos =====
export const getPlanos = async (): Promise<{ planos: PlanoDisponivel[] }> => {
  const { data } = await client.get('/planos')
  return data
}

export const comprarPlano = async (planKey: string) => {
  const { data } = await client.post('/planos/comprar', { planKey })
  return data
}

// ===== PIX =====
export const gerarPix = async (valor: number): Promise<PixResponse> => {
  const { data } = await client.post('/pix/recarga', { valor })
  return data
}

export const checarPix = async (txid: string): Promise<{ status: string; moedas?: number }> => {
  const { data } = await client.get(`/pix/status/${txid}`)
  return data
}
