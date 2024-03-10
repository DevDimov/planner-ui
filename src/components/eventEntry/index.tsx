import { Tag as EventTagType } from '../../gql/codegen/graphql'
import EventInstanceTag from '../tags/eventInstanceTag'
import React, { useContext, useState } from 'react'
import PropertyValuePair from '../forms/propertyValuePair'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import HorizontalDivider from '../forms/divider'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { DELETE_EVENT_ENTRY } from '../../gql/operations/deleteEventEntry'
import { CalendarContext } from '../../context/calendar'
import { Button } from '../buttons'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { EditEntryDurationForm } from '../forms/editEntry/duration'
import FormTitle from '../ui/form/formTitle'
import { TypographyMuted } from '../typography/muted'
import { EditEventPropertiesForm } from '../forms/editEntry/eventProperties'
import { EventPropertyData } from '../../models/eventProperty'

export type EventEntryProps = {
  iid: string
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags: EventTagType[]
  properties?: EventPropertyData[]
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
  const [canEditDuration, setCanEditDuration] = useState(false)
  const [canEditProperties, setCanEditProperties] = useState(false)

  const { entries, setEntries } = useContext(CalendarContext)

  const [deleteEntry, { loading }] = useMutation(DELETE_EVENT_ENTRY)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleEnableDurationEditing = () => {
    setCanEditDuration(true)
  }

  const handleCancelDurationEditing = () => {
    setCanEditDuration(false)
  }

  const handleEnablePropertyEditing = () => {
    setCanEditProperties(true)
  }

  const handleCancelPropertyEditing = () => {
    setCanEditProperties(false)
  }

  const handleDeleteEntry = async () => {
    try {
      const { data } = await deleteEntry({
        variables: { filter: { iid: [iid] } },
      })

      if (data) {
        const newEntries = entries.filter((entry) => {
          return entry.iid !== iid
        })
        setEntries(newEntries)
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
          <div className="z-50 flex flex-col gap-y-4 rounded-sm">
            <FormTitle>{label}</FormTitle>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between gap-x-4">
                <TypographyMuted>Duration</TypographyMuted>
                {!canEditDuration && (
                  <Button
                    title="Edit event entry duration"
                    size="sm"
                    variant="outline"
                    onClick={handleEnableDurationEditing}
                  >
                    Edit
                  </Button>
                )}
              </div>
              {canEditDuration ? (
                <EditEntryDurationForm
                  entryIid={iid}
                  startDateTime={parseISO(startDateTime)}
                  endDateTime={parseISO(endDateTime)}
                  handleCancelEditing={handleCancelDurationEditing}
                />
              ) : (
                <>
                  <PropertyValuePair
                    label={'From'}
                    value={format(parseISO(startDateTime), 'eee, d LLL')}
                  />
                  <PropertyValuePair
                    label={'To'}
                    value={format(parseISO(endDateTime), 'eee, d LLL')}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col gap-y-4">
              <HorizontalDivider />
              <div className="flex items-center justify-between gap-x-4">
                <TypographyMuted>Event properties</TypographyMuted>

                {!canEditProperties && (
                  <Button
                    title="Edit event properties"
                    size="sm"
                    variant="outline"
                    onClick={handleEnablePropertyEditing}
                  >
                    Edit
                  </Button>
                )}
              </div>
              {properties && properties.length > 0 && canEditProperties ? (
                <EditEventPropertiesForm
                  eventIid={iid}
                  properties={properties}
                  handleCancelEditing={handleCancelPropertyEditing}
                />
              ) : (
                <>
                  {properties &&
                    properties.map((prop) => {
                      // const { iid, label, value } = prop

                      return (
                        <PropertyValuePair
                          key={prop.iid}
                          label={prop.label}
                          value={prop.value}
                        />
                      )
                    })}
                </>
              )}
            </div>
            <HorizontalDivider />
            <Button
              variant="outline"
              title="Delete event entry"
              onClick={handleDeleteEntry}
            >
              Delete
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
