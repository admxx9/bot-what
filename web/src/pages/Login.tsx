import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Phone, ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function Login() {
  const [phone, setPhone]   = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')
  const { signIn }           = useAuth()
  const navigate             = useNavigate()

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 13)
    return digits
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setError('Digite um número válido com DDI e DDD (ex: 5511999999999)')
      return
    }
    setError('')
    setLoading(true)
    try {
      await signIn(digits)
      navigate('/')
    } catch {
      setError('Erro ao fazer login. Verifique o número e tente novamente.')
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
            Digite seu número de WhatsApp para acessar o painel
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Número do WhatsApp"
              type="tel"
              placeholder="5511999999999"
              value={phone}
              onChange={e => setPhone(formatPhone(e.target.value))}
              leftIcon={<Phone size={16} />}
              error={error}
              disabled={loading}
              autoComplete="tel"
              inputMode="numeric"
            />

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

          <p className="text-xs text-zinc-600 text-center mt-5">
            Use o mesmo número cadastrado no bot via WhatsApp.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
