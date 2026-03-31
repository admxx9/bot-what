import { useState, useCallback } from 'react'
import { login } from '../lib/api'

export function useAuth() {
  const [phone, setPhone] = useState<string | null>(() => localStorage.getItem('ba_phone'))

  const isAuthenticated = !!phone

  const signIn = useCallback(async (rawPhone: string) => {
    const data = await login(rawPhone)
    if (data.success) {
      localStorage.setItem('ba_phone', rawPhone.replace(/\D/g, ''))
      setPhone(rawPhone.replace(/\D/g, ''))
      return data.user
    }
    throw new Error('Falha no login')
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('ba_phone')
    setPhone(null)
  }, [])

  return { phone, isAuthenticated, signIn, signOut }
}
