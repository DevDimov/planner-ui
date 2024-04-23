import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import startOfMonth from 'date-fns/startOfMonth'
import {
  EventEntryData,
  QueryEventEntryData,
  UpdateEventEntryData,
} from '../../models/eventEntry'
import { EventData, QueryEventData } from '../../models/event'
import { removeEventProperty } from 'components/calendar/utils/removeEventProperty'
import { EventPropertyData } from 'models/eventProperty'
import { addEventProperty } from 'components/calendar/utils/addEventProperty'
import { updateEventProperty } from 'components/calendar/utils/updateEventProperty'
import { updateEventEntry } from 'components/calendar/utils/updateEventEntry'
import { addEvent } from 'components/calendar/utils/addEvent'
import { getEventProperties } from 'components/calendar/utils/getEventProperties'
import { QueryTagData, TagData } from 'models/tag'
import { filterNewTags } from 'components/calendar/utils/filterNewTags'
import { useToast } from 'components/ui/toast/use-toast'
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery'
import { QUERY_EVENT } from 'gql/operations/queryEvent'
import { QUERY_EVENT_ENTRY } from 'gql/operations/queryEventEntry'
import { QUERY_TAG } from 'gql/operations/queryTag'

export const defaultValue: {
  month: Date
  setMonth: Dispatch<SetStateAction<Date>>
  weekStartsOn: number
  events: EventData[]
  setEvents: (events: EventData[]) => void
  entries: EventEntryData[]
  setEntries: (data: EventEntryData[]) => void
  tags: TagData[]
  setTags: (data: TagData[]) => void
  removeTag: (iid: string) => void
  addEvent: (event: EventData) => void
  addEventEntry: (entry: EventEntryData[]) => void
  addTag: (newTag: TagData[]) => void
  addEventProperty: (eventIid: string, property: EventPropertyData) => void
  getEventProperties: (eventIid: string) => EventPropertyData[]
  getTags: (data: TagData[] | undefined) => TagData[]
  removeEntry: (entryIid: string) => void
  removeEventProperty: (eventIid: string, propertyIid: string) => void
  updateEventEntry: (eventEntry: UpdateEventEntryData) => void
  updateEventProperty: (eventIid: string, property: EventPropertyData) => void
  updateTag: (data: TagData) => void
} = {
  month: new Date(),
  setMonth: () => {},
  weekStartsOn: 1,
  events: [],
  setEvents: () => {},
  setEntries: () => {},
  entries: [],
  tags: [],
  setTags: () => {},
  removeTag: () => {},
  addEvent: () => {},
  addEventEntry: () => {},
  addTag: () => {},
  addEventProperty: () => {},
  getEventProperties: () => [],
  getTags: () => [],
  removeEventProperty: () => {},
  removeEntry: () => [],
  updateEventEntry: () => {},
  updateEventProperty: () => {},
  updateTag: () => {},
}

export const CalendarContext = createContext(defaultValue)

export default function CalendarContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [events, setEvents] = useState<EventData[]>([])
  const [entries, setEntries] = useState<EventEntryData[]>([])
  const [tags, setTags] = useState<TagData[]>([])

  const [queryEvents] = useLazyQuery<QueryEventData>(QUERY_EVENT)
  const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)
  const [queryTags] = useLazyQuery<QueryTagData>(QUERY_TAG)

  const { toast } = useToast()

  const handleAddEvent = (event: EventData) => {
    setEvents(addEvent(events, event))
  }

  const handleSetEvents = (events: EventData[]) => {
    setEvents(events)
  }

  const handleSetEntries = (data: EventEntryData[]) => {
    setEntries(data)
  }

  const handleAddEventEntry = (newEntries: EventEntryData[]) => {
    setEntries([...entries, ...newEntries])
    const newTags = newEntries[0]?.tags
    if (newTags) {
      handleAddTag(newTags)
    }
  }

  const handleSetTags = (data: TagData[]) => {
    setTags(data)
  }

  const handleUpdateTag = (data: TagData) => {
    const existingTags = tags.map((tag) => {
      if (tag.iid === data.iid) {
        return { ...tag, ...data }
      }
      return tag
    })
    setTags(existingTags)
  }

  const handleAddTag = useCallback(
    (data: TagData[]) => {
      const newTags = filterNewTags(tags, data)
      setTags([...tags, ...newTags])
    },
    [tags]
  )

  const handleRemoveTag = useCallback(
    (iid: string) => {
      const newTags = tags.filter((tag) => tag.iid !== iid)
      setTags(newTags)
    },
    [tags]
  )

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

  const handleGetTags = (data: TagData[] | undefined) => {
    // TO-DO:
    // Modify the queries for fetching entries and tags so that tag data is located in one place
    const result: TagData[] = []

    if (!data) return result

    const iids = data.map((tag) => tag.iid)
    iids.forEach((iid) => {
      const tagData = tags.find((tag) => tag.iid === iid)
      if (tagData) result.push(tagData)
    })

    return result
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
  }, [queryEvents, toast, setEvents])

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
  }, [queryEntries, toast, setEntries])

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
  }, [queryTags, toast, setTags])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  useEffect(() => {
    fetchTags()
  }, [fetchTags])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          setMonth,
          weekStartsOn,
          events: events,
          entries: entries,
          tags: tags,
          setTags: handleSetTags,
          removeTag: handleRemoveTag,
          setEvents: handleSetEvents,
          setEntries: handleSetEntries,
          addEvent: handleAddEvent,
          addEventEntry: handleAddEventEntry,
          addTag: handleAddTag,
          addEventProperty: handleAddEventProperty,
          getEventProperties: handleGetEventProperties,
          getTags: handleGetTags,
          removeEntry: handleRemoveEntry,
          updateEventEntry: handleUpdateEventEntry,
          updateEventProperty: handleUpdateEventProperty,
          updateTag: handleUpdateTag,
          removeEventProperty: handleRemoveEventProperty,
        }}
      >
        {children}
      </CalendarContext.Provider>
    </div>
  )
}
