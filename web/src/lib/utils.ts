import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatarTempo(expiraEm: string): string {
  const diff = new Date(expiraEm).getTime() - Date.now()
  if (diff <= 0) return 'Expirado'
  const dias  = Math.floor(diff / 86400000)
  const horas = Math.floor((diff % 86400000) / 3600000)
  if (dias > 0) return `${dias}d ${horas}h`
  return `${horas}h restantes`
}

export function formatarData(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  })
}

export function formatarValor(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
