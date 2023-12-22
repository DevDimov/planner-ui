import { createContext } from 'react'

const defaultValue = {
  month: new Date(),
  weekStartsOn: 1,
}

export const CalendarContext = createContext(defaultValue)
