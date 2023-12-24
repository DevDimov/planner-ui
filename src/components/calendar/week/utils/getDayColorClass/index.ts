import isSameMonth from 'date-fns/isSameMonth'
import isWeekend from 'date-fns/isWeekend'

/**
 * Get color class based on whether dateLeft is in the same month as dateRight, and whether it is a weekend.
 * @param dateLeft
 * @param dateRight
 * @returns
 */
export const getDayColorClass = (dateLeft: Date, dateRight: Date) => {
  const isCurrentMonth = isSameMonth(dateLeft, dateRight)
  const dateIsWeekend = isWeekend(dateLeft)

  if (isCurrentMonth && !dateIsWeekend) return 'text-blue-900'
  if (isCurrentMonth && dateIsWeekend) return 'text-blue-400'

  return 'text-blue-300'
}
