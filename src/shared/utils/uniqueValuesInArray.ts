/**
 * Returns array with unique values in params arr
 *
 * Ex: [1, 1, 3, 4, 4, 5] => [1, 2, 3, 4, 5]
 *
 * or
 *
 * if key = "id"
 * Ex: [{id:1}, {id:1}, {id:3}, {id:4}, {id:4}, {id:5}] => [1, 2, 3, 4, 5]
 */
const uniqueValuesInArray = (arr: any[], key?: string): any[] => {
  return Array.from(new Set(arr.map((v: any) => (key ? v[key] : v))))
}

export default uniqueValuesInArray
