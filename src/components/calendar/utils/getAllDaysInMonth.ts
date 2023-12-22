import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfMonth from 'date-fns/endOfMonth'
import endOfWeek from 'date-fns/endOfWeek'
import startOfMonth from 'date-fns/startOfMonth'
import startOfWeek from 'date-fns/startOfWeek'

export const getAllDaysInMonth = (
  date: Date,
  options: { locale?: Locale; weekStartsOn?: 0 | 1 | 2 | undefined } = {
    weekStartsOn: 1,
  }
) => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), options),
    end: endOfWeek(endOfMonth(date), options),
  })
}
