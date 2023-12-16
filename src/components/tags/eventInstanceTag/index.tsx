import { Button } from '@mui/base/Button'

type EventInstanceTagProps = {
  label: string
  color: string
}

export default function EventInstanceTag({
  label,
  color,
}: EventInstanceTagProps) {
  return (
    <Button
      className="rounded-sm bg-orange-500 px-2 py-0.5 font-sans text-sm font-normal text-white"
      disabled={true}
    >
      {label}
    </Button>
  )
}
