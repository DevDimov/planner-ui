import getWeek from 'date-fns/getWeek'

export const getWeeksForCalendarMonth = (orderedDates: Date[]) => {
  const result: number[] = []
  let index = 0
  while (index < orderedDates.length) {
    result.push(getWeek(orderedDates[index]))
    index = index + 7
  }

  return result
}
