import { ThemeProvider } from 'styled-components'
import React from 'react'
import { dark } from '../src/styles/themes/dark'
import GlobalStyles from '../src/styles/global'
export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
