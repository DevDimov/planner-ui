import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek from '../week'
import WeekdayNames from '../weekdayNames'
import { EventEntry } from '../../../gql/codegen/graphql'
import { groupOccurrencesByWeek } from '../utils/groupOccurrencesByWeek'

export type GroupedEntries = {
  [id: string]: EventEntry[]
}

export type CalendarMonthProps = {
  month: Date
  entries: EventEntry[]
}

export default function CalendarMonth({ month, entries }: CalendarMonthProps) {
  const groupedEntries = groupOccurrencesByWeek(entries)
  const weeksGroup = groupDatesByWeek(getAllDaysInMonth(month))

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full border-2 border-blue-100 bg-blue-50 p-4">
        {Object.entries(weeksGroup).map(([weekNumber, days]) => {
          return (
            <CalendarWeek
              key={weekNumber}
              week={weekNumber}
              days={days}
              entries={
                groupedEntries ? groupedEntries[weekNumber] : []
              }
            />
          )
        })}
      </div>
    </div>
  )
}
