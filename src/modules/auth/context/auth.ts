import { createContext, useContext } from 'react'

import { IContext } from '../types'

export const AuthContext = createContext<IContext.Auth>({} as IContext.Auth)

AuthContext.displayName = 'AuthContext'

export const useAuth = () => useContext(AuthContext)
