export default (phone: string) => {
  const value = phone.replace(/[^\d]/g, '')
  return phone?.length === 8
    ? value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    : value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}
