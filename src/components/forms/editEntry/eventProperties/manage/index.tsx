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
import { useContext, useEffect, useMemo, useRef } from 'react'
import { UPDATE_EVENT } from '../../../../../gql/operations/updateEvent'
import { EventPropertyData } from '../../../../../models/eventProperty'
import { useAuth0 } from '@auth0/auth0-react'
import { DELETE_EVENT_PROPERTY } from '../../../../../gql/operations/deleteEventProperty'
import { AddEventPropertyForm } from '../add'
import { CalendarContext } from '../../../../../context/calendar'

type EditEventPropertiesFormProps = {
  entryIid?: string
  eventIid: string
  handleCancelEditing: () => void
  properties: EventPropertyData[]
}

export function EditEventPropertiesForm({
  eventIid,
  handleCancelEditing,
  properties: eventPropertyData,
}: EditEventPropertiesFormProps) {
  const { user } = useAuth0()
  const { removeEventProperty } = useContext(CalendarContext)
  const beingRemoved = useRef<string[]>([])

  const formDefaultValues = useMemo(
    () => ({
      eventIid: eventIid,
      properties: eventPropertyData,
    }),
    [eventIid, eventPropertyData]
  )

  const form = useForm<z.infer<typeof editEventPropertiesFormSchema>>({
    resolver: zodResolver(editEventPropertiesFormSchema),
    defaultValues: formDefaultValues,
  })

  const [updateEventMutation, { loading, error }] = useMutation(UPDATE_EVENT)

  const [deleteEventPropertyMutation, { loading: loadingDeleteProp }] =
    useMutation(DELETE_EVENT_PROPERTY)

  const handleDeleteEventProperty = async (iid: string) => {
    beingRemoved.current.push(iid)

    const { data } = await deleteEventPropertyMutation({
      variables: { filter: { iid: [iid] } },
    })

    if (data) {
      console.log(data)
      removeEventProperty(eventIid, iid)
      beingRemoved.current.filter((currentIid) => currentIid !== iid)
    }
  }

  if (error) console.log('error', error)

  async function onSubmit(
    values: z.infer<typeof editEventPropertiesFormSchema>
  ) {
    // console.log(values)
    const { eventIid, properties } = values
    const userId = user?.sub || 'auth0|undefined'
    const newProperties = properties.map((prop) => {
      return {
        id: ''.concat(userId, '|', eventIid, '|', prop.label),
        label: prop.label,
        value: prop.value,
        event: {
          iid: eventIid,
        },
      }
    })
    console.log('New props', newProperties)
    const { data } = await updateEventMutation({
      variables: {
        input: {
          filter: {
            iid: [eventIid],
          },
          set: {
            properties: newProperties,
          },
        },
      },
    })

    if (data) {
      console.log('Event properties updated', data)
      handleCancelEditing()
    }
  }

  useEffect(() => {
    form.reset({ ...formDefaultValues, properties: eventPropertyData })
  }, [form, formDefaultValues, eventPropertyData])

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-2"
        >
          {eventPropertyData.map((prop, index) => {
            return (
              <div className="flex flex-row gap-x-2" key={prop.iid}>
                <FormField
                  control={form.control}
                  name={`properties.${index}.label`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          key={prop.iid + 'propLabel'}
                          placeholder="Enter label"
                          value={field.value || 'Label'}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`properties.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          key={prop.iid + 'propValue'}
                          placeholder="Enter value"
                          value={field.value || "Value"}
                          onChange={field.onChange}
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {loadingDeleteProp &&
                beingRemoved.current.includes(prop.iid) ? (
                  <ButtonLoading label="Remove" />
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    title="Remove property"
                    onClick={() => handleDeleteEventProperty(prop.iid)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            )
          })}

          <div className="mt-1 flex justify-between">
            {loading ? (
              <ButtonLoading />
            ) : (
              <Button type="submit" variant="secondary">
                Update all
              </Button>
            )}
            <Button
              type="button"
              title="Finish editing properties"
              variant="outline"
              onClick={handleCancelEditing}
            >
              Done
            </Button>
          </div>
        </form>
      </Form>
      <AddEventPropertyForm eventIid={eventIid} />
    </>
  )
}
