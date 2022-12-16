export default (data: string[], sliceSize = 2) => {
  const values =
    data.length > sliceSize
      ? data.slice(0, sliceSize)?.map(item => String(item))
      : data.map(item => String(item))
  return data.length > sliceSize
    ? [...values, `+ ${data.length - sliceSize}`]
    : values
}
