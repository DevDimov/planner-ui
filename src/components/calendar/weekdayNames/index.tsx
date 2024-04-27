import { useContext } from 'react'
import { CalendarContext } from '../../../context/calendar/index'

export default function WeekdayNames() {
  const { weekStartsOn } = useContext(CalendarContext)
  let weekdayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  if (weekStartsOn === 0) {
    weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }

  return (
    <div className="grid grid-cols-7 px-2 pb-2 font-medium md:px-4 md:pb-2">
      {weekdayNames.map((item, index) => {
        const color = index <= 4 ? 'text-blue-900' : 'text-blue-400'

        return (
          <span
            key={item}
            className={`my-1 md:my-2 md:ml-2 ${color} text-sm md:text-base`}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}
