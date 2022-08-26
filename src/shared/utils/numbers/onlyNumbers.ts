const onlyNumbers = (value: string) => {
  return value.replace(/[^0-9]/g, '')
}

export default onlyNumbers
