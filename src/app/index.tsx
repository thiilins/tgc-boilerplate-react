import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppRoutes from './routes/app.routes'
import GlobalStyles from './styles/global'
import defaultTheme from './styles/themes/default'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <GlobalStyles />
        <AppRoutes />
      </React.StrictMode>
    </ThemeProvider>
  )
}

export default App
