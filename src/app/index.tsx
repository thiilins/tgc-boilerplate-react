import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '@contexts/AuthContext'
import Routes from '@app/routes'
import GlobalStyles from '@styles/global'
import defaultTheme from '@styles/themes'
import './App.css'
import '@app/i18n'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </React.StrictMode>
    </ThemeProvider>
  )
}

export default App
