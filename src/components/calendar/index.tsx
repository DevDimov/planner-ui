import { useCallback, useEffect, useMemo, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { QUERY_EVENT_ENTRY } from '../../gql/operations/queryEventEntry'
import { useLazyQuery } from '@apollo/client'
import { EventEntryData, UpdateEventEntryData } from '../../models/eventEntry'
import { QUERY_EVENT } from '../../gql/operations/queryEvent'
import { EventData } from '../../models/event'
import { removeEventProperty } from './utils/removeEventProperty'
import { EventPropertyData } from '../../models/eventProperty'
import { addEventProperty } from './utils/addEventProperty'
import { updateEventProperty } from './utils/updateEventProperty'
import { updateEventEntry } from './utils/updateEventEntry'
import { addEvent } from './utils/addEvent'
import { getAllTags } from './utils/getAllTags'
import { getEventProperties } from './utils/getEventProperties'
import { getEventTags } from './utils/getEventTags'
import { useToast } from '../ui/toast/use-toast'

interface QueryEventData {
  queryEvent: EventData[]
}

interface QueryEventEntryData {
  queryEventEntry: EventEntryData[]
}

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [events, setEvents] = useState<EventData[]>([])
  const [entries, setEntries] = useState<EventEntryData[]>([])

  const [queryEvents] = useLazyQuery<QueryEventData>(QUERY_EVENT)
  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)

  const { toast } = useToast()

  const fetchEvents = useCallback(async () => {
    const { data, error } = await queryEvents()

    if (error) {
      toast({
        description: 'There was an error fetching events.',
        variant: 'destructive',
      })
      return
    }

    if (data) {
      if (data.queryEvent.length) {
        console.log('Fetch events', data.queryEvent)
        setEvents(data.queryEvent)
      }
    }
  }, [queryEvents, toast])

  const fetchEntries = useCallback(async () => {
    const { data, error } = await queryEntries()

    if (error) {
      toast({
        description: 'There was an error fetching entries.',
        variant: 'destructive',
      })
      return
    }

    if (data) {
      if (data.queryEventEntry.length) {
        console.log('Fetch entries', data.queryEventEntry)
        setEntries(data.queryEventEntry)
      }
    }
  }, [queryEntries, toast])

  const tags = useMemo(() => getAllTags(events), [events])

  const handleAddEvent = (event: EventData) => {
    setEvents(addEvent(events, event))
  }

  const handleRemoveEventProperty = (eventIid: string, propertyIid: string) => {
    setEvents(removeEventProperty(events, eventIid, propertyIid))
  }

  const handleGetEventProperties = (eventIid: string) => {
    return getEventProperties(events, eventIid)
  }

  const handleGetEventTags = (eventIid: string) => {
    return getEventTags(events, eventIid)
  }

  const handleUpdateEventEntry = (eventEntry: UpdateEventEntryData) => {
    setEntries(updateEventEntry(entries, eventEntry))
  }

  const handleUpdateEventProperty = (
    eventIid: string,
    property: EventPropertyData
  ) => {
    setEvents(updateEventProperty(events, eventIid, property))
  }

  const handleAddEventProperty = (
    eventIid: string,
    property: EventPropertyData
  ) => {
    setEvents(addEventProperty(events, eventIid, property))
  }

  useEffect(() => {
    fetchEvents().catch(console.error)
  }, [fetchEvents])

  useEffect(() => {
    fetchEntries().catch(console.error)
  }, [fetchEntries])

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
          addEvent: handleAddEvent,
          addEventProperty: handleAddEventProperty,
          getEventProperties: handleGetEventProperties,
          getEventTags: handleGetEventTags,
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
