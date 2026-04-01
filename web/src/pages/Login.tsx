import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Phone, Lock, ArrowRight, Eye, EyeOff, KeyRound, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { criarSenha } from '../lib/api'

type Mode = 'login' | 'criar-senha'

export default function Login() {
  const [mode,        setMode]        = useState<Mode>('login')
  const [phone,       setPhone]       = useState('')
  const [password,    setPassword]    = useState('')
  const [novaSenha,   setNovaSenha]   = useState('')
  const [confirma,    setConfirma]    = useState('')
  const [showPwd,     setShowPwd]     = useState(false)
  const [showNova,    setShowNova]    = useState(false)
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState('')
  const [sucesso,     setSucesso]     = useState('')
  const { signIn }                    = useAuth()
  const navigate                      = useNavigate()

  const formatPhone = (val: string) => val.replace(/\D/g, '').slice(0, 13)

  /* ── LOGIN ── */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setError('Digite um número válido com DDI e DDD (ex: 5511999999999)')
      return
    }
    if (!password.trim()) {
      setError('A senha é obrigatória.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await signIn(digits, password)
      navigate('/')
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error || ''
      if (msg.includes('não encontrado') || msg.includes('bot primeiro')) {
        setError('Número não cadastrado. Envie .menu no bot pelo WhatsApp primeiro.')
      } else if (msg.includes('ainda não criou') || msg.includes('Crie sua senha') || msg.includes('sem senha')) {
        setError('')
        setMode('criar-senha')
      } else if (msg.includes('incorreta') || msg.includes('Informe')) {
        setError('Senha incorreta.')
      } else {
        setError(msg || 'Erro ao fazer login. Verifique os dados e tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  /* ── CRIAR SENHA ── */
  const handleCriarSenha = async (e: React.FormEvent) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setError('Digite um número válido com DDI e DDD (ex: 5511999999999)')
      return
    }
    if (novaSenha.length < 4) {
      setError('A senha deve ter no mínimo 4 caracteres.')
      return
    }
    if (novaSenha !== confirma) {
      setError('As senhas não coincidem.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await criarSenha(digits, novaSenha)
      setSucesso('Senha criada! Fazendo login...')
      await signIn(digits, novaSenha)
      navigate('/')
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error || ''
      if (msg.includes('não cadastrado')) {
        setError('Número não cadastrado. Envie .menu no bot primeiro.')
      } else if (msg.includes('já possui')) {
        setError('Você já tem senha. Faça login normalmente ou use .senha novasenha no bot para alterar.')
        setMode('login')
      } else {
        setError(msg || 'Erro ao criar senha. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-[#0a0a0f] px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm relative"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center mb-4 shadow-2xl shadow-cyan-500/25"
          >
            <Bot size={32} className="text-white" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white">BotAluguel</h1>
          <p className="text-zinc-500 text-sm mt-1">Painel de gerenciamento</p>
        </div>

        <AnimatePresence mode="wait">
          {/* ── MODO LOGIN ── */}
          {mode === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-6 shadow-2xl"
            >
              <h2 className="text-lg font-semibold text-white mb-1">Entrar na conta</h2>
              <p className="text-sm text-zinc-500 mb-6">Use seu número do WhatsApp e sua senha</p>

              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  label="Número do WhatsApp"
                  type="tel"
                  placeholder="5511999999999"
                  value={phone}
                  onChange={e => setPhone(formatPhone(e.target.value))}
                  leftIcon={<Phone size={16} />}
                  disabled={loading}
                  autoComplete="tel"
                  inputMode="numeric"
                />

                <div className="relative">
                  <Input
                    label="Senha do painel"
                    type={showPwd ? 'text' : 'password'}
                    placeholder="Sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    leftIcon={<Lock size={16} />}
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(p => !p)}
                    className="absolute right-3 top-[34px] text-zinc-500 hover:text-zinc-300 transition-colors"
                    tabIndex={-1}
                  >
                    {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2">
                    <p className="text-red-400 text-xs leading-relaxed">{error}</p>
                  </div>
                )}

                <Button type="submit" className="w-full mt-2" size="lg" loading={loading}>
                  {loading ? 'Entrando...' : <> Entrar <ArrowRight size={18} /> </>}
                </Button>
              </form>

              {/* Link para criar senha */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => { setError(''); setMode('criar-senha') }}
                  className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Primeiro acesso? Criar senha aqui
                </button>
              </div>
            </motion.div>
          )}

          {/* ── MODO CRIAR SENHA ── */}
          {mode === 'criar-senha' && (
            <motion.div
              key="criar-senha"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-6 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <KeyRound size={18} className="text-cyan-400" />
                <h2 className="text-lg font-semibold text-white">Criar senha</h2>
              </div>
              <p className="text-sm text-zinc-500 mb-6">
                Defina sua senha de acesso ao painel. O número deve estar registrado no bot.
              </p>

              {sucesso ? (
                <div className="flex flex-col items-center gap-3 py-4">
                  <CheckCircle2 size={40} className="text-green-400" />
                  <p className="text-green-400 text-sm font-medium">{sucesso}</p>
                </div>
              ) : (
                <form onSubmit={handleCriarSenha} className="space-y-4">
                  <Input
                    label="Número do WhatsApp"
                    type="tel"
                    placeholder="5511999999999"
                    value={phone}
                    onChange={e => setPhone(formatPhone(e.target.value))}
                    leftIcon={<Phone size={16} />}
                    disabled={loading}
                    autoComplete="tel"
                    inputMode="numeric"
                  />

                  <div className="relative">
                    <Input
                      label="Nova senha"
                      type={showNova ? 'text' : 'password'}
                      placeholder="Mínimo 4 caracteres"
                      value={novaSenha}
                      onChange={e => setNovaSenha(e.target.value)}
                      leftIcon={<Lock size={16} />}
                      disabled={loading}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNova(p => !p)}
                      className="absolute right-3 top-[34px] text-zinc-500 hover:text-zinc-300 transition-colors"
                      tabIndex={-1}
                    >
                      {showNova ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  <Input
                    label="Confirmar senha"
                    type="password"
                    placeholder="Repita a senha"
                    value={confirma}
                    onChange={e => setConfirma(e.target.value)}
                    leftIcon={<Lock size={16} />}
                    disabled={loading}
                    autoComplete="new-password"
                  />

                  {error && (
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2">
                      <p className="text-red-400 text-xs leading-relaxed">{error}</p>
                    </div>
                  )}

                  <Button type="submit" className="w-full mt-2" size="lg" loading={loading}>
                    {loading ? 'Salvando...' : <> Criar senha e entrar <ArrowRight size={18} /> </>}
                  </Button>
                </form>
              )}

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => { setError(''); setMode('login') }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  ← Voltar para o login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
