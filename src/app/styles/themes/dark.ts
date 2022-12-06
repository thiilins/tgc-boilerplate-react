import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
  ...defaultTheme,
  title: 'dark',
  colors: {
    ...defaultTheme.colors,
    primary: '#DCDCDC',
    secondary: '#FFFFFF',
    primaryText: '#000',
    secondaryText: '#333333',
    primaryNegative: '#00181d',
    secondaryNegative: '#002a2e',
    primaryTextNegative: '#fdfdfd',
    secondaryTextNegative: '#aecfd2'
  }
}
