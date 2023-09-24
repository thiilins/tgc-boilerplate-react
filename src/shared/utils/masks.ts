import React from 'react'

export const number = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  e.currentTarget.value = value
  return e.currentTarget.value
}

export const cpf = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  e.currentTarget.value = value
  return e.currentTarget.value
}

export const cnpj = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 18
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5')
  e.currentTarget.value = value
  return e.currentTarget.value
}

export const date = (value: string) => {
  const v = value.replace(/\D/g, '').slice(0, 8)
  if (v.length >= 5) return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`
  if (v.length >= 3) return `${v.slice(0, 2)}/${v.slice(2)}`
  return v
}

export const money = (value: string) => {
  const v = value.replace(/\D/g, '')
  if (v.length > 0 && v.length <= 2) return '.' + v
  if (v.length > 2) {
    return (+`${v.slice(0, v.length - 2)}.${v.slice(v.length - 2)}`).toFixed(2)
  }
  return v
}

export const moneyComma = (value: string, cases = 2) => {
  const v = value.replace(/\D/g, '')

  if (cases === 0) return v

  if (v.length > 0 && v.length <= cases) return ',' + v

  if (v.length > cases) {
    return (+`${v.slice(0, v.length - cases)}.${v.slice(v.length - cases)}`)
      .toFixed(cases)
      .replace('.', ',')
  }

  return v
}

export const value = (value: string) => {
  value += ''
  const x = value.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? ',' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2')
  }
  return x1 + x2
}
