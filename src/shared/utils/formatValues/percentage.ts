export default (value: string | number) => {
  const config = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })
  return config.format(Number(value) / 100)
}

