export default (value: string) => {
  value = value.replace(/[^\d]+/g, '')

  const invalidCNPJData = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
  ]
  // Elimina CNPJs inválidos conhecidos
  if (invalidCNPJData.includes(value) || value.length !== 14 || value === '') {
    return false
  }

  // Valida DVs
  let tamanho = value.length - 2
  let numeros = value.substring(0, tamanho)
  const digitos = value.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += +numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== +digitos.charAt(0)) return false

  tamanho = tamanho + 1
  numeros = value.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += +numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado === +digitos.charAt(1)) return false

  return true
}
