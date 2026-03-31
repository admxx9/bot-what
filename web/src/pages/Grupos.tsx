import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Users, Clock, CheckCircle2, XCircle, Loader2, Bot, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getGrupos } from '../lib/api'
import { Card, CardContent, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { formatarTempo, formatarData } from '../lib/utils'
import type { Grupo } from '../lib/api'

function GrupoCard({ grupo, index }: { grupo: Grupo; index: number }) {
  const getStatus = () => {
    if (grupo.status === 'ativo') return { label: 'Ativo', variant: 'green' as const, icon: <CheckCircle2 size={13} /> }
    if (grupo.adminRecebido)     return { label: 'Aguardando ativação', variant: 'yellow' as const, icon: <Clock size={13} /> }
    if (grupo.aguardandoAdmin)   return { label: 'Aguardando admin', variant: 'yellow' as const, icon: <Loader2 size={13} className="animate-spin" /> }
    return { label: 'Inativo', variant: 'red' as const, icon: <XCircle size={13} /> }
  }

  const status = getStatus()

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <Card className="overflow-hidden">
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-700 border border-zinc-700/50 flex items-center justify-center shrink-0">
                <Users size={16} className="text-zinc-400" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{grupo.nomeGrupo}</p>
                <p className="text-xs text-zinc-600 truncate font-mono mt-0.5">{grupo.id.split('@')[0]}</p>
              </div>
            </div>
            <Badge variant={status.variant}>
              {status.icon}
              {status.label}
            </Badge>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/60 grid grid-cols-2 gap-3 text-xs text-zinc-500">
            <div>
              <p className="text-zinc-600 mb-0.5">Adicionado em</p>
              <p className="text-zinc-400 font-medium">{formatarData(grupo.adicionadoEm)}</p>
            </div>
            {grupo.expiraEm && grupo.status === 'ativo' && (
              <div>
                <p className="text-zinc-600 mb-0.5">Expira em</p>
                <p className="text-zinc-400 font-medium">{formatarTempo(grupo.expiraEm)}</p>
              </div>
            )}
            {grupo.nomePlano && (
              <div className="col-span-2">
                <p className="text-zinc-600 mb-0.5">Plano</p>
                <p className="text-zinc-400 font-medium">{grupo.nomePlano}</p>
              </div>
            )}
          </div>

          {grupo.adminRecebido && grupo.status !== 'ativo' && (
            <div className="mt-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15">
              <p className="text-xs text-amber-400/80">
                Bot precisa ser ativado. Envie no privado do WhatsApp:
              </p>
              <p className="text-xs font-mono text-amber-400 mt-1 bg-zinc-900 rounded px-2 py-1">
                .ativar {grupo.id}
              </p>
            </div>
          )}

          {grupo.aguardandoAdmin && !grupo.adminRecebido && (
            <div className="mt-3 p-2.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
              <p className="text-xs text-zinc-500">
                Aguardando ser promovido a administrador no grupo.
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export default function Grupos() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['grupos'], queryFn: getGrupos, refetchInterval: 30_000 })

  const grupos = data?.grupos || []
  const ativos = grupos.filter(g => g.status === 'ativo').length
  const pendentes = grupos.filter(g => g.status !== 'ativo').length

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Meus Grupos</h1>
            <p className="text-zinc-500 text-sm mt-1">Grupos vinculados à sua conta</p>
          </div>
          {grupos.length > 0 && (
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="green">{ativos} ativo(s)</Badge>
              {pendentes > 0 && <Badge variant="yellow">{pendentes} pendente(s)</Badge>}
            </div>
          )}
        </div>
      </motion.div>

      {isLoading && (
        <div className="flex items-center justify-center h-40">
          <div className="w-7 h-7 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {isError && (
        <Card>
          <CardContent>
            <p className="text-red-400 text-sm text-center py-4">Erro ao carregar grupos. Tente novamente.</p>
          </CardContent>
        </Card>
      )}

      {!isLoading && grupos.length === 0 && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardContent>
              <div className="text-center py-10">
                <Bot size={40} className="mx-auto text-zinc-700 mb-3" />
                <p className="text-zinc-400 font-medium">Nenhum grupo vinculado</p>
                <p className="text-zinc-600 text-sm mt-1 mb-5">
                  Adicione o bot a um grupo usando o comando no WhatsApp
                </p>
                <div className="inline-flex flex-col items-center gap-2 p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <p className="text-xs text-zinc-500">No privado do WhatsApp, envie:</p>
                  <p className="font-mono text-cyan-400 text-sm">.link</p>
                </div>
                <div className="mt-4">
                  <Link to="/planos">
                    <Button size="sm" variant="outline">
                      Ver planos disponíveis
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {!isLoading && grupos.length > 0 && (
        <div className="space-y-3">
          {grupos.map((grupo, i) => (
            <GrupoCard key={grupo.id} grupo={grupo} index={i} />
          ))}
        </div>
      )}

      {/* Instruções */}
      {grupos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="px-5 pt-5 pb-3">
              <CardTitle>Como adicionar um novo grupo</CardTitle>
            </div>
            <CardContent>
              <ol className="space-y-2 text-sm text-zinc-400">
                {[
                  'Envie .link no privado do bot no WhatsApp',
                  'O bot pedirá o link de convite do grupo',
                  'Envie o link (Grupo → 3 pontos → Convidar pelo link)',
                  'Promova o bot a administrador do grupo',
                  'Envie .ativar [id] no privado para ativar'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
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
