import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addEntryFormSchema } from '../../../schema/addEntry'
import { z } from 'zod'

import { Button } from '../../buttons'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../index'
import { SelectEvent } from '../../select/selectEvent'
import { SingleDateInput } from '../../input/singleDateInput'
import { TypographyLarge } from '../../typography/large'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventInstanceOccurrence'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import lodash from 'lodash'

type AddEntryFormProps = {
  onClose: () => void
}

export function AddEntryForm({ onClose }: AddEntryFormProps) {
  // const [eventOptions, setEventOptions] = useState<
  //   { id: string; label: string }[]
  // >([])

  // const { occurrences } = React.useContext(CalendarContext)

  const form = useForm<z.infer<typeof addEntryFormSchema>>({
    resolver: zodResolver(addEntryFormSchema),
    defaultValues: {
      eventId: '',
      startDateTime: undefined,
      endDateTime: undefined,
    },
  })

  // useEffect(() => {
  //   let uniqueEntries: EventInstanceOccurrence[] = []
  //   if (occurrences) {
  //     uniqueEntries = lodash.uniqBy(occurrences, (e) => {
  //       return e.eventInstance.id
  //     })
  //   }

  //   let filteredEntries: { id: string; label: string }[] = []

  //   if (uniqueEntries) {
  //     filteredEntries = uniqueEntries.map((entry) => {
  //       return {
  //         label: entry.eventInstance.id,
  //         id: entry.eventInstance.iid,
  //         // label: entry.eventInstance.label,
  //       }
  //     })
  //   }

  //   console.log(uniqueEntries)

  //   setEventOptions(filteredEntries)
  // }, [occurrences])

  const [addEventEntry, { loading, error, data }] = useMutation(ADD_EVENT_ENTRY)

  if (error) console.log('error', error)

  function onSubmit(values: z.infer<typeof addEntryFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    const { eventId, startDateTime, endDateTime } = values
    addEventEntry({
      // variables: { eventInstance: { id: eventId }, startDateTime, endDateTime },
    })
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
                // options={eventOptions}
                options={[
                  { id: 'student1', label: 'Student1 Label' },
                  { id: 'student2', label: 'Student2 Label' },
                ]}
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
