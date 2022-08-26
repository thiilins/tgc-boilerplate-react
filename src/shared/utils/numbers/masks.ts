const zipCodeMask = (value: string): string => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
}

const telMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1)$2')
    .replace(/(\d)(\d{4})$/, '$1-$2')
}

const cnpjMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export { zipCodeMask, telMask, cnpjMask }
