import format from 'date-fns/format'
import EventInstance from '../../eventInstance'
import { getDayColorClass } from './utils/getDayColorClass'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import { getEventColumns } from '../utils/getEventColumns'
import { useContext } from 'react'
import { CalendarContext } from '../../../context/calendar'
import { formatDay } from './utils/formatDay'
import EntryButton from '../../buttons/entry'

export type CalendarWeekProps = {
  days: Date[]
  occurrences: EventInstanceOccurrence[]
  week: string
}

export default function CalendarWeek({
  days,
  occurrences,
  week,
}: CalendarWeekProps) {
  const { month } = useContext(CalendarContext)

  return (
    <div className="col-span-full grid grid-cols-7 gap-y-1 font-inter font-medium">
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
        {occurrences &&
          occurrences.map((occurrence) => {
            const { iid, eventInstance, startDateTime, endDateTime } =
              occurrence

            const { colStart, colEnd } = getEventColumns({
              weekdays: days,
              event: { startDateTime, endDateTime },
            })

            return (
              <EventInstance
                key={iid}
                iid={iid}
                label={eventInstance.event.label}
                tags={eventInstance.tags || []}
                startDateTime={startDateTime}
                endDateTime={endDateTime}
                colStart={colStart}
                colEnd={colEnd}
                properties={eventInstance?.event?.properties || undefined}
              />
            )
          })}
      </div>

      {days.map((day) => {
        const dateTime = format(day, 'yyyy-MM-dd')

        return (
          <EntryButton
            key={'entryButton' + dateTime}
            title={'Add new'}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
          ></EntryButton>
        )
      })}
    </div>
  )
}
