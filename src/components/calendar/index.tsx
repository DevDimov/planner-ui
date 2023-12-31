import { useEffect, useState } from 'react'
import CalendarControls from './controls'
import CalendarMonth, { GroupedOccurrences } from './month'
import startOfMonth from 'date-fns/startOfMonth'
import { CalendarContext } from '../../context/calendar'
import { groupOccurrencesByWeek } from './utils/groupOccurrencesByWeek'
import { mockQueryEventInstanceOccurrence } from '../../mockData/queryEventInstanceOccurrence'

// export type CalendarProps = {
//   occurrences: EventInstanceOccurrence[]
// }

export default function Calendar() {
  const weekStartsOn = 1

  const [month, setMonth] = useState(startOfMonth(new Date()))
  const [occurrences, setOccurrences] = useState<GroupedOccurrences>({})

  useEffect(() => {
    const groupedOccurrences = groupOccurrencesByWeek(
      mockQueryEventInstanceOccurrence
    )
    setOccurrences(groupedOccurrences)
  }, [])

  return (
    <div>
      <CalendarContext.Provider
        value={{
          month,
          weekStartsOn,
          occurrences,
          setOccurrences,
        }}
      >
        <CalendarControls month={month} setMonth={setMonth} />
        <CalendarMonth month={month} occurrences={occurrences} />
      </CalendarContext.Provider>
    </div>
  )
}
