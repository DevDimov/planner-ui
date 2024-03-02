import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { editEntryFormSchema } from '../../../schema/editEntry'
import { z } from 'zod'

import { Button } from '../../buttons'
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index'
import { SelectEvent } from '../../select/selectEvent'
import { SingleDateInput } from '../../input/singleDateInput'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventEntry'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { EventEntry } from '../../../gql/codegen/graphql'
import lodash from 'lodash'
import { useContext, useEffect, useState } from 'react'
import { UPDATE_EVENT_ENTRY } from '../../../gql/operations/updateEventEntry'
import FormTitle from '../../ui/form/formTitle'

type EditEntryFormProps = {
  eventLabel: string
  handleCancelEditing: () => void
  startDateTime: Date
  endDateTime: Date
  onClose?: () => void
}

export function EditEntryForm({
  eventLabel,
  handleCancelEditing,
  startDateTime,
  endDateTime,
}: EditEntryFormProps) {
  const form = useForm<z.infer<typeof editEntryFormSchema>>({
    resolver: zodResolver(editEntryFormSchema),
    defaultValues: {
      entryIid: '',
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    },
  })

  const [updateEventEntry, { loading, error }] = useMutation(UPDATE_EVENT_ENTRY)

  // if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof editEntryFormSchema>) {
    console.log(values)
    // const { entryIid, startDateTime, endDateTime } = values
    // const { data } = await addEventEntry({
    //   variables: {
    //     input: {
    //       startDateTime: startDateTime.toISOString(),
    //       endDateTime: endDateTime.toISOString(),
    //       event: { id: eventId },
    //     },
    //   },
    // })

    // if (data) {
    //   setEntries([...entries, data?.addEventEntry?.eventEntry])
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <div className="flex flex-col gap-y-1.5">
          <FormTitle>{eventLabel}</FormTitle>
          <FormDescription>
            Set a new start and end date for this entry
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>From</FormLabel>
              <SingleDateInput value={field.value} onChange={field.onChange} />
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
              <SingleDateInput value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-between gap-3">
          {loading ? <ButtonLoading /> : <Button type="submit">Submit</Button>}
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancelEditing}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
