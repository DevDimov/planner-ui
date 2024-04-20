import getYear from 'date-fns/getYear'
import parseISO from 'date-fns/parseISO'
import { EventEntryData } from '../../../../models/eventEntry'

export type EntriesByYear = Record<string, EventEntryData[]>

export const groupEntriesByYear = (entries: EventEntryData[]) => {
  let result: EntriesByYear = {}

  entries.forEach((entry) => {
    const startDate = parseISO(entry.startDateTime)
    const endDate = parseISO(entry.endDateTime)
    const startYear = getYear(startDate)
    const endYear = getYear(endDate)

    let incrementedYear = startYear

    while (incrementedYear <= endYear) {
      if (!(incrementedYear in result)) {
        result[incrementedYear] = []
      }

      result[incrementedYear].push(entry)
      incrementedYear++
    }
  })

  return result
}
