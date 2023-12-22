import format from 'date-fns/format'
import EventInstance, { EventInstanceProps } from '../../eventInstance'
import { getDayColorClass } from './utils/getDayColorClass'

export type CalendarWeekProps = {
  days: Date[]
  occurrences: EventInstanceProps[]
}

export default function CalendarWeek({ days, occurrences }: CalendarWeekProps) {
  return (
    <div className="col-span-full grid grid-cols-7 font-inter">
      {days.map((day) => {
        const dateTime = format(day, 'yyyy-MM-dd')
        const colorClass = getDayColorClass(day)

        return (
          <time
            dateTime={dateTime}
            key={dateTime}
            className={`my-2 ml-2 font-medium ${colorClass}`}
          >
            {format(day, 'd')}
          </time>
        )
      })}

      <div className="col-span-full row-start-2 grid grid-cols-7">
        {occurrences.map((occurrence) => {
          const { label, tags, dateStart, dateEnd, colStart, colEnd } =
            occurrence

          return (
            <EventInstance
              label={label}
              tags={tags}
              dateStart={dateStart}
              dateEnd={dateEnd}
              colStart={colStart}
              colEnd={colEnd}
            />
          )
        })}
      </div>
    </div>
  )
}
