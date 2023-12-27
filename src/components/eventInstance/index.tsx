import { Button } from '@mui/base/Button'
import {
  EventInstanceTagRef as EventInstanceTagType,
  EventPropertyRef,
  InputMaybe,
} from '../../gql/codegen/graphql'
import EventInstanceTag from '../tags/eventInstanceTag'
import { Popper } from '@mui/base/Popper'
import React from 'react'
import PropertyValuePair from '../forms/propertyValuePair'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export type EventInstanceProps = {
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags: EventInstanceTagType[]
  properties?: InputMaybe<EventPropertyRef>[] | undefined
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
  startDateTime,
  endDateTime,
  tags,
  // color
  properties,
}: EventInstanceProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div className={`bg-white ${colStarts[colStart]} ${colEnds[colEnd]}`}>
      <Button onClick={handleClick} className="w-full bg-white">
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
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className="z-50 m-1 flex max-w-xs flex-col gap-y-4 rounded-sm border border-solid border-slate-200 bg-white p-3 font-inter text-slate-900 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
          <div className="font-medium">{label}</div>
          <div className="h-0.5 bg-gray-100"></div>
          <div className="flex flex-col gap-y-4">
            <PropertyValuePair
              label={'From'}
              value={format(parseISO(startDateTime), 'eee, d LLL')}
            />
            <PropertyValuePair
              label={'To'}
              value={format(parseISO(endDateTime), 'eee, d LLL')}
            />
          </div>
          {properties && properties.length > 0 && (
            <div className="flex flex-col gap-y-4">
              <div className="h-0.5 bg-gray-100"></div>
              {properties.map((prop) => {
                // const { iid, label, value } = prop

                return (
                  <PropertyValuePair
                    key={prop?.iid}
                    label={prop?.label || 'Unknown Label'}
                    value={prop?.value || 'Unknown Value'}
                  />
                )
              })}
            </div>
          )}
        </div>
      </Popper>
    </div>
  )
}
