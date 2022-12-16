import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '@services/api'
import { IUser, IUserLoginData } from '@features/Auth/types'
interface IAuthProviderProps {
  children: React.ReactNode
}

interface IAuthState {
  token: string
  user: IUser
}

interface IAuthContextState {
  token: string
  user: IUser
  signIn: ({ email, password }: IUserLoginData) => Promise<void>
  userLogged: () => boolean
  signOut(): void
  updateUser(user: IUser, token?: string): void
  validateToken(): void
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState)
const prefix = import.meta.env.VITE_STORAGE_PREFIX
const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem(`@${prefix}:Token`)
    const user = localStorage.getItem(`@${prefix}:User`)
    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }
    return {} as IAuthState
  })
  const signOut = useCallback(() => {
    localStorage.removeItem('@CB:Token')
    localStorage.removeItem('@CB:User')
  }, [])

  const validateToken = useCallback(async () => {
    const response = await api.post('auth/token', {
      token: data.token
    })

    if (!response.data.success) {
      signOut()
    }
  }, [data.token, signOut])
  const signIn = useCallback(async ({ email, password }: IUserLoginData) => {
    const response = await api.post('/sessions', { email, password })
    const { token, user } = response.data
    setData({ user, token })
    localStorage.setItem('@CB:Token', token)
    localStorage.setItem('@CB:User', JSON.stringify(user))
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }, [])
  const userLogged = useCallback(() => {
    const token = localStorage.getItem('@CB:Token')
    if (token) {
      return true
    }
    return false
  }, [])

  const updateUser = useCallback(
    (newUser: IUser, token?: string) => {
      const userStr = localStorage.getItem('@CB:user')
      let user: IUser = {} as IUser
      if (userStr) user = JSON.parse(userStr)
      const updatedUser = { ...user, ...newUser }
      localStorage.setItem('@CB:user', JSON.stringify(updatedUser))
      if (token) {
        localStorage.setItem('@CB:token', token)
        api.defaults.headers.common.authorization = `Bearer ${token}`
        setData({
          token: token,
          user: updatedUser
        })
      } else {
        setData({
          token: data.token,
          user: updatedUser
        })
      }
    },
    [setData, data.token]
  )
  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        updateUser,
        signIn,
        validateToken,
        userLogged,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextState {
  const context = useContext(AuthContext)
  return context
}
export { useAuth, AuthProvider }
