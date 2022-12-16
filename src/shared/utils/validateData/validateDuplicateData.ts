export default <T>(data: T[], uniqueKey: keyof T): T[] => {
  const setData = new Set()
  const nData = data.filter(item => {
    const duplicatedItem = setData.has(item[uniqueKey])
    setData.add(item[uniqueKey])
    return !duplicatedItem
  })

  return nData
}
