import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Package, Check, Coins, Users, Clock, Zap } from 'lucide-react'
import { getPlanos, getMe, comprarPlano } from '../lib/api'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

const PLAN_STYLES: Record<string, { gradient: string; border: string; badge: string; glow: string }> = {
  basico:  {
    gradient: 'from-zinc-800 to-zinc-700',
    border:   'border-zinc-700/60',
    badge:    'green',
    glow:     ''
  },
  pro:     {
    gradient: 'from-cyan-950 to-indigo-950',
    border:   'border-cyan-500/30',
    badge:    'cyan',
    glow:     'shadow-lg shadow-cyan-500/10'
  },
  premium: {
    gradient: 'from-indigo-950 to-purple-950',
    border:   'border-indigo-500/40',
    badge:    'purple',
    glow:     'shadow-lg shadow-indigo-500/15'
  }
}

const PLAN_FEATURES: Record<string, string[]> = {
  basico:  ['1 grupo de WhatsApp', '30 dias de uso', 'Menu interativo', 'Suporte básico'],
  pro:     ['5 grupos de WhatsApp', '30 dias de uso', 'Menu interativo', 'Notificações de expiração', 'Suporte prioritário'],
  premium: ['Grupos ilimitados', '30 dias de uso', 'Menu interativo', 'Notificações de expiração', 'Suporte VIP', 'Novidades em primeira mão']
}

export default function Planos() {
  const queryClient = useQueryClient()
  const [comprando, setComprando] = useState<string | null>(null)
  const [sucesso, setSucesso]     = useState<string | null>(null)
  const [erroMsg, setErroMsg]     = useState<string | null>(null)

  const { data: planosData } = useQuery({ queryKey: ['planos'], queryFn: getPlanos })
  const { data: user }       = useQuery({ queryKey: ['me'],    queryFn: getMe })
  const { data: meData }     = useQuery({ queryKey: ['me'],    queryFn: getMe })

  const planos = planosData?.planos || []
  const moedas = user?.moedas ?? 0
  const planoAtivo = meData?.plano

  const mutation = useMutation({
    mutationFn: comprarPlano,
    onSuccess: (data) => {
      setSucesso(data.plano?.nomePlano || 'Plano')
      setComprando(null)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['pagamentos'] })
    },
    onError: (err: Error) => {
      setErroMsg(err.message || 'Erro ao comprar plano')
      setComprando(null)
    }
  })

  const handleComprar = (planKey: string) => {
    setErroMsg(null)
    setSucesso(null)
    setComprando(planKey)
    mutation.mutate(planKey)
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-white">Planos</h1>
        <p className="text-zinc-500 text-sm mt-1">Escolha o plano ideal para seu negócio</p>
      </motion.div>

      {/* Saldo */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Coins size={15} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">Seu saldo</p>
            <p className="text-lg font-bold text-white">{moedas} <span className="text-sm font-normal text-zinc-400">moedas</span></p>
          </div>
        </div>
        <Link to="/recarregar">
          <Button size="sm" variant="outline">
            Recarregar
          </Button>
        </Link>
      </motion.div>

      {/* Alertas */}
      {sucesso && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        >
          <p className="text-sm text-emerald-400 font-medium">✅ Plano {sucesso} ativado com sucesso!</p>
          <p className="text-xs text-emerald-400/70 mt-0.5">Agora envie .link no WhatsApp para adicionar o bot ao seu grupo.</p>
        </motion.div>
      )}
      {erroMsg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"
        >
          <p className="text-sm text-red-400">{erroMsg}</p>
        </motion.div>
      )}

      {/* Plano ativo */}
      {planoAtivo && (
        <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
          <p className="text-xs text-indigo-400">
            Plano atual: <b>{planoAtivo.nomePlano}</b> · Expira em {
              (() => {
                const diff = new Date(planoAtivo.expiraEm).getTime() - Date.now()
                const dias = Math.floor(diff / 86400000)
                return `${dias}d`
              })()
            }
          </p>
        </div>
      )}

      {/* Cards de planos */}
      <div className="grid gap-4 sm:grid-cols-3">
        {planos.map((plano, i) => {
          const style = PLAN_STYLES[plano.id] || PLAN_STYLES.basico
          const features = PLAN_FEATURES[plano.id] || []
          const podeComprar = moedas >= plano.moedas
          const isCurrent = planoAtivo?.plano === plano.id
          const isPro = plano.id === 'pro'

          return (
            <motion.div
              key={plano.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {isPro && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="text-[10px] font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-3 py-0.5 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              <div className={`rounded-2xl border bg-gradient-to-b ${style.gradient} ${style.border} ${style.glow} p-5 h-full flex flex-col`}>
                <div className="mb-4">
                  <p className="text-base font-bold text-white">{plano.nome}</p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold text-white">{plano.moedas}</span>
                    <span className="text-sm text-zinc-400">moedas</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">≈ R$ {(plano.moedas * 0.10).toFixed(2)}</p>
                </div>

                <ul className="space-y-2 flex-1 mb-5">
                  {features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check size={13} className="text-cyan-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="space-y-1.5 text-xs text-zinc-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Users size={11} /> {plano.maxGrupos === -1 ? 'Grupos ilimitados' : `${plano.maxGrupos} grupo(s)`}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} /> {plano.dias} dias
                  </div>
                </div>

                {isCurrent ? (
                  <Badge variant="green" className="justify-center py-2">
                    <Check size={12} /> Plano atual
                  </Badge>
                ) : (
                  <Button
                    variant={isPro ? 'default' : 'outline'}
                    className="w-full"
                    size="sm"
                    loading={comprando === plano.id}
                    disabled={!podeComprar || comprando !== null}
                    onClick={() => handleComprar(plano.id)}
                  >
                    {!podeComprar
                      ? `Faltam ${plano.moedas - moedas} moedas`
                      : comprando === plano.id
                        ? 'Ativando...'
                        : 'Comprar agora'
                    }
                  </Button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Info */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardContent className="pt-5">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Como funciona</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Coins,   title: 'Compre moedas',    desc: 'Recarregue via PIX pelo painel ou pelo bot no WhatsApp' },
                { icon: Package, title: 'Ative um plano',   desc: 'Troque suas moedas por um plano e libere grupos' },
                { icon: Zap,     title: 'Use o bot',        desc: 'Adicione o bot ao grupo com .link e ative com .ativar' }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
