import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

const convertJSONToExcel = (content: object[], name: string) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'

  const ws = XLSX.utils.json_to_sheet(content)

  const wb = { Sheets: { data: ws }, SheetNames: ['data'] }

  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

  const data = new Blob([excelBuffer], { type: fileType })

  FileSaver.saveAs(data, `${name}.xlsx`)
}
export default convertJSONToExcel
