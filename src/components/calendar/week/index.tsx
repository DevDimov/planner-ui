import format from 'date-fns/format'
import EventInstance from '../../eventInstance'
import { getDayColorClass } from './utils/getDayColorClass'
import { EventInstanceOccurrenceRef } from '../../../gql/codegen/graphql'
import { getEventColumns } from '../utils/getEventColumns'

export type CalendarWeekProps = {
  days: Date[]
  occurrences: EventInstanceOccurrenceRef[]
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
        {occurrences && occurrences.map((occurrence) => {
          const { iid, eventInstance, startDateTime, endDateTime } = occurrence

          const { colStart, colEnd } = getEventColumns({
            weekdays: days,
            event: { startDateTime, endDateTime },
          })

          return (
            <EventInstance
              key={iid}
              label={eventInstance?.event?.label || 'Label'}
              tags={eventInstance?.tags || []}
              startDateTime={startDateTime}
              endDateTime={endDateTime}
              colStart={colStart}
              colEnd={colEnd}
            />
          )
        })}
      </div>
    </div>
  )
}
