import isSameMonth from 'date-fns/isSameMonth'
import isWeekend from 'date-fns/isWeekend'

export const getDayColorClass = (date: Date) => {
  const isCurrentMonth = isSameMonth(date, new Date(2023, 11, 1))
  const dateIsWeekend = isWeekend(date)

  if (isCurrentMonth && !dateIsWeekend) return 'text-blue-900'
  if (isCurrentMonth && dateIsWeekend) return 'text-blue-400'
  if (!isCurrentMonth) return 'text-blue-300'
}
