import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
