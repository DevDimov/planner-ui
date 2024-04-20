import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { EventEntryData } from '../../../../models/eventEntry'
import getYear from 'date-fns/getYear'

export type EntriesByWeek = Record<string, EventEntryData[]>

export const groupEntriesByWeekToYearEnd = (
  entries: EventEntryData[],
  year: string
) => {
  let result: EntriesByWeek = {}

  if (!year) {
    return result
  }

  const referenceYear = parseInt(year)
  const weeksInYear = getWeek(new Date(referenceYear, 11, 28), {
    weekStartsOn: 1,
  })

  entries.forEach((entry) => {
    const startDate = parseISO(entry.startDateTime)
    const endDate = parseISO(entry.endDateTime)
    const startWeek = getWeek(startDate, { weekStartsOn: 1 })
    const endWeek = getWeek(endDate, { weekStartsOn: 1 })

    let incrementedWeek = startWeek

    // 'startWeek = endWeek and both are in the same year'
    if (getYear(startDate) === referenceYear) {
      if (startWeek === endWeek && getYear(startDate) === getYear(endDate)) {
        if (!(incrementedWeek in result)) {
          result[incrementedWeek] = []
        }

        result[incrementedWeek].push(entry)
        return
      }

      // 'startWeek > endWeek which is in a later year so increment till end of year'
      if (startWeek >= endWeek && getYear(startDate) < getYear(endDate)) {
        while (incrementedWeek <= weeksInYear) {
          if (!(incrementedWeek in result)) {
            result[incrementedWeek] = []
          }

          result[incrementedWeek].push(entry)
          incrementedWeek++
        }
        return
      }

      // 'startWeek < endWeek and both are in same year'
      if (startWeek < endWeek && getYear(startDate) === getYear(endDate)) {
        while (incrementedWeek <= endWeek) {
          if (!(incrementedWeek in result)) {
            result[incrementedWeek] = []
          }

          result[incrementedWeek].push(entry)
          incrementedWeek++
        }
        return
      }

      // startWeek < endWeek and both are in different years
      if (startWeek < endWeek && getYear(startDate) < getYear(endDate)) {
        while (incrementedWeek <= weeksInYear) {
          if (!(incrementedWeek in result)) {
            result[incrementedWeek] = []
          }

          result[incrementedWeek].push(entry)
          incrementedWeek++
        }
        return
      }
    }

    // 'startDate is before the reference year and the endDate is after the reference year'
    if (
      getYear(startDate) < referenceYear &&
      referenceYear < getYear(endDate)
    ) {
      incrementedWeek = 1
      while (incrementedWeek <= weeksInYear) {
        if (!(incrementedWeek in result)) {
          result[incrementedWeek] = []
        }

        result[incrementedWeek].push(entry)
        incrementedWeek++
      }
    }

    // 'startWeek > endWeek but in previous year so start count from beginning of year to date end'
    if (
      getYear(startDate) < referenceYear &&
      referenceYear === getYear(endDate)
    ) {
      incrementedWeek = 1
      while (incrementedWeek <= endWeek) {
        if (!(incrementedWeek in result)) {
          result[incrementedWeek] = []
        }

        result[incrementedWeek].push(entry)
        incrementedWeek++
      }
    }
  })

  return result
}
