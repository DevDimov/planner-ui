import { useContext } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import { CalendarContext } from 'context/calendar'

export default function Calendar() {
  const { month, setMonth, entries } = useContext(CalendarContext)

  return (
    <div>
      <CalendarControls month={month} setMonth={setMonth} />
      <CalendarMonth month={month} entries={entries} />
    </div>
  )
}
