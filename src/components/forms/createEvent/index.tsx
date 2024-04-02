import { zodResolver } from '@hookform/resolvers/zod'
import {
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
  useFieldArray,
  useForm,
} from 'react-hook-form'
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
import { ADD_EVENT } from '../../../gql/operations/addEvent'
import { createEventFormSchema } from '../../../schema/createEvent'
import { Input } from '../../ui/input/default'
import { Checkbox } from '../../ui/checkbox'
import { useContext, useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { EventData } from '../../../models/event'
import { TypographySmall } from '../../typography/small'
import { DialogClose } from '@radix-ui/react-dialog'
import { useToast } from '../../ui/toast/use-toast'
import { SingleDateInput } from '../../input/singleDateInput'
import { TypographyMuted } from '../../typography/muted'
import EventTag from '../../tags/eventTag'

type AddEventData = {
  addEvent: {
    event?: EventData[]
  }
}

export function CreateEventForm() {
  const inputNewTagRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const { user } = useAuth0()
  const { toast } = useToast()

  const { tags: existingsTags, addEvent } = useContext(CalendarContext)

  const [tags, setTags] = useState<{ id: string; label: string }[]>([])

  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      label: '',
      entry: {},
      existingTags: [],
      newTags: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'newTags',
  })

  const [addEventMutation, { loading, error }] =
    useMutation<AddEventData>(ADD_EVENT)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    // const { label, entry, existingTags, newTags } = values
    // const tagsString = tags?.map((tag) => tag.label).toString()
    // const userId = user?.sub || 'auth0|undefined'
    // const userPayload = { email: user?.email }
    // const eventId = ''.concat(userId, '|', label, '|', tagsString || '')
    // const tagsPayload = tags.map((tag) => {
    //   return { ...tag, user: userPayload }
    // })

    console.log(values)

    // addEventMutation({
    //   variables: {
    //     input: [{ id: eventId, label, user: userPayload, tags: tagsPayload }],
    //   },
    // })
    //   .then((response) => {
    //     const newEvent = response.data?.addEvent?.event?.[0]
    //     console.log(newEvent)
    //     if (newEvent) {
    //       addEvent(newEvent)
    //       closeButtonRef?.current?.click()
    //       toast({
    //         description: 'Event created.',
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     toast({
    //       title: 'Something went wrong.',
    //       description: error,
    //       variant: 'destructive',
    //     })
    //     console.log(error)
    //   })
  }

  const handleOnClickNewTag = (
    formSetError: UseFormSetError<z.infer<typeof createEventFormSchema>>
  ) => {
    if (inputNewTagRef.current) {
      let tagLabel = inputNewTagRef.current.value.trim()

      if (tagLabel.length === 0) {
        formSetError('newTags', {
          type: 'string',
          message: 'Cannot add empty label',
        })
        return
      }

      const existsInCurrentTags = tags.find((e) => e.label === tagLabel)

      if (existsInCurrentTags) {
        formSetError('newTags', {
          type: 'string',
          message: 'A tag with this label already exists',
        })
        return
      }

      const existsInNewlyAddedTags = fields.find((e) => e.label === tagLabel)

      if (existsInNewlyAddedTags) {
        formSetError('newTags', {
          type: 'string',
          message: 'A tag with this was already added',
        })
        return
      }

      append({ label: tagLabel })

      inputNewTagRef.current.value = ''
    }
  }

  useEffect(() => {
    const currentTags = existingsTags.map((tag) => {
      return { id: tag.id, label: tag.label }
    })
    setTags(currentTags)
  }, [existingsTags])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        {/* <TypographyMuted>Event details (Required)</TypographyMuted> */}
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <TypographySmall>Label</TypographySmall>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter event label" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <TypographyMuted>Entry (Optional)</TypographyMuted> */}
        <FormField
          control={form.control}
          name="entry.startDateTime"
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
          name="entry.endDateTime"
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
        <FormField
          control={form.control}
          name="existingTags"
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel>
                <TypographySmall>Tags</TypographySmall>
              </FormLabel>
              {tags.length > 0 && (
                <FormDescription>
                  Choose an existing tag or add new one
                </FormDescription>
              )}
              {tags.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="existingTags"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={
                              field.value?.find((v) => v.id === item.id)
                                ? true
                                : false
                            }
                            onCheckedChange={(checked) => {
                              const tags = field.value || []
                              return checked
                                ? field.onChange([...tags, item])
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
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newTags"
          render={() => (
            <FormItem className="flex flex-col">
              <FormDescription>New tag</FormDescription>
              <div className="flex flex-row gap-4">
                <Input
                  placeholder="Enter tag label"
                  ref={inputNewTagRef}
                  onChange={() => form.clearErrors('newTags')}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-min"
                  onClick={() => handleOnClickNewTag(form.setError)}
                >
                  Add
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-2">
          {fields.map((field, index) => (
            <button
            // {...form.register(`newTags.${index}.label`)}
            >
              <EventTag
                variant="removable"
                label={fields[index].label}
                key={field.id}
                onClick={() => remove(index)}
              />
            </button>
          ))}
        </div>

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
