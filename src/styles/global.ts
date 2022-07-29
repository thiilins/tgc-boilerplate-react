import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`  
${() => css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  a {
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }
`}
   `
