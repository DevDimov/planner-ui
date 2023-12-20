import { useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import { CalendarWeekProps } from './week'
import startOfMonth from 'date-fns/startOfMonth'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'

export type CalendarProps = {
  weeks: CalendarWeekProps[]
}

export default function Calendar({ weeks }: CalendarProps) {
  const today = new Date()

  const [month, setMonth] = useState(startOfMonth(today))

  const handlePreviousMonth = () => {
    const newMonth = subMonths(month, 1)
    setMonth(newMonth)
  }

  const handleNextMonth = () => {
    const newMonth = addMonths(month, 1)
    setMonth(newMonth)
  }
  
  return (
    <div>
      <CalendarControls startOfMonth={new Date()} />
      <CalendarMonth weeks={weeks} />
    </div>
  )
}
