import { Button } from '@mui/base/Button'
import EventInstanceTag from '../tags/eventInstanceTag'

type EventInstanceProps = {
  label: string
  colStart: string
  colEnd: string
  tags: string[]
}
//C5D9F7
export default function EventInstance({
  label,
  colStart,
  colEnd,
  tags,
}: EventInstanceProps) {
  return (
    <Button disabled={true} className="bg-white">
      <div className="border-blue-100 grid grid-cols-1 grid-rows-2 justify-items-start rounded-sm border-2 p-1.5">
        <div className="grid-row-1 text-md font-sans font-medium text-black leading-4">
          {label}
        </div>
        <div className="flex gap-1.5">
          {tags.map((tag) => {
            return <EventInstanceTag label={tag} color={''} />
          })}
        </div>
      </div>
    </Button>
  )
}
