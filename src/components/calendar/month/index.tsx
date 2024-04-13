import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek from '../week'
import WeekdayNames from '../weekdayNames'
import { groupEntriesByWeek } from '../utils/groupEntriesByWeek'
import { EventEntryData } from '../../../models/eventEntry'

export type GroupedEntries = {
  [id: string]: EventEntryData[]
}

export type CalendarMonthProps = {
  month: Date
  entries: EventEntryData[]
}

export default function CalendarMonth({ month, entries }: CalendarMonthProps) {
  const groupedEntries = groupEntriesByWeek(entries)
  const weeksGroup = groupDatesByWeek(getAllDaysInMonth(month))

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full rounded border-2 border-blue-100 bg-blue-50 p-4">
        {Object.entries(weeksGroup).map(([weekNumber, days]) => {
          return (
            <CalendarWeek
              key={weekNumber}
              days={days}
              entries={groupedEntries ? groupedEntries[weekNumber] : []}
            />
          )
        })}
      </div>
    </div>
  )
}
