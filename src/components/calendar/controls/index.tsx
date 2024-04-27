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
    <div className="mb-2 flex flex-row flex-wrap items-center justify-between gap-2 p-3 md:mb-6 md:p-4">
      <span className="mr-8 text-xl font-medium">
        {format(month, 'MMMM yyyy')}
      </span>

      <div className="flex w-full gap-2 md:w-auto">
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
        <div className="flex flex-grow justify-end">
          <AddEntryButton />
        </div>
      </div>
    </div>
  )
}
