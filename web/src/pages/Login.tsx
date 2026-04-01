import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Phone, Lock, ArrowRight, Eye, EyeOff, MessageSquare } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function Login() {
  const [phone,    setPhone]    = useState('')
  const [password, setPassword] = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  const { signIn }              = useAuth()
  const navigate                = useNavigate()

  const formatPhone = (val: string) => val.replace(/\D/g, '').slice(0, 13)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setError('Digite um número válido com DDI e DDD (ex: 5511999999999)')
      return
    }
    if (!password.trim()) {
      setError('A senha é obrigatória. Crie uma no bot com: .senha suasenha')
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
      } else if (msg.includes('ainda não criou') || msg.includes('Crie sua senha')) {
        setError('Você ainda não criou uma senha. Envie no WhatsApp: .senha suasenha')
      } else if (msg.includes('incorreta') || msg.includes('Informe')) {
        setError('Senha incorreta. Se esqueceu, envie .senha novasenha no bot.')
      } else {
        setError(msg || 'Erro ao fazer login. Verifique os dados e tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-[#0a0a0f] px-4 relative overflow-hidden">
      {/* Background glow */}
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

        {/* Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-6 shadow-2xl">
          <h2 className="text-lg font-semibold text-white mb-1">Entrar na conta</h2>
          <p className="text-sm text-zinc-500 mb-6">
            Use o mesmo número do WhatsApp e a senha definida no bot
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Definida no bot com .senha suasenha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                leftIcon={<Lock size={16} />}
                disabled={loading}
                autoComplete="current-password"
                required
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

            <Button
              type="submit"
              className="w-full mt-2"
              size="lg"
              loading={loading}
            >
              {loading ? 'Entrando...' : (
                <>
                  Entrar
                  <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>

          {/* Dica de como criar senha */}
          <div className="mt-5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 p-3">
            <div className="flex items-start gap-2">
              <MessageSquare size={15} className="text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-zinc-300 mb-1">Primeiro acesso?</p>
                <p className="text-xs text-zinc-500">
                  Envie no WhatsApp:<br />
                  <code className="text-cyan-400">.menu</code> para se cadastrar<br />
                  <code className="text-cyan-400">.senha suasenha</code> para criar senha
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
