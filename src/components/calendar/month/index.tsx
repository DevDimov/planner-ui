import CalendarWeek, { CalendarWeekProps } from '../week'
import WeekdayNames from '../weekdayNames'

export type CalendarMonthProps = {
  weeks: CalendarWeekProps[]
}

export default function CalendarMonth({ weeks }: CalendarMonthProps) {

  return (
    <div>
      <WeekdayNames />
      <div className="grid h-full gap-y-12 border-2 border-blue-100 bg-blue-50 p-4">
        {weeks.map((week) => {
          return (
            <CalendarWeek days={week.days} occurrences={week.occurrences} />
          )
        })}
      </div>
    </div>
  )
}
