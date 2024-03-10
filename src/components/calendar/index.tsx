import { useCallback, useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { EventEntry } from '../../gql/codegen/graphql'
import { QUERY_EVENT_ENTRY } from '../../gql/operations/queryEventEntry'
import { useLazyQuery } from '@apollo/client'
import { QUERY_TAG } from '../../gql/operations/queryTag'
import { TagData } from '../../models/tag'

interface QueryEventEntryData {
  queryEventEntry: EventEntry[]
}

interface QueryTagData {
  queryTag: TagData[]
}

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [entries, setEntries] = useState<EventEntry[]>([])
  const [tags, setTags] = useState<TagData[]>([])

  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)
  const [queryTags] = useLazyQuery<QueryTagData>(QUERY_TAG)

  const fetchEntries = useCallback(async () => {
    const { data, error } = await queryEntries()

    if (error) {
      return console.log('There was an error fetching entries', error)
    }

    if (data) {
      if (data.queryEventEntry.length) {
        console.log('Data is available')
        setEntries(data.queryEventEntry)
      }
    }
  }, [queryEntries])

  const fetchTags = useCallback(async () => {
    const { data, error } = await queryTags()

    if (error) {
      return console.log('There was an error fetching tags', error)
    }

    if (data) {
      if (data.queryTag.length) {
        console.log('Tags fetched')
        setTags(data.queryTag)
      }
    }
  }, [queryTags])

  useEffect(() => {
    fetchEntries().catch(console.error)
  }, [fetchEntries])

  useEffect(() => {
    fetchTags().catch(console.error)
  }, [fetchTags])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
          entries: entries,
          setEntries: setEntries,
          tags: tags,
          setTags: setTags,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} entries={entries} />
      </CalendarContext.Provider>
    </div>
  )
}
