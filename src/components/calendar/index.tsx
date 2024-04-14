import { useCallback, useEffect, useState } from 'react'
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
import { getEventProperties } from './utils/getEventProperties'
import { useToast } from '../ui/toast/use-toast'
import { TagData } from '../../models/tag'
import { QUERY_TAG } from '../../gql/operations/queryTag'
import { filterNewTags } from './utils/filterNewTags'

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
  const [tags, setTags] = useState<TagData[]>([])

  const [queryEvents] = useLazyQuery<QueryEventData>(QUERY_EVENT)
  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)
  const [queryTags] = useLazyQuery<QueryTagData>(QUERY_TAG)

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

  const fetchTags = useCallback(async () => {
    const { data, error } = await queryTags()

    if (error) {
      toast({
        description: 'There was an error fetching tags.',
        variant: 'destructive',
      })
      return
    }

    if (data) {
      if (data.queryTag.length) {
        console.log('Fetch tags', data.queryTag)
        setTags(data.queryTag)
      }
    }
  }, [queryTags, toast])

  const handleAddEvent = (event: EventData) => {
    setEvents(addEvent(events, event))
  }

  const handleAddEventEntry = (newEntries: EventEntryData[]) => {
    setEntries([...entries, ...newEntries])
    const newTags = newEntries[0]?.tags
    if (newTags) {
      handleAddTag(newTags)
    }
  }

  const handleAddTag = (data: TagData[]) => {
    const newTags = filterNewTags(tags, data)
    setTags([...tags, ...newTags])
  }

  const handleRemoveEntry = (entryIid: string) => {
    const newEntries = entries.filter((entry) => entry.iid !== entryIid)
    setEntries(newEntries)
  }

  const handleRemoveEventProperty = (eventIid: string, propertyIid: string) => {
    setEvents(removeEventProperty(events, eventIid, propertyIid))
  }

  const handleGetEventProperties = (eventIid: string) => {
    return getEventProperties(events, eventIid)
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

  useEffect(() => {
    fetchTags().catch(console.error)
  }, [fetchTags])

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
          addEvent: handleAddEvent,
          addEventEntry: handleAddEventEntry,
          addTag: handleAddTag,
          addEventProperty: handleAddEventProperty,
          getEventProperties: handleGetEventProperties,
          removeEntry: handleRemoveEntry,
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
