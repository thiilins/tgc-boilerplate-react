export default (value: string) => {
  const data = value.replace(/[^\d]/g, '')
  return value?.length === 11
    ? data.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    : data.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}
