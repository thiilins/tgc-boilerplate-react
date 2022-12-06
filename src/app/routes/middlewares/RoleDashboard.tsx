import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

interface IRequireAuth {
  Element: React.FC
}
const initialRoutes = {
  any: '/'
}

const RoleDashboard = () => {
  const activeRole = 'any'
  const { userLogged /*activeRole*/ } = useAuth()
  const user = userLogged()
  if (!user || !activeRole) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={initialRoutes[activeRole]} replace />
}
export default RoleDashboard
