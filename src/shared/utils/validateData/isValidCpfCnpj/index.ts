import isValidCnpj from './validateCNPJ'
import isValidCpf from './validateCPF'

export default (value: string) => {
  value = value.replace(/[^\d]+/g, '')
  if (value.length === 14) return isValidCnpj(value)
  if (value.length === 11) return isValidCpf(value)
  return false
}
export { isValidCnpj, isValidCpf }
