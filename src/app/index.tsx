import React from 'react'
import { ThemeProvider } from '@contexts/ThemeContext'
import { AuthProvider } from '@contexts/AuthContext'
import Routes from '@app/routes'
import GlobalStyles from '@styles/global'
import { light } from '@styles/themes/light'
import { dark } from '@styles/themes/dark'
import usePersistedState from '@hooks/usePersistedState'
import ToastContainer from '@components/ToastContainer'
import '@app/configs/i18n'
function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <GlobalStyles />
        <ToastContainer />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </React.StrictMode>
    </ThemeProvider>
  )
}

export default App
