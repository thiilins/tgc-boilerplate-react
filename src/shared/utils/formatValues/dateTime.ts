export default (
  value: string | number,
  locale = 'pt-BR',
  options?: Intl.DateTimeFormatOptions
) => {
  const config = new Intl.DateTimeFormat(locale, { ...options })
  const newDate = new Date(String(value))
  return config.format(newDate)
}
