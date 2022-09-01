import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const languages = {
  name: 'Português',
  alias: 'pt-BR',
  flag: 'br'
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })
const t = (value: string) => {
  const { t } = useTranslation()
  return t(value)
}

export { t, useTranslation }
export default i18n
