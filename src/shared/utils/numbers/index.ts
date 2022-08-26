import formatAll from './format/formatAll'
import formatCurrency from './format/formatCurrency'
import { formatFloatNumber, formatFloatString } from './format/formatFloat'
import formatPercentage from './format/formatPercentage'
import { telMask, cnpjMask, zipCodeMask } from './masks'
import onlyNumbers from './onlyNumbers'
import onlyNumbersAndDot from './onlyNumbersAndDot'
export {
  formatPercentage,
  onlyNumbersAndDot,
  onlyNumbers,
  telMask,
  cnpjMask,
  zipCodeMask,
  formatAll,
  formatCurrency,
  formatFloatNumber,
  formatFloatString
}
