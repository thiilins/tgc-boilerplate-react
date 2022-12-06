import { showToast } from '@components/ToastContainer'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
if (!import.meta.env.VITE_URL) {
  throw new Error('DEV Alert: You must inform API Base URL in .env file')
}

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
  timeout: 60 * 1000 // Timeout
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { t } = useTranslation()
    if (error.response.status === 500) {
      showToast('error', t('Ocorreu um erro ao processar sua solicitação'))
    }
    return Promise.reject(error)
  }
)
export default api
