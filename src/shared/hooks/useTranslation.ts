import { useTranslation as useTranslationHook } from 'react-i18next'
interface IResponse {
  t: (value: string) => string
}
export default (): IResponse => {
  const { t: translate } = useTranslationHook()
  const t = (value: string) => {
    return translate(value) as string
  }
  return { t }
}
