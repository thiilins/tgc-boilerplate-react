import React, { useEffect, useState } from 'react'
import { useAuth } from '@contexts/AuthContext'
import api from '@services/api'

interface IPermissionComponentProps {
  roles: string[]
  children: React.ReactNode
}

const PermissionComponent: React.FC<IPermissionComponentProps> = ({
  roles,
  children
}) => {
  const [hasPermissions, setHasPermissions] = useState<boolean>()
  // const {} = useAuth()
  const user = { role: 'admin' }
  useEffect(() => {
    function loadRoles() {
      const findRole = roles.includes(user.role)
      setHasPermissions(findRole)
    }

    loadRoles()
  }, [user.role])

  return <>{hasPermissions && children}</>
}

export default PermissionComponent
