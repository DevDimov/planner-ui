import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../buttons'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import lodash from 'lodash'
import { ADD_EVENT } from '../../../gql/operations/addEvent'
import { createEventFormSchema } from '../../../schema/createEvent'
import { Input } from '../../ui/input/default'

type CreateEventFormProps = {
  onClose: () => void
}

export function CreateEventForm({ onClose }: CreateEventFormProps) {
  // const [eventOptions, setEventOptions] = useState<
  //   { id: string; label: string }[]
  // >([])

  // const { occurrences } = React.useContext(CalendarContext)

  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      label: '',
      tags: [],
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

  const [addEventEntry, { loading, error, data }] = useMutation(ADD_EVENT)

  if (error) console.log('error', error)

  function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    // const { label, tags } = values
    // addEventEntry({
    //   // variables: { eventInstance: { id: eventId }, startDateTime, endDateTime },
    // })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event label</FormLabel>
              <FormControl>
                <Input placeholder="Enter label" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tags</FormLabel>
              <Input placeholder="Enter tags" {...field} />
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
