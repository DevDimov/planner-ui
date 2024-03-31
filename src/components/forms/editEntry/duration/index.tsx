import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { editEntryDurationFormSchema } from '../../../../schema/editEntryDuration'
import { z } from 'zod'
import { Button } from '../../../buttons'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../../index'
import { SingleDateInput } from '../../../input/singleDateInput'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../../ui/button/buttonLoading'
import { UPDATE_EVENT_ENTRY } from '../../../../gql/operations/updateEventEntry'
import { TypographySmall } from '../../../typography/small'
import { useContext } from 'react'
import { CalendarContext } from '../../../../context/calendar'
import { useToast } from '../../../ui/toast/use-toast'

type EditEntryDurationFormProps = {
  entryIid: string
  handleCancelEditing: () => void
  startDateTime: Date
  endDateTime: Date
}

export function EditEntryDurationForm({
  entryIid,
  handleCancelEditing,
  startDateTime,
  endDateTime,
}: EditEntryDurationFormProps) {
  const { toast } = useToast()
  const { updateEventEntry } = useContext(CalendarContext)

  const form = useForm<z.infer<typeof editEntryDurationFormSchema>>({
    resolver: zodResolver(editEntryDurationFormSchema),
    defaultValues: {
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    },
  })

  const [updateEventEntryMutation, { loading, error }] =
    useMutation(UPDATE_EVENT_ENTRY)

  if (error) console.log('Error updating entry duration', error)

  async function onSubmit(values: z.infer<typeof editEntryDurationFormSchema>) {
    const { startDateTime, endDateTime } = values
    const { data, errors } = await updateEventEntryMutation({
      variables: {
        input: {
          filter: {
            iid: [entryIid],
          },
          set: {
            startDateTime: startDateTime.toISOString(),
            endDateTime: endDateTime.toISOString(),
          },
        },
      },
    })

    if (data) {
      const response = data.updateEventEntry?.eventEntry?.[0]
      if (response) {
        updateEventEntry(response)
        handleCancelEditing()
        toast({
          description: 'Entry duration updated.',
        })
      }
    }

    if (errors) {
      toast({
        description: 'There was an error updating entry.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                <TypographySmall>From</TypographySmall>
              </FormLabel>
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
              <FormLabel>
                <TypographySmall>To</TypographySmall>
              </FormLabel>
              <SingleDateInput value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-3 flex justify-between gap-3">
          {loading ? <ButtonLoading /> : <Button type="submit">Update</Button>}
          {/* <Button
            type="button"
            variant="secondary"
            onClick={handleCancelEditing}
          >
            Cancel
          </Button> */}
        </div>
      </form>
    </Form>
  )
}
