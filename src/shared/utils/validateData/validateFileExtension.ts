export default (fileName: string, extensions: string[]) => {
  return new RegExp(
    '(' + extensions.join('|').replace(/\./g, '\\.') + ')$'
  ).test(fileName)
}
