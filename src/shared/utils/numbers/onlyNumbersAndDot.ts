const onlyNumbersAndDot = (value: string) => {
  return value.replace(/[^\d.]|\.(?=.*\.)/g, '')
}

export default onlyNumbersAndDot
