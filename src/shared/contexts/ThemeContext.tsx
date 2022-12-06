import React, { createContext, useContext, useCallback } from 'react'

import { dark } from '@app/styles/themes/dark'
import { light } from '@app/styles/themes/light'
import { DefaultTheme as ITheme } from 'styled-components'
import usePersistedState from '@hooks/usePersistedState'
import { ThemeProvider as DefaultTheme } from 'styled-components'
interface IThemeContext {
  toggleTheme(): void
  title: string
}

type IThemeState = 'light' | 'dark'
const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
interface IThemeProvider {
  children: React.ReactNode
}
const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<ITheme>('defaultTheme', light)
  const toggleTheme = useCallback(() => {
    if (theme.title === 'light') {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }, [setTheme, theme])

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        title: theme.title
      }}
    >
      <DefaultTheme theme={theme}>{children}</DefaultTheme>
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
