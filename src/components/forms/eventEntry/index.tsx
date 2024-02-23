import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { eventEntryFormSchema } from '../../../schema/eventEntry'
import { z } from 'zod'

import { Button } from '../../buttons'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index'
// import { Input } from '@/components/ui/input'
import { SelectEvent } from '../../select/selectEvent'
import { SingleDateInput } from '../../input/singleDateInput'
import { TypographyLarge } from '../../typography/large'

export function EventEntryForm() {
  const form = useForm<z.infer<typeof eventEntryFormSchema>>({
    resolver: zodResolver(eventEntryFormSchema),
    defaultValues: {
      eventId: '',
      // fromDateTime: '',
      // toDateTime: '',
    },
  })

  function onSubmit(values: z.infer<typeof eventEntryFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <TypographyLarge>Add event entry</TypographyLarge>
        <FormField
          control={form.control}
          name="eventId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event</FormLabel>
              <SelectEvent
                onValueChange={field.onChange}
                defaultValue={field.value}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fromDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <SingleDateInput value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="toDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>To</FormLabel>
              <SingleDateInput value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
