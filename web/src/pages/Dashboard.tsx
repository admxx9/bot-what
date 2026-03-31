import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Coins, Package, Users, TrendingUp, Clock, Bot, ArrowRight, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getMe, getPagamentos } from '../lib/api'
import { Card, CardContent, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { formatarTempo, formatarData, formatarValor } from '../lib/utils'

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
  subtitle?: string
  accent?: string
  delay?: number
}

function StatCard({ icon, title, value, subtitle, accent = 'cyan', delay = 0 }: StatCardProps) {
  const colors = {
    cyan:   'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    emerald:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber:  'bg-amber-500/10 text-amber-400 border-amber-500/20'
  }
  const ico = colors[accent as keyof typeof colors] || colors.cyan

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
            {subtitle && <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>}
          </div>
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ico}`}>
            {icon}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Dashboard() {
  const { data: user, isLoading } = useQuery({ queryKey: ['me'], queryFn: getMe, refetchInterval: 30_000 })
  const { data: pagsData } = useQuery({ queryKey: ['pagamentos'], queryFn: getPagamentos })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const plano   = user?.plano
  const expira  = plano ? formatarTempo(plano.expiraEm) : null
  const isClose = plano ? (new Date(plano.expiraEm).getTime() - Date.now()) < 48 * 3600 * 1000 : false
  const pags    = pagsData?.pagamentos || []
  const pagasOk = pags.filter(p => p.status === 'pago')

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-zinc-500 text-sm mt-1">Visão geral da sua conta</p>
      </motion.div>

      {/* Alerta expiração */}
      {isClose && plano && (
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
        >
          <AlertCircle size={18} className="text-amber-400 mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-400">Plano expirando em breve!</p>
            <p className="text-xs text-amber-400/70 mt-0.5">
              Seu plano <b>{plano.nomePlano}</b> expira em {expira}. Renove agora para manter seus grupos ativos.
            </p>
          </div>
          <Link to="/planos">
            <Button variant="outline" size="sm" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 shrink-0">
              Renovar
            </Button>
          </Link>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Coins size={18} />}
          title="Moedas"
          value={user?.moedas ?? 0}
          subtitle="Saldo disponível"
          accent="cyan"
          delay={0}
        />
        <StatCard
          icon={<Package size={18} />}
          title="Plano"
          value={plano ? plano.nomePlano.replace(/[⭐💎👑]/g, '').trim() : 'Nenhum'}
          subtitle={expira ? `Expira em ${expira}` : 'Sem plano ativo'}
          accent="indigo"
          delay={0.05}
        />
        <StatCard
          icon={<Users size={18} />}
          title="Grupos"
          value={user?.grupos ?? 0}
          subtitle={`${user?.gruposAtivos ?? 0} ativo(s)`}
          accent="emerald"
          delay={0.1}
        />
        <StatCard
          icon={<TrendingUp size={18} />}
          title="Recargas"
          value={pagasOk.length}
          subtitle="Pagamentos realizados"
          accent="amber"
          delay={0.15}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Plano ativo */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <div className="px-5 pt-5 pb-3 flex items-center justify-between">
              <CardTitle>Plano Atual</CardTitle>
              <Package size={15} className="text-zinc-600" />
            </div>
            <CardContent>
              {plano ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">{plano.nomePlano}</span>
                    <Badge variant="green">Ativo</Badge>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5"><Users size={13} /> Grupos</span>
                      <span className="text-white font-medium">{plano.maxGrupos === -1 ? '∞ Ilimitados' : plano.maxGrupos}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5"><Clock size={13} /> Expira em</span>
                      <span className={`font-medium ${isClose ? 'text-amber-400' : 'text-white'}`}>{expira}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Ativado em</span>
                      <span className="text-white font-medium">{formatarData(plano.ativadoEm)}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="w-full bg-zinc-800 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-1.5 rounded-full transition-all"
                        style={{
                          width: `${Math.max(5, Math.min(100, ((new Date(plano.expiraEm).getTime() - Date.now()) / (30 * 86400000)) * 100))}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <Bot size={32} className="mx-auto text-zinc-700 mb-2" />
                  <p className="text-zinc-500 text-sm">Nenhum plano ativo</p>
                  <Link to="/planos" className="mt-3 inline-flex">
                    <Button size="sm" className="mt-2">
                      Ver planos <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Histórico recente */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Card>
            <div className="px-5 pt-5 pb-3 flex items-center justify-between">
              <CardTitle>Últimas Recargas</CardTitle>
              <Coins size={15} className="text-zinc-600" />
            </div>
            <CardContent>
              {pags.length > 0 ? (
                <div className="space-y-2">
                  {pags.slice(0, 5).map(p => (
                    <div key={p.txid} className="flex items-center justify-between py-2 border-b border-zinc-800/60 last:border-0">
                      <div>
                        <p className="text-sm text-zinc-200 font-medium">+{p.moedas} moedas</p>
                        <p className="text-xs text-zinc-600">{formatarData(p.criadoEm)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-400">{formatarValor(p.valor)}</span>
                        <Badge variant={p.status === 'pago' ? 'green' : p.status === 'pendente' ? 'yellow' : 'red'}>
                          {p.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-zinc-500 text-sm">Nenhuma recarga realizada</p>
                  <Link to="/recarregar">
                    <Button size="sm" variant="outline" className="mt-3">
                      Recarregar <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Ações rápidas */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Ações Rápidas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { to: '/recarregar', icon: Coins,   label: 'Recarregar moedas', accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
            { to: '/planos',     icon: Package, label: 'Comprar plano',     accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
            { to: '/grupos',     icon: Users,   label: 'Ver grupos',        accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' }
          ].map(({ to, icon: Icon, label, accent }) => (
            <Link key={to} to={to}>
              <div className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${accent}`}>
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
