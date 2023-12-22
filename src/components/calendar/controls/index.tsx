import format from 'date-fns/format'
import SecondaryButton from '../../buttons/secondary'

type CalendarControlProps = {
  currentMonth: Date
  showNextMonth: () => void
  showPreviousMonth: () => void
}

export default function CalendarControls({
  currentMonth,
  showNextMonth,
  showPreviousMonth,
}: CalendarControlProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <SecondaryButton onClick={showPreviousMonth} title="< Previous" />
      <span className="text-2xl font-medium">
        {format(currentMonth, 'MMMM yyyy')}
      </span>
      <SecondaryButton onClick={showNextMonth} title="Next >" />
    </div>
  )
}
