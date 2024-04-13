import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { EventEntryData } from '../../../../models/eventEntry'

export const groupEntriesByWeek = (entries: EventEntryData[]) => {
  let result: Record<string, EventEntryData[]> = {}

  entries.forEach((entry) => {
    const startDate = parseISO(entry.startDateTime)
    const endDate = parseISO(entry.endDateTime)
    const startWeek = getWeek(startDate, { weekStartsOn: 1 })
    const endWeek = getWeek(endDate, { weekStartsOn: 1 })

    let incrementedWeek = startWeek

    while (incrementedWeek <= endWeek) {
      if (!(incrementedWeek in result)) {
        result[incrementedWeek] = []
      }

      result[incrementedWeek].push(entry)
      incrementedWeek++
    }
  })

  return result
}
