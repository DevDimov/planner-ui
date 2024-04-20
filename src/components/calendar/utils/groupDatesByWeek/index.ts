import { groupBy } from 'lodash'
import getWeek from 'date-fns/getWeek'

export const groupDatesByWeek = (dates: Date[]) => {
  return groupBy(dates, (day) => getWeek(day, { weekStartsOn: 1 }))
}
