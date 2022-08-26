import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './middlewares/middleware'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth Element={Home} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
