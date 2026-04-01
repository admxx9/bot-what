import { useState, useCallback } from 'react'
import { login } from '../lib/api'

export function useAuth() {
  const [phone,    setPhone]    = useState<string | null>(() => localStorage.getItem('ba_phone'))
  const [password, setPassword] = useState<string | null>(() => localStorage.getItem('ba_password'))

  const isAuthenticated = !!phone

  const signIn = useCallback(async (rawPhone: string, rawPassword: string) => {
    const data = await login(rawPhone, rawPassword)
    if (data.success) {
      const digits = rawPhone.replace(/\D/g, '')
      localStorage.setItem('ba_phone', digits)
      localStorage.setItem('ba_password', rawPassword)
      setPhone(digits)
      setPassword(rawPassword)
      return data.user
    }
    throw new Error('Falha no login')
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('ba_phone')
    localStorage.removeItem('ba_password')
    setPhone(null)
    setPassword(null)
  }, [])

  return { phone, password, isAuthenticated, signIn, signOut }
}
