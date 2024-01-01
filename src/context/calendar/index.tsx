import { Dispatch, SetStateAction, createContext } from 'react'
import { EventInstanceOccurrence } from '../../gql/codegen/graphql'

const defaultValue: {
  month: Date
  weekStartsOn: number
  occurrences: EventInstanceOccurrence[]
  setOccurrences: Dispatch<SetStateAction<EventInstanceOccurrence[]>>
} = {
  month: new Date(),
  weekStartsOn: 1,
  occurrences: [],
  setOccurrences: () => {},
}

export const CalendarContext = createContext(defaultValue)
