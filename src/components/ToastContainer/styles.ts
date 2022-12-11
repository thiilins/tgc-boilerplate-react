import 'react-toastify/dist/ReactToastify.css'
import styled, { css } from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const Toast = styled(ToastContainer)`
  ${({ theme }) => css`
    .Toastify__toast--info {
      background: ${theme.colors.blue};
    }
    .Toastify__toast--success {
      background: ${theme.colors.green};
    }
    .Toastify__toast--warning {
      background: ${theme.colors.yellow};
    }
    .Toastify__toast--error {
      background: ${theme.colors.red};
    }
  `}
`
