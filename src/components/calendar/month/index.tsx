import CalendarWeek, { CalendarWeekProps } from '../week'

export type CalendarMonthProps = {
  weeks: CalendarWeekProps[]
}

export default function CalendarMonth({ weeks }: CalendarMonthProps) {
  return (
    <div className="grid h-full border-2 border-blue-100 bg-blue-50 p-4 gap-y-12">
      {weeks.map((week) => {
        return <CalendarWeek days={week.days} occurrences={week.occurrences} />
      })}
    </div>
  )
}
