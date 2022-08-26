import React from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

const Routes = () => {
  const { userLogged } = useAuth()

  const user = userLogged()
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}

export default Routes
