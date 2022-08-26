const formatDate = (
  value: string | number,
  locale = 'pt-BR',
  options?: Intl.DateTimeFormatOptions
) => {
  const config = new Intl.DateTimeFormat(locale, { ...options })
  const newDate = new Date(`${value.toString().slice(0, 10)} 00:00:00`)
  return config.format(newDate)
}
export default formatDate
