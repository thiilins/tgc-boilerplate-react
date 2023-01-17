import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`  
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    &:disabled {
      text-decoration: none;
      pointer-events: none;
      cursor: default;
      user-select: none;
    }
  }
  strong {
    font-weight: ${theme.fonts.weight.bold};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  html {
    font-family: ${theme.fonts.family};
  }
  body {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.primary}30;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary};
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }
`}
   `
