const compareDate = (
  type: 'min' | 'max' | 'minMax',
  value: string,
  { min = '1500-01-01', max = '3000-01-01' }
) => {
  const dateMin = new Date(`${min} 00:00:00`)
  const dateMax = new Date(`${max} 00:00:00`)
  const date = new Date(`${value} 00:00:00`)
  const isMin = date < dateMin
  const isMax = date > dateMax
  switch (type) {
    case 'min':
      return isMin
        ? { date: min, error: true, type: 'min' }
        : { date: value, error: false, type: '' }
    case 'max':
      return isMax
        ? { date: max, error: true, type: 'max' }
        : { date: value, error: false, type: '' }
    case 'minMax':
      return isMin || isMax
        ? isMin
          ? { date: min, error: true, type: 'min' }
          : { date: max, error: true, type: 'max' }
        : { date: value, error: false, type: '' }
  }
}
export default compareDate
