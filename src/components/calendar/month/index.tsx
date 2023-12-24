import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek from '../week'
import WeekdayNames from '../weekdayNames'
import { EventInstanceOccurrenceRef } from '../../../gql/codegen/graphql'

export type GroupedOccurrences = {
  [id: string]: EventInstanceOccurrenceRef[]
}

export type CalendarMonthProps = {
  month: Date
  occurrences: GroupedOccurrences
}

export default function CalendarMonth({
  month,
  occurrences,
}: CalendarMonthProps) {
  const weeksGroup = groupDatesByWeek(getAllDaysInMonth(month))

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full gap-y-12 border-2 border-blue-100 bg-blue-50 p-4 pb-16">
        {Object.entries(weeksGroup).map(([weekNumber, days]) => {
          return (
            <CalendarWeek
              days={days}
              occurrences={
                Object.keys(occurrences).length > 0
                  ? occurrences[weekNumber]
                  : []
              }
            />
          )
        })}
      </div>
    </div>
  )
}
