const validateOfAge = (date: string) => {
  const nDate = new Date(date)

  const today = new Date()
  const ofAge = new Date(
    nDate.getUTCFullYear() + 18,
    nDate.getUTCMonth(),
    nDate.getUTCDate()
  )

  return ofAge <= today
}
export default validateOfAge
