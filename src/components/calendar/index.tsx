import { useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { mockQueryEventInstanceOccurrence } from '../../mockData/queryEventInstanceOccurrence'
import { EventInstanceOccurrence } from '../../gql/codegen/graphql'
import { QUERY_EVENT_INSTANCE_OCCURRENCE } from '../../gql/operations/queryEventInstanceOccurrence'
import { useQuery } from '@apollo/client'

// export type CalendarProps = {
//   occurrences: EventInstanceOccurrence[]
// }

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [occurrences, setOccurrences] = useState<EventInstanceOccurrence[]>([])

  const { loading, error, data } = useQuery(QUERY_EVENT_INSTANCE_OCCURRENCE)

  if (loading) console.log(loading)
  if (error) console.log(error)

  if (data) {
    setOccurrences(mockQueryEventInstanceOccurrence)
  }

  // useEffect(() => {
  //   setOccurrences(mockQueryEventInstanceOccurrence)
  // }, [])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
          occurrences,
          setOccurrences,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} occurrences={occurrences} />
      </CalendarContext.Provider>
    </div>
  )
}
