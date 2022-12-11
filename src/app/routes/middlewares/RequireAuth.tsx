import React, { useCallback } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'

import { toTitleCase } from '@utils/text'
interface IRequireAuth {
  Element: React.FC
  // roles: any[]
  title?: string
}
function RequireAuth({ Element, title = '' }: IRequireAuth) {
  const { userLogged /*activeRole*/ } = useAuth()
  // const user = userLogged()
  const user = true

  if (!user) {
    return <Navigate to="/login" replace />
  }

  //IF HAVE ROLE TO ACCESS
  // if (roles && !roles.includes('')) {
  //   return <Navigate to="/" replace />
  // }
  document.title = `${title} +  | ${import.meta.env.VITE_APP_NAME}`
  return <Element />
}
export default RequireAuth
