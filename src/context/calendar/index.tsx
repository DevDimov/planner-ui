import { Dispatch, SetStateAction, createContext } from 'react'
import { GroupedOccurrences } from '../../components/calendar/month'

const defaultValue: {
  month: Date
  weekStartsOn: number
  occurrences: GroupedOccurrences
  setOccurrences: Dispatch<SetStateAction<GroupedOccurrences>>
} = {
  month: new Date(),
  weekStartsOn: 1,
  occurrences: {},
  setOccurrences: () => {},
}

export const CalendarContext = createContext(defaultValue)
