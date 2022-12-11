export default (date: string, ageVerify = 18): boolean => {
  const nDate = new Date(date)

  const today = new Date()
  const ofAge = new Date(
    nDate.getUTCFullYear() + ageVerify,
    nDate.getUTCMonth(),
    nDate.getUTCDate()
  )

  return ofAge <= today
}
