import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormSetError, useFieldArray, useForm } from 'react-hook-form'
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
import { TypographySmall } from '../../typography/small'
import { DialogClose } from '@radix-ui/react-dialog'
import { useToast } from '../../ui/toast/use-toast'
import { SingleDateInput } from '../../input/singleDateInput'
import EventTag from '../../tags/eventTag'
import { TypographyH3 } from '../../typography/h3'
import { getAddEventInput } from '../utils/getAddEventInput'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventEntry'
import { getAddEventEntryInput } from '../utils/getAddEventEntryInput'
import { TagColor } from '../../../gql/codegen/graphql'
import { TagData } from '../../../models/tag'
import { EventPropertyData } from '../../../models/eventProperty'

export function CreateEventForm() {
  const inputNewTagRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const { user } = useAuth0()
  const { toast } = useToast()

  const {
    tags: existingsTags,
    addEvent,
    addEventEntry,
  } = useContext(CalendarContext)

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

  const {
    fields: fieldsNewTags,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: 'newTags',
  })

  const [addEventMutation, { loading, error }] = useMutation(ADD_EVENT)
  const [addEventEntryMutation] = useMutation(ADD_EVENT_ENTRY)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    const addEventInput = getAddEventInput({ user, formValues: values })

    addEventMutation({
      variables: {
        upsert: true,
        input: addEventInput,
      },
    })
      .then((response) => {
        const newEvent = response.data?.addEvent?.event?.[0]
        if (newEvent) {
          console.log('Event created.', newEvent)

          const { iid, id, label, properties } = newEvent
          let propertyData: EventPropertyData[] = []
          if (properties && properties.length > 0) {
            propertyData = properties.map((newProperty) => {
              return {
                iid: newProperty?.iid || '',
                id: newProperty?.id || '',
                label: newProperty?.label || '',
                value: newProperty?.value || '',
              }
            })
          }
          addEvent({ iid, id, label, properties: propertyData })

          const addEventEntryInput = getAddEventEntryInput({
            user,
            eventId: addEventInput.id,
            formValues: values,
          })

          toast({
            description: 'Event created.',
          })

          addEventEntryMutation({
            variables: {
              input: addEventEntryInput,
            },
          })
            .then((response) => {
              const newEntry = response.data?.addEventEntry?.eventEntry?.[0]
              const newTags = newEntry?.tags
              let tagData: TagData[] = []
              if (newTags && newTags.length > 0) {
                tagData = newTags.map((newTag) => {
                  return {
                    iid: newTag?.iid || '',
                    id: newTag?.id || '',
                    label: newTag?.label || '',
                    color: newTag?.color || TagColor.Default,
                  }
                })
              }

              if (newEntry) {
                addEventEntry({
                  iid: newEntry?.iid,
                  startDateTime: newEntry?.startDateTime,
                  endDateTime: newEntry?.endDateTime,
                  event: {
                    iid,
                    label,
                  },
                  tags: tagData,
                })

                console.log('Event entry.', newEntry)

                toast({
                  description: 'Entry added.',
                })

                closeButtonRef?.current?.click()
              }
            })
            .catch((error) => {
              toast({
                title: 'Something went wrong.',
                description: error,
                variant: 'destructive',
              })
              console.log(error)
            })
        }
      })
      .catch((error) => {
        toast({
          title: 'Something went wrong.',
          description: error,
          variant: 'destructive',
        })
        console.log(error)
      })
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

      const existsInNewlyAddedTags = fieldsNewTags.find(
        (e) => e.label === tagLabel
      )

      if (existsInNewlyAddedTags) {
        formSetError('newTags', {
          type: 'string',
          message: 'A tag with this label was already added',
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
        <div className="flex flex-col gap-1">
          <TypographyH3>Create event</TypographyH3>
          <FormDescription>
            Create a new event with at least one entry.
          </FormDescription>
        </div>
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

        <div className="flex flex-row gap-3">
          <FormField
            control={form.control}
            name="entry.startDateTime"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
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
              <FormItem className="flex w-full flex-col">
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
        </div>

        <FormField
          control={form.control}
          name="existingTags"
          render={() => (
            <FormItem className="flex flex-col">
              <FormLabel>
                <TypographySmall>Tags (optional)</TypographySmall>
              </FormLabel>
              {tags.length > 0 && (
                <div className="flex flex-wrap items-end justify-items-start gap-2">
                  <FormDescription className="w-full">
                    Choose an existing tag or add new one
                  </FormDescription>
                  {tags.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="existingTags"
                      render={({ field }) => {
                        const checked = field.value?.find(
                          (v) => v.id === item.id
                        )
                          ? true
                          : false

                        return (
                          <FormItem key={item.id}>
                            <FormControl>
                              <Checkbox
                                className="hidden"
                                checked={checked}
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
                            <FormLabel>
                              <EventTag
                                label={item.label}
                                variant={checked ? 'checked' : 'outline'}
                              ></EventTag>
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  {fieldsNewTags.length > 0 &&
                    fieldsNewTags.map((field, index) => (
                      <EventTag
                        variant="checked"
                        label={fieldsNewTags[index].label}
                        key={field.id}
                        onClick={() => remove(index)}
                      />
                    ))}
                </div>
              )}
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
              <div className="flex flex-row gap-3">
                <Input
                  placeholder="Label"
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
