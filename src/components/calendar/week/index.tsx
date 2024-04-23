import format from 'date-fns/format'
import EventEntry from '../../eventEntry'
import { getDayColorClass } from './utils/getDayColorClass'
import { getEventColumns } from '../utils/getEventColumns'
import { useContext } from 'react'
import { CalendarContext } from '../../../context/calendar/index'
import { formatDay } from './utils/formatDay'
import { EventEntryData } from '../../../models/eventEntry'

export type CalendarWeekProps = {
  days: Date[]
  entries: EventEntryData[]
}

export default function CalendarWeek({ days, entries }: CalendarWeekProps) {
  const { month, getTags, getEventProperties } = useContext(CalendarContext)

  return (
    <div className="col-span-full grid grid-cols-7 gap-y-1 pb-16 font-inter font-medium">
      <div className="col-span-full grid grid-cols-7">
        {days.map((day) => {
          const dateTime = format(day, 'yyyy-MM-dd')
          const colorClass = getDayColorClass(day, month)

          return (
            <time dateTime={dateTime} key={dateTime}>
              <span className={`${colorClass} rounded p-1`}>
                {formatDay(day)}
              </span>
            </time>
          )
        })}
      </div>

      <div className="col-span-full grid grid-cols-7">
        {entries &&
          entries.map((entry) => {
            const { iid, event, startDateTime, endDateTime, tags } = entry

            const { colStart, colEnd } = getEventColumns({
              weekdays: days,
              event: { startDateTime, endDateTime },
            })

            return (
              <EventEntry
                key={iid}
                iid={iid}
                eventIid={event.iid}
                label={event.label}
                // tags={tags}
                tags={getTags(tags)}
                startDateTime={startDateTime}
                endDateTime={endDateTime}
                colStart={colStart}
                colEnd={colEnd}
                properties={getEventProperties(event.iid)}
              />
            )
          })}
      </div>
    </div>
  )
}
