import format from 'date-fns/format'
import SecondaryButton from '../../buttons/secondary'

export default function CalendarControls({
  startOfMonth,
}: {
  startOfMonth: Date
}) {
  const handleNextMonth = () => {}
  const handlePreviousMonth = () => {}

  return (
    <div className="flex flex-row items-center gap-4">
      <SecondaryButton onClick={handlePreviousMonth} title="< Previous" />
      <span className="text-2xl font-medium">{format(startOfMonth, 'MMMM yyyy')}</span>
      <SecondaryButton onClick={handleNextMonth} title="Next >" />
    </div>
  )
}
