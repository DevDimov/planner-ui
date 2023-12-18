import { Button } from '@mui/base/Button'
import EventInstanceTag, {
  EventInstanceTagProps,
} from '../tags/eventInstanceTag'

export type EventInstanceProps = {
  label: string
  colStart: '1' | '2' | '3' | '4' | '5' | '6' | '7'
  colEnd: '2' | '3' | '4' | '5' | '6' | '7' | '8'
  dateStart: Date
  dateEnd: Date
  tags: EventInstanceTagProps[]
}

const colStarts = {
  '1': 'col-start-1',
  '2': 'col-start-2',
  '3': 'col-start-3',
  '4': 'col-start-4',
  '5': 'col-start-5',
  '6': 'col-start-6',
  '7': 'col-start-7',
}

const colEnds = {
  '2': 'col-end-2',
  '3': 'col-end-3',
  '4': 'col-end-4',
  '5': 'col-end-5',
  '6': 'col-end-6',
  '7': 'col-end-7',
  '8': 'col-end-8',
}

export default function EventInstance({
  label,
  colStart,
  colEnd,
  tags,
}: EventInstanceProps) {
  return (
    <Button
      disabled={true}
      className={`bg-white ${colStarts[colStart]} ${colEnds[colEnd]}`}
    >
      <div className="rounded-sm border-2 border-blue-100 p-1.5">
        <div className="text-md text-left font-sans font-medium leading-4 text-black">
          {label}
        </div>
        <div className="row-start-2 mt-1.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            return <EventInstanceTag label={tag.label} color={tag.color} />
          })}
        </div>
      </div>
    </Button>
  )
}
