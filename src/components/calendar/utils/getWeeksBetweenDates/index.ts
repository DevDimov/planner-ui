import getISOWeeksInYear from 'date-fns/getISOWeeksInYear'
import getWeek from 'date-fns/getWeek'
import getYear from 'date-fns/getYear'

// TO-DO
export const getWeeksBetweenDates = (startDate: Date, endDate: Date) => {
  const result: number[] = []
  const startDateWeek = getWeek(startDate, { weekStartsOn: 1 })
  const endDateWeek = getWeek(endDate, { weekStartsOn: 1 })
  const startYear = getYear(startDate)
  const endYear = getYear(endDate)

  if (startDateWeek === endDateWeek) {
    if (startYear === endYear) {
      result.push(startDateWeek)
      return result
    }

    if (startYear < endYear) {
      let incrementedYear = startYear
      while (incrementedYear < endYear) {
        const lastWeekForIncrementedYear = getISOWeeksInYear(incrementedYear)
        let incrementedStart = startDateWeek
        while (incrementedStart <= lastWeekForIncrementedYear) {
          result.push(incrementedStart)
          incrementedStart++
        }
        incrementedYear++
      }

      if (incrementedYear === endYear) {
        let incrementedStartWeek = 1
        while (incrementedStartWeek <= endDateWeek) {
          result.push(incrementedStartWeek)
          incrementedStartWeek++
        }
      }

      return result
    }
  }

  if (startDateWeek < endDateWeek) {
    if (startYear === endYear) {
      let incrementedWeek = startDateWeek
      while (incrementedWeek <= endDateWeek) {
        result.push(incrementedWeek)
        incrementedWeek++
      }
      return result
    }
  }

  if (startDateWeek > endDateWeek) {
    // TO-DO
    if (startYear === endYear) {
      return result
    }
  }
}
