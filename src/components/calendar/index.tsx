import { useCallback, useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { EventInstanceOccurrence } from '../../gql/codegen/graphql'
import { QUERY_EVENT_INSTANCE_OCCURRENCE } from '../../gql/operations/queryEventInstanceOccurrence'
import { useLazyQuery } from '@apollo/client'

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [occurrences, setOccurrences] = useState<EventInstanceOccurrence[]>([])

  const [queryOccurrences] = useLazyQuery(QUERY_EVENT_INSTANCE_OCCURRENCE)

  const fetchOccurrences = useCallback(async () => {
    const { data, error } = await queryOccurrences()

    if (error) {
      return console.log('There was an error', error)
    }

    if (data) {
      console.log('Data is available')
      setOccurrences(data.queryEventInstanceOccurrence)
    }
  }, [queryOccurrences])

  useEffect(() => {
    fetchOccurrences().catch(console.error)
  }, [fetchOccurrences])

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
