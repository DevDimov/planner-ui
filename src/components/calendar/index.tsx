import { useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import { CalendarWeekProps } from './week'
import startOfMonth from 'date-fns/startOfMonth'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'
import { CalendarContext } from '../../context/calendar'
import { groupOccurrencesByWeek } from './utils/groupOccurrencesByWeek'

export type CalendarProps = {
  weeks: CalendarWeekProps[]
}

export default function Calendar({ weeks }: CalendarProps) {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [data, setData] = useState([
    {
      label: 'Full Week Event',
      start: '2023-12-25T00:00:00.000Z',
      end: '2023-12-31T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      label: 'Single Day Event',
      start: '2023-12-25T00:00:00.000Z',
      end: '2023-12-25T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      label: 'Jan Day Event',
      start: '2024-01-01T00:00:00.000Z',
      end: '2024-01-01T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
  ])

  const showPreviousMonth = () => {
    const newMonth = subMonths(month, 1)
    setMonth(newMonth)
  }

  const showNextMonth = () => {
    const newMonth = addMonths(month, 1)
    setMonth(newMonth)
  }

  useEffect(() => {
    // const getData = () => {}
  }, [])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
        }}
      >
        <CalendarControls
          currentMonth={month}
          showPreviousMonth={showPreviousMonth}
          showNextMonth={showNextMonth}
        />
        <CalendarMonth month={month} occurrences={groupOccurrencesByWeek(data)} />
      </CalendarContext.Provider>
    </div>
  )
}
