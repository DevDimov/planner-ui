import { useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import { CalendarWeekProps } from './week'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { groupOccurrencesByWeek } from './utils/groupOccurrencesByWeek'
import { EventInstanceOccurrenceRef } from '../../gql/codegen/graphql'
import { mockQueryEventInstanceOccurrence } from '../../mockData/queryEventInstanceOccurrence'

export type CalendarProps = {
  occurrences: EventInstanceOccurrenceRef[]
}

export default function Calendar({ occurrences }: CalendarProps) {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  // const [occurrences, setOccurrences] = useState<EventInstanceOccurrenceRef[]>(
  //   []
  // )

  // useEffect(() => {
  //   setOccurrences(
  //     mockQueryEventInstanceOccurrence.data.queryEventInstanceOccurrence
  //   )
  // }, [])

  const groupedOccurrences = groupOccurrencesByWeek(occurrences)

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} occurrences={groupedOccurrences} />
      </CalendarContext.Provider>
    </div>
  )
}
