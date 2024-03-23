import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../../buttons'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../../index'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../../../ui/button/buttonLoading'
import { editEventPropertiesFormSchema } from '../../../../../schema/editEventProperties'
import { Input } from '../../../../ui/input/default'
import { useContext, useMemo, useRef } from 'react'
import { EventPropertyData } from '../../../../../models/eventProperty'
import { DELETE_EVENT_PROPERTY } from '../../../../../gql/operations/deleteEventProperty'
import { CalendarContext } from '../../../../../context/calendar'
import { editEventPropertyFormSchema } from '../../../../../schema/editEventProperty'
import { UPDATE_EVENT_PROPERTY } from '../../../../../gql/operations/updateEventProperty'
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'

type EditEventPropertyFormProps = {
  entryIid?: string
  eventIid: string
  property: EventPropertyData
}

export function EditEventPropertyForm({
  eventIid,
  property,
}: EditEventPropertyFormProps) {
  const { removeEventProperty } = useContext(CalendarContext)

  const form = useForm<z.infer<typeof editEventPropertyFormSchema>>({
    resolver: zodResolver(editEventPropertyFormSchema),
    defaultValues: property,
  })

  const [updateEventMutation, { loading: loadingUpdateProp }] = useMutation(
    UPDATE_EVENT_PROPERTY
  )

  const [deleteEventPropertyMutation, { loading: loadingDeleteProp }] =
    useMutation(DELETE_EVENT_PROPERTY)

  const handleDeleteEventProperty = async () => {
    const { iid } = property

    const { data } = await deleteEventPropertyMutation({
      variables: { filter: { iid: [iid] } },
    })

    if (data) {
      console.log(data)
      removeEventProperty(eventIid, iid)
    }
  }

  // if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof editEventPropertyFormSchema>) {
    console.log(values)
    const { label, value } = values

    const { data } = await updateEventMutation({
      variables: {
        input: {
          filter: {
            iid: [eventIid],
          },
          set: {
            label,
            value,
          },
        },
      },
    })

    if (data) {
      console.log('Event property updated', data)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        <div className="flex flex-row gap-x-2" key={property.iid}>
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input placeholder="Enter label" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    key={property.iid}
                    placeholder="Enter value"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loadingUpdateProp ? (
            <ButtonLoading label="Update" />
          ) : (
            <Button type="submit" variant="outline" className="px-1.5 py-1">
              <CheckIcon className="h-full w-full" />
            </Button>
          )}
          {loadingDeleteProp ? (
            <ButtonLoading label="Remove" />
          ) : (
            <Button
              type="button"
              variant="outline"
              title="Remove property"
              onClick={handleDeleteEventProperty}
              className="px-2 py-1.5"
            >
              <TrashIcon className="h-full w-full" />
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
