import format from 'date-fns/format'
import { Dispatch, SetStateAction } from 'react'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Button } from '../../buttons'
import AddEntryButton from '../../buttons/addEntry'

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
    <div className="mb-6 flex flex-row items-center justify-between gap-2 p-4">
      <div className="flex flex-row items-center gap-2">
        <span className="mr-8 text-xl font-medium">
          {format(month, 'MMMM yyyy')}
        </span>
        <Button
          variant="outline"
          onClick={showPreviousMonth}
          title="Show previous month"
        >
          <GrPrevious />
        </Button>
        <Button
          variant="outline"
          onClick={showNextMonth}
          title="Show next month"
        >
          <GrNext />
        </Button>
      </div>
      <div className="flex gap-2">
        <AddEntryButton />
      </div>
    </div>
  )
}
