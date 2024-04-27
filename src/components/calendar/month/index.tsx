import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek from '../week'
import WeekdayNames from '../weekdayNames'
import { EventEntryData } from '../../../models/eventEntry'
import { groupEntriesByYearAndWeek } from '../utils/groupEntriesByYearAndWeek'
import getYear from 'date-fns/getYear'
import { useMemo } from 'react'
import { getWeeksForCalendarMonth } from '../utils/getWeeksForCalendarMonth'

export type CalendarMonthProps = {
  month: Date
  entries: EventEntryData[]
}

export default function CalendarMonth({ month, entries }: CalendarMonthProps) {
  const currentYear = getYear(month)
  const entriesByYearAndWeek = useMemo(() => {
    return groupEntriesByYearAndWeek(entries)
  }, [entries])
  const allDaysInMonth = getAllDaysInMonth(month)
  const datesByWeekForSelectedMonth = groupDatesByWeek(allDaysInMonth)
  const weeks = getWeeksForCalendarMonth(allDaysInMonth)

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full rounded border-blue-100 bg-blue-50 p-1.5 md:border-2 md:p-4">
        {weeks.map((weekNumber) => {
          let currentWeekEntries: EventEntryData[] = []
          if (
            entriesByYearAndWeek.hasOwnProperty(currentYear) &&
            entriesByYearAndWeek[currentYear].hasOwnProperty(weekNumber)
          ) {
            currentWeekEntries = entriesByYearAndWeek[currentYear][weekNumber]
          }
          return (
            <CalendarWeek
              key={weekNumber}
              days={datesByWeekForSelectedMonth[weekNumber]}
              entries={currentWeekEntries}
            />
          )
        })}
      </div>
    </div>
  )
}
