import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LayoutDashboard, Users, Package, Wallet, LogOut, Bot } from 'lucide-react'
import { cn } from '../lib/utils'

const navItems = [
  { to: '/',          icon: LayoutDashboard, label: 'Dashboard'   },
  { to: '/grupos',    icon: Users,           label: 'Grupos'      },
  { to: '/planos',    icon: Package,         label: 'Planos'      },
  { to: '/recarregar',icon: Wallet,          label: 'Recarregar'  }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const { signOut } = useAuth()
  const navigate     = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/login')
  }

  return (
    <div className="flex min-h-svh bg-[#0a0a0f]">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-zinc-800/60 bg-zinc-950/80 backdrop-blur fixed h-full z-30">
        <div className="flex items-center gap-3 px-5 py-6 border-b border-zinc-800/60">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none">BotAluguel</p>
            <p className="text-[10px] text-zinc-500 mt-0.5">Painel de controle</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50'
                )
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-zinc-800/60">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-500/10 w-full transition-all duration-150"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-60 flex flex-col">
        {/* Top bar Mobile */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
              <Bot size={15} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-white">BotAluguel</span>
          </div>
          <button onClick={handleSignOut} className="text-zinc-500 hover:text-red-400 transition-colors">
            <LogOut size={18} />
          </button>
        </header>

        {/* Page */}
        <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8">
          {children}
        </main>

        {/* Bottom Nav Mobile */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur border-t border-zinc-800/60 z-20">
          <div className="flex items-center justify-around py-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all',
                    isActive ? 'text-cyan-400' : 'text-zinc-600 hover:text-zinc-400'
                  )
                }
              >
                <Icon size={19} />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
