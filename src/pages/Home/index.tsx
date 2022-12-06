import reactLogo from '@assets/react.svg'
import React, { useState } from 'react'
import useTranslation from '@hooks/useTranslation'
import ToggleTheme from '@/app/components/Layouts/ToggleTheme'
import { Container } from './styles'
const Home = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)
  return (
    <Container>
      <ToggleTheme />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p dangerouslySetInnerHTML={{ __html: t('home.edit_code') }}></p>
      </div>
      <p className="read-the-docs">{t('home.read_docs')}</p>
    </Container>
  )
}

export default Home
