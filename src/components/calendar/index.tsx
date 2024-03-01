import { useCallback, useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { EventEntry } from '../../gql/codegen/graphql'
import { QUERY_EVENT_ENTRY } from '../../gql/operations/queryEventEntry'
import { useLazyQuery } from '@apollo/client'

interface QueryEventEntryData {
  queryEventEntry: EventEntry[]
}

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [entries, setEntries] = useState<EventEntry[]>([])

  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)

  const fetchOccurrences = useCallback(async () => {
    const { data, error } = await queryEntries()

    if (error) {
      return console.log('There was an error', error)
    }

    if (data) {
      if (data.queryEventEntry.length) {
        console.log('Data is available')
        setEntries(data.queryEventEntry)
      }
    }
  }, [queryEntries])

  useEffect(() => {
    fetchOccurrences().catch(console.error)
  }, [fetchOccurrences])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
          entries: entries,
          setEntries: setEntries,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} entries={entries} />
      </CalendarContext.Provider>
    </div>
  )
}
