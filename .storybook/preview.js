import React from 'react'
import { ThemeProvider } from 'styled-components'
import { dark } from '@app/styles/themes/dark'
import { light } from '@app/styles/themes/light'
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
