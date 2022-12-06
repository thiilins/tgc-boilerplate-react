export default  (value: string|number): string => {
  return String(value).replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
}