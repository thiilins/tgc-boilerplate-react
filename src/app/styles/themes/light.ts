import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const light: DefaultTheme = {
  ...defaultTheme,
  title: 'light',
  colors: {
    ...defaultTheme.colors,
    primary: '#00181d',
    secondary: '#002a2e',
    primaryText: '#fdfdfd',
    secondaryText: '#aecfd2',
    primaryNegative: '#DCDCDC',
    secondaryNegative: '#FFFFFF',
    primaryTextNegative: '#000',
    secondaryTextNegative: '#333333'
  }
}
