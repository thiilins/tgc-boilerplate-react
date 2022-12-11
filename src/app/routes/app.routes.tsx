import Home from '@pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
