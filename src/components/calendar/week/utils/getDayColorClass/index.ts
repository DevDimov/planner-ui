import isSameMonth from 'date-fns/isSameMonth'
import isToday from 'date-fns/isToday'
import isWeekend from 'date-fns/isWeekend'

/**
 * Get color class based on whether dateLeft is in the same month as dateRight, and whether it is a weekend.
 * @param dateLeft
 * @param dateRight
 * @returns
 */
export const getDayColorClass = (dateLeft: Date, dateRight: Date) => {
  if (isToday(dateLeft)) return 'text-red-600'

  const isCurrentMonth = isSameMonth(dateLeft, dateRight)
  const dateIsWeekend = isWeekend(dateLeft)

  if (isCurrentMonth && !dateIsWeekend) return 'text-blue-900'
  if (isCurrentMonth && dateIsWeekend) return 'text-blue-400'

  return 'text-blue-300'
}
