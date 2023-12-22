import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import CalendarWeek, { CalendarWeekProps } from '../week'
import WeekdayNames from '../weekdayNames'
import { EventInstanceTagProps } from '../../tags/eventInstanceTag'

export type GroupedOccurrences = {
  [id: string]: {
    label: string
    start: Date
    end: Date
    tags: EventInstanceTagProps[]
  }
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
      <div className="grid h-full gap-y-12 border-2 border-blue-100 bg-blue-50 p-4">
        {Object.entries(weeksGroup).map(([weekNumber, days]) => {
          return (
            <CalendarWeek days={days} occurrences={occurrences[weekNumber]} />
          )
        })}
      </div>
    </div>
  )
}
