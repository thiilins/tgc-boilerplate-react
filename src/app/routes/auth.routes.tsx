import React from 'react'
import Home from '@pages/Home'
import { Routes, Route } from 'react-router-dom'
const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default AuthRoutes
