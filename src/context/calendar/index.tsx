import { Dispatch, SetStateAction, createContext } from 'react'
import { TagData } from '../../models/tag'
import { EventEntryData } from '../../models/eventEntry'
import { EventData } from '../../models/event'

const defaultValue: {
  month: Date
  weekStartsOn: number
  events: EventData[]
  setEvents: Dispatch<SetStateAction<EventData[]>>
  entries: EventEntryData[]
  setEntries: Dispatch<SetStateAction<EventEntryData[]>>
  tags: TagData[]
  setTags: Dispatch<SetStateAction<TagData[]>>
} = {
  month: new Date(),
  weekStartsOn: 1,
  events: [],
  setEvents: () => {},
  entries: [],
  setEntries: () => {},
  tags: [],
  setTags: () => {},
}

export const CalendarContext = createContext(defaultValue)
