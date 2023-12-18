import format from 'date-fns/format'
import EventInstance, { EventInstanceProps } from '../../eventInstance'
import isSameDay from 'date-fns/isSameDay'
import getDay from 'date-fns/getDay'

export type CalendarWeekProps = {
  entries: Date[]
  days?: string[]
  occurrences: EventInstanceProps[]
}

export default function CalendarWeek({
  entries,
  occurrences,
}: CalendarWeekProps) {
  return (
    <div className="col-span-full grid grid-cols-7 font-inter">
      {entries.map((day) => {
        const dateTime = format(day, 'yyyy-MM-dd')
        return (
          <time dateTime={dateTime} key={dateTime}>
            {format(day, 'd')}
          </time>
        )
      })}

      <div
        className="col-span-full row-start-2 grid grid-cols-7"
      >
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
