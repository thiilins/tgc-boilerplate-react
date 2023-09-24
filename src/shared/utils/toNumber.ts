// Ex: "130,25" => 130.25
const toNumber = (str: string) => {
  return +str.replace(',', '.') || 0
}

export default toNumber
