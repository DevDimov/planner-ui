import format from 'date-fns/format'
import { Dispatch, SetStateAction } from 'react'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'
import IconButton from '../../buttons/icon'
import { GrNext, GrPrevious } from 'react-icons/gr'

type CalendarControlProps = {
  month: Date
  setMonth: Dispatch<SetStateAction<Date>>
}

export default function CalendarControls({
  month,
  setMonth,
}: CalendarControlProps) {
  const showPreviousMonth = () => {
    const newMonth = subMonths(month, 1)
    setMonth(newMonth)
  }

  const showNextMonth = () => {
    const newMonth = addMonths(month, 1)
    setMonth(newMonth)
  }

  return (
    <div className="mb-6 flex flex-row items-center gap-2 p-4">
      <span className="mr-8 text-xl font-medium">
        {format(month, 'MMMM yyyy')}
      </span>
      <IconButton onClick={showPreviousMonth} title="Show previous month">
        <GrPrevious />
      </IconButton>
      <IconButton onClick={showNextMonth} title="Show next month">
        <GrNext />
      </IconButton>
    </div>
  )
}
