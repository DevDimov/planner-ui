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
import { ADD_EVENT } from '../../../gql/operations/addEvent'
import { createEventFormSchema } from '../../../schema/createEvent'
import { Input } from '../../ui/input/default'
import { Checkbox } from '../../ui/checkbox'
import { useContext, useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { EventData } from '../../../models/event'
import { TypographySmall } from '../../typography/small'
import { DialogClose } from '@radix-ui/react-dialog'

type AddEventData = {
  addEvent: {
    event: EventData[]
  }
}

export function CreateEventForm() {
  const inputNewTagRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const newlyAddedTags = useRef<string[]>([])

  const { tags: allTags, addEvent } = useContext(CalendarContext)

  const [tags, setTags] = useState<{ id: string; label: string }[]>([])

  useEffect(() => {
    const currentTags = allTags.map((tag) => {
      return { id: tag.id, label: tag.label }
    })
    setTags(currentTags)
  }, [allTags])

  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      label: '',
      tags: [],
    },
  })

  const { user } = useAuth0()

  const [addEventMutation, { loading, error }] =
    useMutation<AddEventData>(ADD_EVENT)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof createEventFormSchema>) {
    const { label, tags } = values
    const tagsString = tags.map((tag) => tag.label).toString()
    const userId = user?.sub || 'auth0|undefined'
    const userPayload = { email: user?.email }
    const eventId = ''.concat(userId, '|', label, '|', tagsString)
    const tagsPayload = tags.map((tag) => {
      return { ...tag, user: userPayload }
    })

    addEventMutation({
      variables: {
        input: [{ id: eventId, label, user: userPayload, tags: tagsPayload }],
      },
    })
      .then((response) => {
        const newEvent = response.data?.addEvent?.event?.[0]
        console.log(newEvent)
        if (newEvent) {
          addEvent(newEvent)
          closeButtonRef?.current?.click()
        }
      })
      .catch((error) => {
        console.log(error)
      })
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

          newlyAddedTags.current.push(tagId)

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
          name="tags"
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
                  name="tags"
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
                  Add
                </Button>
              </div>
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
