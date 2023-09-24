/**
 * Ex:
 *
 * Initial value:
 *
 * const queryObj = {
 *   id: 1,
 *   date: "2023-05-05",
 *   name: "Test"
 * }
 *
 * Return value:
 *
 * `?id=1&date=2023-05-05&name=Test`
 */

interface IQueryObj {
  [key: string]: string | number
}

const queryParams = (queryObj: IQueryObj): string => {
  const queryObjKeys = Object.keys(queryObj)

  if (queryObjKeys.length === 0) return ''

  let queryStr = ''

  queryStr += `?${queryObjKeys[0]}=${queryObj[queryObjKeys[0]]}`

  queryObjKeys.shift()
  queryObjKeys.forEach(key => (queryStr += `&${key}=${queryObj[key]}`))

  return queryStr
}

export default queryParams
