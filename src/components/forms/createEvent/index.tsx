import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../buttons'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../index'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import { ADD_EVENT } from '../../../gql/operations/addEvent'
import { createEventFormSchema } from '../../../schema/createEvent'
import { Input } from '../../ui/input/default'
import { Checkbox } from '../../ui/checkbox'
import { useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

type CreateEventFormProps = {
  onClose: () => void
}

export function CreateEventForm({ onClose }: CreateEventFormProps) {
  const [tags, setTags] = useState<{ id: string; label: string }[]>([])

  useEffect(() => {
    setTags([
      { id: 'id1', label: 'Day off' },
      { id: 'id2', label: 'At school' },
    ])
  }, [])

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

  const { user } = useAuth0()

  const inputNewTagRef = useRef<HTMLInputElement>(null)

  const [addEventEntry, { loading, error, data }] = useMutation(ADD_EVENT)

  if (error) console.log('error', error)

  function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    console.log(values)
    // const { label, tags } = values
    // addEventEntry({
    //   // variables: { eventInstance: { id: eventId }, startDateTime, endDateTime },
    // })
  }

  const handleOnClickNewTag = () => {
    if (inputNewTagRef.current) {
      let tagLabel = inputNewTagRef.current.value.trim()
      if (tagLabel.length > 0) {
        const exists = tags.find((e) => e.label === tagLabel)
        if (!exists) {
          const userId = user?.sub || 'auth0|undefined'
          const tagId = ''.concat(userId, '|', tagLabel)

          setTags([
            ...tags,
            {
              id: tagId,
              label: tagLabel,
            },
          ])

          inputNewTagRef.current.value = ''
        }
      }
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
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="Enter event label" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel>Tags</FormLabel>
              <FormDescription>
                Choose an existing tag or create a new one
              </FormDescription>
              {tags.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="tags"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            // checked={field.value?.includes(item)}
                            checked={
                              !!field.value?.find((v) => v.id === item.id)
                            }
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value.id !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
              <FormDescription>New tag</FormDescription>
              <div className="flex flex-row gap-4">
                <Input placeholder="Enter tag label" ref={inputNewTagRef} />
                <Button
                  type="button"
                  variant="outline"
                  className="w-min"
                  onClick={handleOnClickNewTag}
                >
                  Create tag
                </Button>
              </div>
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
