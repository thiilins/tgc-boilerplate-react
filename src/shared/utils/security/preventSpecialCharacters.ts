const preventSpecialCharacters = (value: string) => {
  return value.replace(/[!@#$%^&*]/g, '').replace(/\s/g, '')
}

export default preventSpecialCharacters
