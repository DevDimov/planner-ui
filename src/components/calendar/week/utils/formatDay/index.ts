import format from 'date-fns/format'
import getDate from 'date-fns/getDate'

export const formatDay = (date: Date) => {
  return getDate(date) === 1 ? format(date, 'd LLL') : format(date, 'd')
}
