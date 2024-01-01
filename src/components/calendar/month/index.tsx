import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek from '../week'
import WeekdayNames from '../weekdayNames'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import { groupOccurrencesByWeek } from '../utils/groupOccurrencesByWeek'

export type GroupedOccurrences = {
  [id: string]: EventInstanceOccurrence[]
}

export type CalendarMonthProps = {
  month: Date
  occurrences: EventInstanceOccurrence[]
}

export default function CalendarMonth({
  month,
  occurrences,
}: CalendarMonthProps) {
  const groupedOccurrences = groupOccurrencesByWeek(occurrences)
  const weeksGroup = groupDatesByWeek(getAllDaysInMonth(month))

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full gap-y-16 border-2 border-blue-100 bg-blue-50 p-4 pb-16">
        {Object.entries(weeksGroup).map(([weekNumber, days]) => {
          return (
            <CalendarWeek
              key={weekNumber}
              week={weekNumber}
              days={days}
              occurrences={
                // Object.keys(occurrences).length > 0
                groupedOccurrences ? groupedOccurrences[weekNumber] : []
              }
            />
          )
        })}
      </div>
    </div>
  )
}
