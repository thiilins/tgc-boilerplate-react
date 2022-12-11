export default (value: string | number) => {
  return String(value).replace(',', '.')
}
