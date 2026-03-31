import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Coins, QrCode, Copy, Check, RefreshCw, Clock } from 'lucide-react'
import { getMe, gerarPix, checarPix } from '../lib/api'
import type { PixResponse } from '../lib/api'
import { Card, CardContent, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'
import { formatarValor } from '../lib/utils'

const PRESETS = [
  { brl: 10,  label: 'R$ 10',  moedas: 100 },
  { brl: 20,  label: 'R$ 20',  moedas: 200 },
  { brl: 35,  label: 'R$ 35',  moedas: 350 },
  { brl: 60,  label: 'R$ 60',  moedas: 600 },
  { brl: 100, label: 'R$ 100', moedas: 1000 }
]

export default function Recarregar() {
  const queryClient = useQueryClient()
  const [valorStr, setValorStr] = useState('')
  const [pix, setPix]           = useState<PixResponse | null>(null)
  const [status, setStatus]     = useState<'idle' | 'pendente' | 'pago' | 'expirado'>('idle')
  const [copiado, setCopiado]   = useState(false)
  const [erroMsg, setErroMsg]   = useState('')

  const { data: user } = useQuery({ queryKey: ['me'], queryFn: getMe })
  const moedas = user?.moedas ?? 0

  const mutation = useMutation({
    mutationFn: gerarPix,
    onSuccess: (data) => {
      setPix(data)
      setStatus('pendente')
      setErroMsg('')
    },
    onError: (err: Error) => {
      setErroMsg(err.message || 'Erro ao gerar PIX')
    }
  })

  // Poll para verificar pagamento
  useEffect(() => {
    if (!pix || status !== 'pendente') return
    const interval = setInterval(async () => {
      try {
        const res = await checarPix(pix.txid)
        if (res.status === 'pago') {
          setStatus('pago')
          clearInterval(interval)
          queryClient.invalidateQueries({ queryKey: ['me'] })
          queryClient.invalidateQueries({ queryKey: ['pagamentos'] })
        } else if (res.status === 'expirado') {
          setStatus('expirado')
          clearInterval(interval)
        }
      } catch {}
    }, 10_000)
    return () => clearInterval(interval)
  }, [pix, status, queryClient])

  const handleGerar = () => {
    const valor = parseFloat(valorStr.replace(',', '.'))
    if (isNaN(valor) || valor < 5) {
      setErroMsg('Valor mínimo: R$ 5,00')
      return
    }
    setErroMsg('')
    setStatus('idle')
    setPix(null)
    mutation.mutate(valor)
  }

  const handleCopiar = () => {
    if (!pix?.copiaCola) return
    navigator.clipboard.writeText(pix.copiaCola)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2500)
  }

  const handleReset = () => {
    setPix(null)
    setStatus('idle')
    setValorStr('')
    setErroMsg('')
  }

  const moedosCalculadas = () => {
    const v = parseFloat(valorStr.replace(',', '.'))
    if (isNaN(v) || v < 0) return 0
    return Math.floor(v / 0.10)
  }

  return (
    <div className="space-y-6 max-w-xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-white">Recarregar Moedas</h1>
        <p className="text-zinc-500 text-sm mt-1">Compre moedas via PIX para usar nos planos</p>
      </motion.div>

      {/* Saldo atual */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15"
      >
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          <Coins size={16} className="text-cyan-400" />
        </div>
        <div>
          <p className="text-xs text-zinc-500">Saldo atual</p>
          <p className="text-lg font-bold text-cyan-400">{moedas} moedas</p>
        </div>
        <div className="ml-auto text-xs text-zinc-600">1 BRL = 10 moedas</div>
      </motion.div>

      {status === 'pago' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Pagamento confirmado!</h2>
          <p className="text-zinc-400 text-sm mb-1">
            <b className="text-emerald-400">+{pix?.moedas} moedas</b> foram adicionadas à sua conta.
          </p>
          <p className="text-zinc-500 text-xs mb-6">Novo saldo disponível na dashboard.</p>
          <Button onClick={handleReset} variant="outline">
            Fazer nova recarga
          </Button>
        </motion.div>
      ) : pix && status !== 'expirado' ? (
        /* QR Code */
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <Card>
            <div className="px-5 pt-5 pb-3 flex items-center justify-between">
              <CardTitle>Pagamento PIX</CardTitle>
              <Badge variant="yellow">
                <Clock size={11} /> Aguardando
              </Badge>
            </div>
            <CardContent>
              <div className="text-center mb-5">
                <p className="text-sm text-zinc-400 mb-1">Valor</p>
                <p className="text-3xl font-bold text-white">{formatarValor(pix.valor)}</p>
                <p className="text-sm text-cyan-400 mt-0.5">+{pix.moedas} moedas</p>
              </div>

              {pix.qrCode && (
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-white">
                    <img
                      src={pix.qrCode.startsWith('data:') ? pix.qrCode : `data:image/png;base64,${pix.qrCode}`}
                      alt="QR Code PIX"
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                </div>
              )}

              <p className="text-xs text-center text-zinc-500 mb-3">
                Ou use o código copia e cola:
              </p>

              <div className="flex gap-2">
                <div className="flex-1 bg-zinc-800/60 border border-zinc-700/60 rounded-xl px-3 py-2.5 text-xs font-mono text-zinc-400 truncate">
                  {pix.copiaCola}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={handleCopiar}
                  title="Copiar código"
                >
                  {copiado ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </Button>
              </div>

              <p className="text-xs text-center text-zinc-600 mt-3">
                O pagamento será confirmado automaticamente. Válido por 1 hora.
              </p>

              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-500">Aguardando confirmação...</span>
              </div>
            </CardContent>
          </Card>

          <Button variant="ghost" onClick={handleReset} className="w-full text-zinc-600 hover:text-zinc-400">
            Cancelar e gerar novo PIX
          </Button>
        </motion.div>
      ) : (
        /* Formulário */
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          {/* Presets */}
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Valores rápidos</p>
            <div className="grid grid-cols-5 gap-2">
              {PRESETS.map(p => (
                <button
                  key={p.brl}
                  onClick={() => setValorStr(String(p.brl))}
                  className={`flex flex-col items-center py-2.5 px-1 rounded-xl border text-xs transition-all ${
                    valorStr === String(p.brl)
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                  }`}
                >
                  <span className="font-semibold">{p.label}</span>
                  <span className="text-[10px] opacity-70 mt-0.5">{p.moedas}🪙</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input personalizado */}
          <div>
            <Input
              label="Ou digite o valor (R$)"
              type="number"
              placeholder="0.00"
              min="5"
              step="1"
              value={valorStr}
              onChange={e => setValorStr(e.target.value)}
              leftIcon={<span className="text-xs font-medium">R$</span>}
              error={erroMsg}
            />
            {valorStr && parseFloat(valorStr) >= 5 && (
              <p className="text-xs text-cyan-400 mt-1 ml-1">
                = {moedosCalculadas()} moedas
              </p>
            )}
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleGerar}
            loading={mutation.isPending}
            disabled={!valorStr || parseFloat(valorStr) < 5}
          >
            <QrCode size={18} />
            {mutation.isPending ? 'Gerando PIX...' : 'Gerar QR Code PIX'}
          </Button>

          {status === 'expirado' && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-sm text-red-400 text-center">PIX expirado. Gere um novo código.</p>
            </div>
          )}

          <Card>
            <CardContent className="pt-4">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Como funciona</p>
              <ol className="space-y-2 text-xs text-zinc-500">
                {[
                  'Escolha o valor e clique em Gerar QR Code',
                  'Escaneie o QR Code ou use o código copia e cola',
                  'Pague via PIX no seu banco de preferência',
                  'As moedas são creditadas automaticamente'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[9px] text-zinc-400 shrink-0 mt-0.5">{i+1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
