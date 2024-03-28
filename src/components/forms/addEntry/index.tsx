import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addEntryFormSchema } from '../../../schema/addEntry'
import { z } from 'zod'
import { Button } from '../../buttons'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../index'
import { SelectEvent } from '../../select/selectEvent'
import { SingleDateInput } from '../../input/singleDateInput'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventEntry'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { useContext, useEffect, useRef, useState } from 'react'
import { DialogClose } from '../../ui/dialog'
import { EventEntryData } from '../../../models/eventEntry'
import { TypographySmall } from '../../typography/small'

type EventOption = {
  id: string
  label: string
}

type AddEventEntryData = {
  addEventEntry: {
    eventEntry: EventEntryData[]
  }
}

export function AddEntryForm() {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [eventOptions, setEventOptions] = useState<EventOption[]>([])

  const { events, entries, setEntries } = useContext(CalendarContext)

  const form = useForm<z.infer<typeof addEntryFormSchema>>({
    resolver: zodResolver(addEntryFormSchema),
    defaultValues: {
      eventId: '',
      startDateTime: undefined,
      endDateTime: undefined,
    },
  })

  useEffect(() => {
    let filteredEntries: EventOption[] = []

    if (events) {
      filteredEntries = events.map((event) => {
        const eventLabel = event.label
        let tags = event.tags
          ?.map((tag) => {
            return tag.label
          })
          .toString()

        tags = tags ? ''.concat('(', tags, ')') : ''

        return {
          id: event.iid,
          label: tags ? `${eventLabel} ${tags}` : eventLabel,
        }
      })
    }

    setEventOptions(filteredEntries)
  }, [events])

  const [addEventEntry, { loading, error }] =
    useMutation<AddEventEntryData>(ADD_EVENT_ENTRY)

  // if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof addEntryFormSchema>) {
    console.log(values)
    const { eventId, startDateTime, endDateTime } = values
    try {
      const { data } = await addEventEntry({
        variables: {
          input: {
            startDateTime: startDateTime.toISOString(),
            endDateTime: endDateTime.toISOString(),
            event: { iid: eventId },
          },
        },
      })

      if (data) {
        console.log(data)
        setEntries([...entries, ...data.addEventEntry.eventEntry])
        closeButtonRef?.current?.click()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="eventId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <TypographySmall>Event</TypographySmall>
              </FormLabel>
              <SelectEvent
                onValueChange={field.onChange}
                defaultValue={field.value}
                options={eventOptions}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                <TypographySmall>From</TypographySmall>
              </FormLabel>
              <SingleDateInput
                value={field.value}
                onChange={field.onChange}
                placeholder="Pick start date"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                <TypographySmall>To</TypographySmall>
              </FormLabel>
              <SingleDateInput
                value={field.value}
                onChange={field.onChange}
                placeholder="Pick end date"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-between gap-3">
          {!loading ? <Button type="submit">Submit</Button> : <ButtonLoading />}
          <DialogClose asChild>
            <Button type="button" variant="secondary" ref={closeButtonRef}>
              Cancel
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  )
}
