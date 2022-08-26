const countDaysInterval = (dateInitial: string, dateFinal: string) => {
  if (dateInitial === '' || dateFinal === '') {
    return '0'
  }
  const now = new Date(dateInitial)
  const past = new Date(dateFinal)
  const diff = Math.abs(now.getTime() - past.getTime())
  return Math.ceil(diff / (1000 * 60 * 60 * 24)).toString()
}

export default countDaysInterval
