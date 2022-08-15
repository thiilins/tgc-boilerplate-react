import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App'
import GlobalStyles from './styles/global'
import defaultTheme from './styles/themes/default'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
