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
import { Input } from '../../../../ui/input/default'
import { useContext } from 'react'
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
  const { updateEventProperty, removeEventProperty } =
    useContext(CalendarContext)

  const form = useForm<z.infer<typeof editEventPropertyFormSchema>>({
    resolver: zodResolver(editEventPropertyFormSchema),
    defaultValues: property,
  })

  const [
    updateEventPropertyMutation,
    { loading: loadingUpdateProp, error: errorUpdateProp },
  ] = useMutation(UPDATE_EVENT_PROPERTY)

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
  if (errorUpdateProp) console.log('error updating prop', errorUpdateProp)

  async function onSubmit(values: z.infer<typeof editEventPropertyFormSchema>) {
    const iid = property.iid
    const { label, value } = values

    const { data } = await updateEventPropertyMutation({
      variables: {
        input: {
          filter: {
            iid: [iid],
          },
          set: {
            label,
            value,
          },
        },
      },
    })

    if (data) {
      const response = data?.updateEventProperty?.eventProperty?.[0]

      if (response) {
        const { iid, id, label, value } = response
        const newProperty = {
          iid,
          id,
          label,
          value,
        }
        console.log('Event property updated', response)
        updateEventProperty(eventIid, newProperty)
      }
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
            <Button type="submit" variant="ghost" size="icon">
              <CheckIcon className="h-6 w-6" />
            </Button>
          )}
          {loadingDeleteProp ? (
            <ButtonLoading label="Remove" />
          ) : (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              title="Remove property"
              onClick={handleDeleteEventProperty}
              className="hover:text-destructive"
            >
              <TrashIcon className="h-5 w-5" />
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
