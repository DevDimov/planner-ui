import format from 'date-fns/format'
import EventEntry from '../../eventEntry'
import { getDayColorClass } from './utils/getDayColorClass'
import { EventEntry as EventEntryType } from '../../../gql/codegen/graphql'
import { getEventColumns } from '../utils/getEventColumns'
import { useContext } from 'react'
import { CalendarContext } from '../../../context/calendar'
import { formatDay } from './utils/formatDay'

export type CalendarWeekProps = {
  days: Date[]
  entries: EventEntryType[]
  week: string
}

export default function CalendarWeek({
  days,
  entries,
  week,
}: CalendarWeekProps) {
  const { month } = useContext(CalendarContext)

  return (
    <div className="col-span-full grid grid-cols-7 gap-y-1 pb-16 font-inter font-medium">
      <div className="col-span-full grid grid-cols-7">
        {days.map((day) => {
          const dateTime = format(day, 'yyyy-MM-dd')
          const colorClass = getDayColorClass(day, month)

          return (
            <div>
              <time dateTime={dateTime}>
                <span className={`${colorClass} rounded p-1`}>
                  {formatDay(day)}
                </span>
              </time>
            </div>
          )
        })}
      </div>

      <div className="col-span-full grid grid-cols-7">
        {entries &&
          entries.map((entry) => {
            const { iid, event, startDateTime, endDateTime } = entry

            const { colStart, colEnd } = getEventColumns({
              weekdays: days,
              event: { startDateTime, endDateTime },
            })

            return (
              <EventEntry
                key={iid}
                iid={iid}
                label={event.label}
                tags={event.tags || []}
                startDateTime={startDateTime}
                endDateTime={endDateTime}
                colStart={colStart}
                colEnd={colEnd}
                properties={event.properties}
              />
            )
          })}
      </div>
    </div>
  )
}
