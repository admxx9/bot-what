import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        green:  'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
        yellow: 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
        red:    'bg-red-500/15 text-red-400 border border-red-500/20',
        cyan:   'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20',
        purple: 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20',
        zinc:   'bg-zinc-700/50 text-zinc-400 border border-zinc-700'
      }
    },
    defaultVariants: { variant: 'zinc' }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
