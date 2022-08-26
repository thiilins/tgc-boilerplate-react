import isValidCnpj from './validateCNPJ'
import isValidCpf from './validateCPF'

const validateCNPJOrCPF = (data: string) => {
  data = data.replace(/[^\d]+/g, '')
  if (data.length === 14) return isValidCnpj(data)
  if (data.length === 11) return isValidCpf(data)
  return false
}
export { isValidCnpj, isValidCpf }
export default validateCNPJOrCPF
