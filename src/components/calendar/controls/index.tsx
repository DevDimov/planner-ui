import format from 'date-fns/format'
import SecondaryButton from '../../buttons/secondary'
import { Dispatch, SetStateAction } from 'react'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'

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
    <div className="flex flex-row items-center gap-4">
      <SecondaryButton onClick={showPreviousMonth} title="< Previous" />
      <span className="text-2xl font-medium">
        {format(month, 'MMMM yyyy')}
      </span>
      <SecondaryButton onClick={showNextMonth} title="Next >" />
    </div>
  )
}
