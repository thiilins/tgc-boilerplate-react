import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'shared/contexts/AuthContext'
interface IRequireAuth {
  Element: React.FC
  acceptedRoles?: string[]
}
function RequireAuth({ Element, acceptedRoles }: IRequireAuth) {
  const { userLogged } = useAuth()
  const user = userLogged() || true
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <Element />
}
export default RequireAuth
