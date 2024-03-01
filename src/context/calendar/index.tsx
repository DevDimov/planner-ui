import { Dispatch, SetStateAction, createContext } from 'react'
import { EventEntry } from '../../gql/codegen/graphql'

const defaultValue: {
  month: Date
  weekStartsOn: number
  entries: EventEntry[]
  setEntries: Dispatch<SetStateAction<EventEntry[]>>
} = {
  month: new Date(),
  weekStartsOn: 1,
  entries: [],
  setEntries: () => {},
}

export const CalendarContext = createContext(defaultValue)
