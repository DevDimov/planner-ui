import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormSetError, useFieldArray, useForm } from 'react-hook-form'
import { addEntryFormSchema, rangeIsValid } from '../../../schema/addEntry'
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
import { useContext, useRef } from 'react'
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
import isEqual from 'date-fns/isEqual'
import { cn } from '../../../utils'
import { TrashIcon } from '@radix-ui/react-icons'
import {
  AddEventEntryMutationVariables,
  TagColor,
} from '../../../gql/codegen/graphql'
import { getAddEventInput } from '../utils/getAddEventInput'
import { useAuth0 } from '@auth0/auth0-react'
import { getUserInput } from '../utils/getUserInput'
import { getUserId } from '../utils/getUserId'
import { getAddEntryInput } from '../utils/getAddEntryInput'
import TagColourSelect from '../../select/TagColourSelect'

type AddEventEntryData = {
  addEventEntry: {
    eventEntry: EventEntryData[] | null
  }
}

export function AddEntryForm() {
  const inputNewTagRef = useRef<HTMLInputElement>(null)
  const tagColourSelectRef = useRef<TagColor>(TagColor.Default)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const [range, setRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from: undefined, to: undefined })

  const { toast } = useToast()
  const { user } = useAuth0()

  const { tags, addEventEntry } = useContext(CalendarContext)

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

  const [addEventEntryMutation, { loading }] = useMutation<
    AddEventEntryData,
    AddEventEntryMutationVariables
  >(ADD_EVENT_ENTRY)

  const handleOnClickNewTag = (formSetError: UseFormSetError<schemaType>) => {
    if (inputNewTagRef.current) {
      let tagLabel = inputNewTagRef.current.value.trim()
      let tagColour = tagColourSelectRef.current

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

      append({ label: tagLabel, colour: tagColour })

      inputNewTagRef.current.value = ''
    }
  }

  async function onSubmit(values: schemaType) {
    const { eventLabel, entries, existingTags, newTags } = values
    const userId = getUserId({ user })
    const userPayload = getUserInput({ user })
    if (userId && userPayload) {
      const eventPayload = getAddEventInput({ userId, userPayload, eventLabel })
      const entriesPayload = getAddEntryInput({
        userId,
        userPayload,
        eventPayload,
        entries,
        existingTags,
        newTags,
      })

      addEventEntryMutation({
        variables: {
          input: entriesPayload,
        },
      })
        .then((response) => {
          const { data, errors } = response
          if (data) {
            console.log(data)
            const newEntries = data.addEventEntry.eventEntry
            if (newEntries) {
              addEventEntry(newEntries)
              closeButtonRef?.current?.click()
              toast({
                description:
                  newEntries.length > 1
                    ? `${newEntries.length} event entries added.`
                    : 'Event entry added.',
              })
            }
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
            <div
              className={cn(
                'grid auto-rows-auto grid-cols-[2fr_2fr_min-content] items-center gap-x-3 gap-y-2'
              )}
            >
              <div>
                <TypographySmall>From</TypographySmall>
              </div>
              <div className="col-span-2">
                <TypographySmall>To</TypographySmall>
              </div>
              {fieldsEntries.length > 0 &&
                fieldsEntries.map((field, index) => (
                  <>
                    <TypographyMuted>
                      {format(field.startDateTime, 'PPP')}
                    </TypographyMuted>
                    <TypographyMuted>
                      {format(field.endDateTime, 'PPP')}
                    </TypographyMuted>
                    <Button
                      key={'removeEntryButton' + index}
                      type="button"
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground"
                      size={'sm'}
                      onClick={() => {
                        removeEntry(index)
                        form.clearErrors('entries')
                      }}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </Button>
                  </>
                ))}
              <SingleDateInput
                value={range.from}
                onChange={(day) => {
                  setRange({ ...range, from: day })
                }}
                key={'startDateInput'}
                placeholder="Pick start date"
              />
              <SingleDateInput
                value={range.to}
                onChange={(day) => {
                  setRange({ ...range, to: day })
                }}
                key={'endDateInput'}
                placeholder="Pick end date"
              />
              <Button
                key="AddDateRangeButton"
                type="button"
                variant="outline"
                className="w-min self-end"
                onClick={() => {
                  const { from, to } = range

                  if (!from || !to) {
                    return form.setError('entries', {
                      type: 'string',
                      message: 'Pick a start and end date',
                    })
                  }

                  if (from && to) {
                    const duplicateRange = fieldsEntries.find(
                      (entry) =>
                        isEqual(entry.startDateTime, from) &&
                        isEqual(entry.endDateTime, to)
                    )
                    if (duplicateRange) {
                      return form.setError('entries', {
                        type: 'string',
                        message:
                          'An entry with the same duration was already added',
                      })
                    }

                    const dateRangeIsValid = rangeIsValid(from, to)

                    if (!dateRangeIsValid) {
                      return form.setError('entries', {
                        type: 'string',
                        message: 'The start date must be before the end date',
                      })
                    }

                    appendEntry({
                      startDateTime: from,
                      endDateTime: to,
                    })

                    setRange({ from: undefined, to: undefined })
                    form.clearErrors('entries')
                  }
                }}
              >
                Add
              </Button>

              <div className="col-span-3">
                <FormMessage />
              </div>
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
                      key={'formField' + item.id}
                      control={form.control}
                      name="existingTags"
                      render={({ field }) => {
                        const checked = field.value?.find(
                          (v) => v.id === item.id
                        )
                          ? true
                          : false

                        return (
                          <FormItem key={'formItem' + item.id}>
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
                                color={item.color}
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
                        color={fieldsNewTags[index].colour}
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
                <TagColourSelect
                  defaultValue={TagColor.Default}
                  onValueChange={(value) =>
                    (tagColourSelectRef.current = TagColor[value])
                  }
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
