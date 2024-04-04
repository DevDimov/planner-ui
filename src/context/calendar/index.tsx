import { Dispatch, SetStateAction, createContext } from 'react'
import { TagData } from '../../models/tag'
import { EventEntryData, UpdateEventEntryData } from '../../models/eventEntry'
import { EventData } from '../../models/event'
import { EventPropertyData } from '../../models/eventProperty'

export const defaultValue: {
  month: Date
  weekStartsOn: number
  events: EventData[]
  setEvents: Dispatch<SetStateAction<EventData[]>>
  entries: EventEntryData[]
  tags: TagData[]
  addEvent: (event: EventData) => void
  addEventEntry: (entry: EventEntryData) => void
  addEventProperty: (eventIid: string, property: EventPropertyData) => void
  getEventProperties: (eventIid: string) => EventPropertyData[]
  removeEntry: (entryIid: string) => void
  removeEventProperty: (eventIid: string, propertyIid: string) => void
  updateEventEntry: (eventEntry: UpdateEventEntryData) => void
  updateEventProperty: (eventIid: string, property: EventPropertyData) => void
} = {
  month: new Date(),
  weekStartsOn: 1,
  events: [],
  setEvents: () => {},
  entries: [],
  tags: [],
  addEvent: () => {},
  addEventEntry: () => {},
  addEventProperty: () => {},
  getEventProperties: () => [],
  removeEventProperty: () => {},
  removeEntry: () => [],
  updateEventEntry: () => {},
  updateEventProperty: () => {},
}

export const CalendarContext = createContext(defaultValue)
