export default (value: string) => {
  value = value.replace(/[^\d]+/g, '')

  const invalidCPFData = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  // Elimina CPFs invalidos conhecidos
  if (invalidCPFData.includes(value) || value === '' || value.length !== 11) {
    return false
  }
  // Valida 1o digito
  let add = 0
  for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(value.charAt(9))) return false
  // Valida 2o digito
  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(value.charAt(10))) return false
  return true
}
