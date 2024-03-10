import { Dispatch, SetStateAction, createContext } from 'react'
import { EventEntry } from '../../gql/codegen/graphql'
import { TagData } from '../../models/tag'

const defaultValue: {
  month: Date
  weekStartsOn: number
  entries: EventEntry[]
  setEntries: Dispatch<SetStateAction<EventEntry[]>>
  tags: TagData[]
  setTags: Dispatch<SetStateAction<TagData[]>>
} = {
  month: new Date(),
  weekStartsOn: 1,
  entries: [],
  setEntries: () => {},
  tags: [],
  setTags: () => {},
}

export const CalendarContext = createContext(defaultValue)
