import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primaryNegative};
    .logo {
      height: 6rem;
      padding: 1.5em;
      will-change: filter;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.react:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      a:nth-of-type(2) .logo {
        animation: logo-spin infinite 20s linear;
      }
    }

    .card {
      padding: 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      button {
        padding: 10px 20px;
        border: 0;
        background-color: ${theme.colors.secondaryNegative};
        border-radius: 20px;
        cursor: pointer;
        color: ${theme.colors.primaryTextNegative};
        &:hover {
          background-color: ${theme.colors.primaryNegative};
        }
      }
    }

    .read-the-docs {
      color: #888;
    }
  `}
`
