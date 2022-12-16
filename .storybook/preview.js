import { ThemeProvider } from 'styled-components'
import { dark } from '@/styles/themes/dark'
import { light } from '@/styles/themes/light'
import GlobalStyles from '@/styles/global'
export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={light || dark}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
