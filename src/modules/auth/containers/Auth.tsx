import { ReactNode } from 'react'
import { LoadingOverlay } from '@mantine/core'
import { clearSession } from 'services'

import { AuthContext } from '../context/auth'
import { useProfile } from '../hooks'
import { IEntity } from '../types'

interface AuthProps {
  children: ReactNode
}

const Auth = ({ children }: AuthProps) => {
  const [{ isLoading, user }, setState] = useProfile()

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />

  const login = (user: IEntity.User) => setState(p => ({ ...p, user }))
  const logout = () => {
    setState(p => ({ ...p, user: null }))
    clearSession()
  }

  const value = { user, isAuthenticated: !!user, methods: { login, logout } }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default Auth
