export const formatFloatNumber = (value: string | number) => {
  return Number(value.toString().replace(',', '.'))
}
export const formatFloatString = (value: string | number) => {
  return value.toString().replace(',', '.')
}
