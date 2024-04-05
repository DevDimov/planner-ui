import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormSetError, useFieldArray, useForm } from 'react-hook-form'
import { addEntryFormSchema } from '../../../schema/addEntry'
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
import { SingleDateInput } from '../../input/singleDateInput'
import { ADD_EVENT_ENTRY } from '../../../gql/operations/addEventEntry'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../ui/button/buttonLoading'
import { CalendarContext } from '../../../context/calendar'
import { useContext, useRef, useState } from 'react'
import { DialogClose } from '../../ui/dialog'
import { EventEntryData } from '../../../models/eventEntry'
import { TypographySmall } from '../../typography/small'
import { useToast } from '../../ui/toast/use-toast'
import { Input } from '../../ui/input/default'
import { Checkbox } from '@radix-ui/react-checkbox'
import EventTag from '../../tags/eventTag'
import { TypographyH3 } from '../../typography/h3'
import format from 'date-fns/format'
import { TypographyMuted } from '../../typography/muted'
import React from 'react'

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
  const inputNewTagRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const [eventOptions, setEventOptions] = useState<EventOption[]>([])
  const [range, setRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from: undefined, to: undefined })

  const { toast } = useToast()

  const { tags, addEvent, addEventEntry } = useContext(CalendarContext)

  type schemaType = z.infer<typeof addEntryFormSchema>

  const form = useForm<schemaType>({
    resolver: zodResolver(addEntryFormSchema),
    defaultValues: {
      eventLabel: '',
      entries: [],
      existingTags: [],
      newTags: [],
    },
  })

  const {
    fields: fieldsEntries,
    append: appendEntry,
    prepend: prependEntry,
    remove: removeEntry,
  } = useFieldArray({
    control: form.control,
    name: 'entries',
  })

  const {
    fields: fieldsNewTags,
    append,
    remove,
  } = useFieldArray({
    control: form.control,
    name: 'newTags',
  })

  // useEffect(() => {
  //   let filteredEntries: EventOption[] = []

  //   if (events) {
  //     filteredEntries = events.map((event) => {
  //       return {
  //         id: event.iid,
  //         label: event.label,
  //       }
  //     })
  //   }

  //   setEventOptions(filteredEntries)
  // }, [events])

  const [addEventEntryMutation, { loading }] =
    useMutation<AddEventEntryData>(ADD_EVENT_ENTRY)

  const handleOnClickNewTag = (formSetError: UseFormSetError<schemaType>) => {
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

  async function onSubmit(values: schemaType) {
    const { eventLabel, entries } = values

    addEventEntryMutation({
      variables: {
        input: {
          startDateTime: startDateTime.toISOString(),
          endDateTime: endDateTime.toISOString(),
          event: { iid: eventLabel },
        },
      },
    })
      .then((response) => {
        const { data, errors } = response
        if (data) {
          console.log(data)
          addEventEntry(data.addEventEntry.eventEntry[0])
          closeButtonRef?.current?.click()
          toast({
            description: 'Event entry added.',
          })
        }
        if (errors) {
          console.log(errors)
          toast({
            title: 'Something went wrong.',
            description: errors.toString(),
            variant: 'destructive',
          })
        }
      })
      .catch((error) => {
        console.log(error)
        toast({
          description: 'Something went wrong.',
          variant: 'destructive',
        })
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <div className="flex flex-col gap-1">
          <TypographyH3>Add entry</TypographyH3>
          <FormDescription>
            Add one or more entries to a new or existing event.
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="eventLabel"
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

        <FormField
          control={form.control}
          name="entries"
          render={() => (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end gap-3">
                <FormItem className="flex w-full flex-col">
                  <FormLabel>
                    <TypographySmall>From</TypographySmall>
                  </FormLabel>
                  <SingleDateInput
                    value={range.from}
                    onChange={(day) => {
                      setRange({ ...range, from: day })
                      // form.setError('entries', {
                      //   type: 'string',
                      //   message: 'Test',
                      // })
                    }}
                    placeholder="Pick start date"
                  />
                </FormItem>

                <FormItem className="flex w-full flex-col">
                  <FormLabel>
                    <TypographySmall>To</TypographySmall>
                  </FormLabel>
                  <SingleDateInput
                    value={range.to}
                    onChange={(day) => {
                      setRange({ ...range, to: day })
                    }}
                    placeholder="Pick end date"
                  />
                </FormItem>

                <Button
                  type="button"
                  variant="outline"
                  className="w-min"
                  onClick={() => {
                    if (range) {
                      const { from, to } = range
                      if (from && to) {
                        prependEntry({
                          startDateTime: from,
                          endDateTime: to,
                        })
                        setRange({ from: undefined, to: undefined })
                      }
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              <FormMessage />
              {fieldsEntries.length > 0 && (
                <div className="flex flex-col gap-0">
                  {fieldsEntries.map((field, index) => (
                    <div
                      key={'entryDuration' + index}
                      className="flex w-full flex-row items-center justify-items-center gap-3"
                    >
                      <TypographyMuted>
                        {format(field.startDateTime, 'PPP')}
                      </TypographyMuted>
                      <TypographyMuted>
                        {format(field.endDateTime, 'PPP')}
                      </TypographyMuted>
                      <Button
                        type="button"
                        variant="ghost"
                        className="w-min"
                        size="sm"
                        onClick={() => removeEntry(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
                <div className="flex flex-wrap items-end justify-items-start gap-2">
                  <FormDescription className="w-full">
                    Choose an existing tag or add new one. (Optional)
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
