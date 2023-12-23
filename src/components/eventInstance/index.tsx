import { Button } from '@mui/base/Button'
import { EventInstanceTagRef as EventInstanceTagType } from '../../gql/codegen/graphql'
import EventInstanceTag from '../tags/eventInstanceTag'
import { EventColumnIndex } from '../calendar/utils/getEventColumns'

export type EventInstanceProps = {
  label: string
  colStart: EventColumnIndex
  colEnd: EventColumnIndex
  startDateTime: string
  endDateTime: string
  tags: EventInstanceTagType[]
}

const colStarts = {
  0: '',
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
  8: '',
}

const colEnds = {
  0: '',
  1: '',
  2: 'col-end-2',
  3: 'col-end-3',
  4: 'col-end-4',
  5: 'col-end-5',
  6: 'col-end-6',
  7: 'col-end-7',
  8: 'col-end-8',
}

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
            return <EventInstanceTag label={tag.label || 'Label'} color={'blue'} />
          })}
        </div>
      </div>
    </Button>
  )
}
