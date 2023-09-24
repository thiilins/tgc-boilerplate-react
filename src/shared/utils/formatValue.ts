import _ from 'lodash'

// JS .toFixed() sucks
const _toFixed = (num: any, fixed: any) => {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
  return num.toString().match(re)?.[0]
}

const formatValue = (val: string | number, cases = 2) => {
  if (!+val) return ''

  // Don't complain
  let newVal = (+_toFixed(+val, cases) + '').replace('.', ',')

  // Add zeroes to int value based on cases variable
  // Ex: Formats 3 to 3,00 if cases = 2
  if (!newVal.includes(',')) {
    newVal += ','
    _.times(cases, () => (newVal += 0))
  }

  // Add zeroes to float value based on cases variable
  // Ex: Formats 142,3 to 142,30 if cases = 2
  if (newVal.includes(',')) {
    const newValSplit = newVal.split(',')

    if (newValSplit[1].length < cases) {
      const zeros = '0'.repeat(cases - newValSplit[1].length)
      newVal = newValSplit[0] + ',' + newValSplit[1] + zeros
    }
  }

  return newVal
}

export default formatValue
