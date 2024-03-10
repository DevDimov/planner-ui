import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { groupBy } from 'lodash'
import { EventEntryData } from '../../../../models/eventEntry'

export const groupOccurrencesByWeek = (data: EventEntryData[]) => {
  return groupBy(data, (entry) => {
    const date = parseISO(entry.startDateTime)
    return getWeek(date, { weekStartsOn: 1 })
  })
}
