import EventTag from '../tags/eventInstanceTag'
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
import { TagData } from '../../models/tag'
import { TypographySmall } from '../typography/small'
import { TypographyLead } from '../typography/lead'
import { FormDescription } from '../forms'
import { TypographyH4 } from '../typography/h4'
import { TypographyLarge } from '../typography/large'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export type EventEntryProps = {
  iid: string
  eventIid: string
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags: TagData[]
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
  eventIid,
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
      <Dialog modal={false}>
        <DialogTrigger onClick={handleClick} className="w-full bg-white">
          <div className="mr-[-2px] mt-[-2px] rounded-sm border-2 border-blue-100 p-1.5">
            <div className="text-left leading-5">{label}</div>
            <div className="row-start-2 mt-1.5 flex flex-wrap gap-1.5">
              {tags.map((tag) => {
                return (
                  <EventTag key={tag.iid} label={tag.label} color={'blue'} />
                )
              })}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[90%] overflow-y-auto">
          <div className="z-50 flex flex-col gap-y-4 rounded-sm">
            <TypographyH4>{label}</TypographyH4>
            {/* <HorizontalDivider /> */}
            {/* <div className="flex flex-row gap-x-16"> */}
            <div className="mt-2 flex flex-col gap-y-4">
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
                  <TypographyMuted>Event Properties</TypographyMuted>

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
                {canEditProperties ? (
                  <EditEventPropertiesForm
                    entryIid={iid}
                    eventIid={eventIid}
                    properties={properties || []}
                    handleCancelEditing={handleCancelPropertyEditing}
                  />
                ) : (
                  <>
                    {properties &&
                      properties.map((prop) => {
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
              {/* <HorizontalDivider /> */}
            </div>
            <Button
              variant="outline"
              title="Delete event entry"
              onClick={handleDeleteEntry}
              className="mt-4 w-fit"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
