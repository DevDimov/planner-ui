import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addEntryFormSchema } from '../../../schema/addEntry'
import { z } from 'zod'

import { Button } from '../../buttons'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../index'
import { SelectEvent } from '../../select/selectEvent'
import { SingleDateInput } from '../../input/singleDateInput'
import { TypographyLarge } from '../../typography/large'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventEntry'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { EventEntry } from '../../../gql/codegen/graphql'
import lodash from 'lodash'
import { useContext, useEffect, useState } from 'react'

type AddEntryFormProps = {
  onClose: () => void
}

type EventOption = {
  id: string
  label: string
}

export function AddEntryForm({ onClose }: AddEntryFormProps) {
  const [eventOptions, setEventOptions] = useState<EventOption[]>([])

  const { entries, setEntries } = useContext(CalendarContext)

  const form = useForm<z.infer<typeof addEntryFormSchema>>({
    resolver: zodResolver(addEntryFormSchema),
    defaultValues: {
      eventId: '',
      startDateTime: undefined,
      endDateTime: undefined,
    },
  })

  useEffect(() => {
    let uniqueEntries: EventEntry[] = []
    if (entries) {
      uniqueEntries = lodash.uniqBy(entries, (e) => {
        return e.event.id
      })
    }

    let filteredEntries: EventOption[] = []

    if (uniqueEntries) {
      filteredEntries = uniqueEntries.map((entry) => {
        const eventLabel = entry.event.label
        const tags = entry.event.tags
          ?.map((tag) => {
            return tag && tag.label
          })
          .toString()

        return {
          id: entry.event.iid,
          label: tags ? `${eventLabel} ${tags}` : eventLabel,
        }
      })
    }

    setEventOptions(filteredEntries)
  }, [entries])

  const [addEventEntry, { loading, error }] = useMutation(ADD_EVENT_ENTRY)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof addEntryFormSchema>) {
    const { eventId, startDateTime, endDateTime } = values
    const { data } = await addEventEntry({
      variables: {
        input: {
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          event: { id: eventId },
        },
      },
    })

    if (data) {
      setEntries([...entries, data?.addEventEntry?.eventEntry])
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
              <FormLabel>Event</FormLabel>
              <SelectEvent
                onValueChange={field.onChange}
                defaultValue={field.value}
                options={eventOptions}
                // options={[
                //   { id: 'student1', label: 'Student1 Label' },
                //   { id: 'student2', label: 'Student2 Label' },
                // ]}
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
              <FormLabel>From</FormLabel>
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
              <FormLabel>To</FormLabel>
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
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
