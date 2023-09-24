const moveItemInArray = (arr: any[], fromIndex: number, toIndex: number) => {
  const clone = [...arr]

  const element = clone[fromIndex]

  clone.splice(fromIndex, 1)
  clone.splice(toIndex, 0, element)

  return clone
}

export default moveItemInArray
