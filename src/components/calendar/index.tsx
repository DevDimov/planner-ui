import { useCallback, useEffect, useMemo, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { QUERY_EVENT_ENTRY } from '../../gql/operations/queryEventEntry'
import { useLazyQuery } from '@apollo/client'
import { QUERY_TAG } from '../../gql/operations/queryTag'
import { TagData } from '../../models/tag'
import { EventEntryData, UpdateEventEntryData } from '../../models/eventEntry'
import { QUERY_EVENT } from '../../gql/operations/queryEvent'
import { EventData } from '../../models/event'
import { removeEventProperty } from './utils/removeEventProperty'
import { EventPropertyData } from '../../models/eventProperty'
import { addEventProperty } from './utils/addEventProperty'
import { updateEventProperty } from './utils/updateEventProperty'
import { updateEventEntry } from './utils/updateEventEntry'
import { addEvent } from './utils/addEvent'
import { getTags } from './utils/getTags'

interface QueryEventData {
  queryEvent: EventData[]
}

interface QueryEventEntryData {
  queryEventEntry: EventEntryData[]
}

interface QueryTagData {
  queryTag: TagData[]
}

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [events, setEvents] = useState<EventData[]>([])
  const [entries, setEntries] = useState<EventEntryData[]>([])
  // const [tags, setTags] = useState<TagData[]>([])

  const [queryEvents] = useLazyQuery<QueryEventData>(QUERY_EVENT)
  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)
  // const [queryTags] = useLazyQuery<QueryTagData>(QUERY_TAG)

  const fetchEvents = useCallback(async () => {
    const { data, error } = await queryEvents()

    if (error) {
      return console.log('Error fetching events', error)
    }

    if (data) {
      if (data.queryEvent.length) {
        console.log('Fetch events', data.queryEvent)
        setEvents(data.queryEvent)
      }
    }
  }, [queryEvents])

  const fetchEntries = useCallback(async () => {
    const { data, error } = await queryEntries()

    if (error) {
      return console.log('Error fetching entries', error)
    }

    if (data) {
      if (data.queryEventEntry.length) {
        console.log('Fetch entries', data.queryEventEntry)
        setEntries(data.queryEventEntry)
      }
    }
  }, [queryEntries])

  // const fetchTags = useCallback(async () => {
  //   const { data, error } = await queryTags()

  //   if (error) {
  //     return console.log('Error fetching tags', error)
  //   }

  //   if (data) {
  //     if (data.queryTag.length) {
  //       console.log('Fetch tags', data.queryTag)
  //       setTags(data.queryTag)
  //     }
  //   }
  // }, [queryTags])

  const tags = useMemo(() => getTags(events), [events]);

  const handleAddEvent = (event: EventData) => {
    setEvents(addEvent(events, event))
  }

  const handleRemoveEventProperty = (eventIid: string, propertyIid: string) => {
    setEntries(removeEventProperty(entries, eventIid, propertyIid))
  }

  const handleUpdateEventEntry = (eventEntry: UpdateEventEntryData) => {
    setEntries(updateEventEntry(entries, eventEntry))
  }

  const handleUpdateEventProperty = (
    eventIid: string,
    property: EventPropertyData
  ) => {
    setEntries(updateEventProperty(entries, eventIid, property))
  }

  const handleAddEventProperty = (
    eventIid: string,
    property: EventPropertyData
  ) => {
    setEntries(addEventProperty(entries, eventIid, property))
  }

  useEffect(() => {
    fetchEvents().catch(console.error)
  }, [fetchEvents])

  useEffect(() => {
    fetchEntries().catch(console.error)
  }, [fetchEntries])

  // useEffect(() => {
  //   fetchTags().catch(console.error)
  // }, [fetchTags])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
          events: events,
          entries: entries,
          tags: tags,
          setEvents: setEvents,
          setEntries: setEntries,
          // setTags: setTags,
          addEvent: handleAddEvent,
          addEventProperty: handleAddEventProperty,
          // removeEntry: handleRemoveEntry,
          updateEventEntry: handleUpdateEventEntry,
          updateEventProperty: handleUpdateEventProperty,
          removeEventProperty: handleRemoveEventProperty,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} entries={entries} />
      </CalendarContext.Provider>
    </div>
  )
}
