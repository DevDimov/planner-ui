import {
  Tag as EventTagType,
  EventPropertyRef,
  InputMaybe,
} from '../../gql/codegen/graphql'
import EventInstanceTag from '../tags/eventInstanceTag'
import React, { useContext } from 'react'
import PropertyValuePair from '../forms/propertyValuePair'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import HorizontalDivider from '../forms/divider'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { DELETE_EVENT_ENTRY } from '../../gql/operations/deleteEventEntry'
import { CalendarContext } from '../../context/calendar'
import { Button } from '../buttons'
import { ButtonLoading } from '../ui/button/buttonLoading'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export type EventEntryProps = {
  iid: string
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags: EventTagType[]
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

export default function EventEntry({
  iid,
  label,
  colStart,
  colEnd,
  startDateTime,
  endDateTime,
  tags,
  // color
  properties,
}: EventEntryProps) {
  const { entries: occurrences, setEntries: setOccurrences } =
    useContext(CalendarContext)

  const [deleteEntry, { loading }] = useMutation(DELETE_EVENT_ENTRY)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  // const handleOnMouseDown = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault()
  //   if (event.nativeEvent.button === 2) {
  //     console.log('Right click')
  //   }
  // }

  const handleDeleteEntry = async () => {
    try {
      const { data } = await deleteEntry({
        variables: { filter: { iid: [iid] } },
      })

      if (data) {
        console.log('mutation triggered', data)
        const newEntries = occurrences.filter((occurrence) => {
          return occurrence.iid !== iid
        })
        setOccurrences(newEntries)
      }
    } catch (error) {
      console.log('Error deleting occurrence', error)
    }
  }

  return (
    <div className={`bg-white ${colStarts[colStart]} ${colEnds[colEnd]}`}>
      <Popover>
        <PopoverTrigger onClick={handleClick} className="w-full bg-white">
          <div className="mr-[-2px] mt-[-2px] rounded-sm border-2 border-blue-100 p-1.5">
            <div className="text-md text-left font-sans font-medium leading-4 text-black">
              {label}
            </div>
            <div className="row-start-2 mt-1.5 flex flex-wrap gap-1.5">
              {tags &&
                tags.map((tag) => {
                  return (
                    <EventInstanceTag
                      key={tag.iid}
                      label={tag.label || 'Label'}
                      color={'blue'}
                    />
                  )
                })}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="z-50 flex max-w-md flex-col gap-y-4 rounded-sm">
            <div className="font-medium">{label}</div>
            <HorizontalDivider />
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
                <HorizontalDivider />
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
            <div className="mt-4 flex justify-between gap-3">
              <Button
                key="edit-event-button"
                title="Edit event entry"
                // onClick={handleDeleteOccurrence}
                onClick={() => undefined}
              >
                Edit
              </Button>
              {loading ? (
                <ButtonLoading />
              ) : (
                <Button
                  key="delete-event-button"
                  variant="outline"
                  title="Delete event entry"
                  onClick={handleDeleteEntry}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
