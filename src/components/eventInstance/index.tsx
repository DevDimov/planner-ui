import { Button } from '@mui/base/Button'
import { EventInstanceTagRef as EventInstanceTagType } from '../../gql/codegen/graphql'
import EventInstanceTag from '../tags/eventInstanceTag'

export type EventInstanceProps = {
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags: EventInstanceTagType[]
}

const colStarts = [
  '',
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
  '',
]

const colEnds = [
  '',
  '',
  'col-end-2',
  'col-end-3',
  'col-end-4',
  'col-end-5',
  'col-end-6',
  'col-end-7',
  'col-end-8',
]

export default function EventInstance({
  label,
  colStart,
  colEnd,
  tags,
  // color
}: EventInstanceProps) {
  return (
    <Button
      disabled={true}
      className={`bg-white ${colStarts[colStart]} ${colEnds[colEnd]}`}
    >
      <div className="mr-[-2px] mt-[-2px] rounded-sm border-2 border-blue-100 p-1.5">
        <div className="text-md text-left font-sans font-medium leading-4 text-black">
          {label}
        </div>
        <div className="row-start-2 mt-1.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            return (
              <EventInstanceTag label={tag.label || 'Label'} color={'blue'} />
            )
          })}
        </div>
      </div>
    </Button>
  )
}
