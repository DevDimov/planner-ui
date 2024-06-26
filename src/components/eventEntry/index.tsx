import React, { useContext, useState } from 'react'
import PropertyValuePair from '../forms/propertyValuePair'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import HorizontalDivider from '../forms/divider'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { DELETE_EVENT_ENTRY } from '../../gql/operations/deleteEventEntry'
import { CalendarContext } from '../../context/calendar/index'
import { Button } from '../buttons'
import { EditEntryDurationForm } from '../forms/editEntry/duration'
import { TypographyMuted } from '../typography/muted'
import { EventPropertyData } from '../../models/eventProperty'
import { TagData } from '../../models/tag'
import { TypographyH4 } from '../typography/h4'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { EditEventPropertyForm } from '../forms/editEntry/eventProperties/edit'
import { AddEventPropertyForm } from '../forms/editEntry/eventProperties/add'
import TagsRow from '../tags/TagsRow'
import { useToast } from '../../components/ui/toast/use-toast'

export type EventEntryProps = {
  iid: string
  eventIid: string
  label: string
  colStart: number
  colEnd: number
  startDateTime: string
  endDateTime: string
  tags?: TagData[]
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
  properties,
}: EventEntryProps) {
  const [canEditDuration, setCanEditDuration] = useState(false)
  const [canEditProperties, setCanEditProperties] = useState(false)

  const { removeEntry } = useContext(CalendarContext)
  const { toast } = useToast()
  const [deleteEntry] = useMutation(DELETE_EVENT_ENTRY)

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

      if (data?.deleteEventEntry?.eventEntry) {
        removeEntry(iid)
        toast({
          description: 'Event entry deleted.',
        })
      }
    } catch (error) {
      toast({
        description: 'Error deleting entry',
      })
      console.log('Error deleting entry', error)
    }
  }

  return (
    <div className={`${colStarts[colStart]} ${colEnds[colEnd]}`}>
      <Dialog modal={false}>
        <DialogTrigger onClick={handleClick} className="w-full bg-white">
          <div className="mr-[-2px] mt-[-2px] overflow-hidden rounded-sm border-2 border-blue-100 p-1 md:p-1.5">
            <div className="my-[-0.2rem] text-left text-sm leading-5 md:my-[-0.1rem] md:text-base">
              {label}
            </div>
            {tags && tags.length > 0 && <TagsRow tags={tags} />}
          </div>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto">
          <div className="z-50 flex flex-col gap-y-4 rounded-sm">
            <div>
              <TypographyH4>{label}</TypographyH4>
              {tags && tags.length > 0 && <TagsRow tags={tags} />}
            </div>

            <div className="mt-2 flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between gap-x-4">
                  <TypographyMuted>Duration</TypographyMuted>

                  {!canEditDuration ? (
                    <Button
                      title="Edit event entry duration"
                      size="sm"
                      variant="ghost"
                      onClick={handleEnableDurationEditing}
                      className="text-muted-foreground"
                    >
                      Edit
                    </Button>
                  ) : (
                    <div>
                      {/* <Button
                        title="Cancel editing event entry duration"
                        size="sm"
                        variant="outline"
                        onClick={handleCancelDurationEditing}
                      >
                        Submit
                      </Button> */}
                      <Button
                        title="Finish editing event entry duration"
                        size="sm"
                        variant="ghost"
                        onClick={handleCancelDurationEditing}
                      >
                        Finish
                      </Button>
                    </div>
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
                  <div className="flex flex-col gap-x-3 gap-y-5">
                    <PropertyValuePair
                      key={'From' + startDateTime.toString()}
                      label={'From'}
                      value={format(
                        parseISO(startDateTime),
                        'eeee, d LLL yyyy'
                      )}
                    />
                    <PropertyValuePair
                      key={'To:' + endDateTime.toString()}
                      label={'To'}
                      value={format(parseISO(endDateTime), 'eeee, d LLL yyyy')}
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-y-4">
                <HorizontalDivider />
                <div className="flex items-center justify-between gap-x-4">
                  <TypographyMuted>Event Properties</TypographyMuted>

                  {!canEditProperties ? (
                    <Button
                      title="Edit event properties"
                      size="sm"
                      variant="ghost"
                      onClick={handleEnablePropertyEditing}
                      className="text-muted-foreground"
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      title="Finish editing event properties"
                      size="sm"
                      variant="ghost"
                      onClick={handleCancelPropertyEditing}
                    >
                      Finish
                    </Button>
                  )}
                </div>

                {canEditProperties ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      {properties?.map((prop) => (
                        <EditEventPropertyForm
                          key={prop.iid}
                          eventIid={eventIid}
                          property={prop}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <AddEventPropertyForm eventIid={eventIid} />
                    </div>
                  </div>
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

              <div className="flex flex-col items-center gap-y-4">
                <HorizontalDivider />
                <Button
                  variant="ghost"
                  title="Delete event entry"
                  onClick={handleDeleteEntry}
                  className="w-fit text-muted-foreground"
                  size="sm"
                >
                  Delete entry
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
