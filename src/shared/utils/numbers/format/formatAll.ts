import formatCurrency from './formatCurrency'
import formatPercentage from './formatPercentage'
type ValueTypeProps = 'percentage' | 'currency' | 'default'

const formatAll = (valueType: ValueTypeProps, value: string | number) => {
  if (value === '-' || value === '0' || value === 0) {
    return '-'
  }
  if (valueType === 'percentage') {
    return formatPercentage(value)
  } else if (valueType === 'currency') {
    return formatCurrency(value)
  }
  return value.toString().replace(/\D/g, '')
}
export default formatAll
