import moment from 'moment'

const lastDayOfMonth = (date: string) => {
  return moment(date).endOf('month').format('DD') || ''
}

export default lastDayOfMonth
