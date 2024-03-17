import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../../buttons'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../../index'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../../ui/button/buttonLoading'
import { editEventPropertiesFormSchema } from '../../../../schema/editEventProperties'
import { Input } from '../../../ui/input/default'
import { useRef } from 'react'
import { UPDATE_EVENT } from '../../../../gql/operations/updateEvent'
import { EventPropertyData } from '../../../../models/eventProperty'
import { useAuth0 } from '@auth0/auth0-react'
import { TypographyMuted } from '../../../typography/muted'
import { DELETE_EVENT_PROPERTY } from '../../../../gql/operations/deleteEventProperty'
import { AddEventPropertyForm } from './addEventProperty'

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
  const form = useForm<z.infer<typeof editEventPropertiesFormSchema>>({
    resolver: zodResolver(editEventPropertiesFormSchema),
    defaultValues: {
      eventIid: eventIid,
      properties: eventPropertyData,
    },
  })

  const { user } = useAuth0()

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: 'properties',
  })

  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT)
  const [
    deleteEventProperty,
    { loading: loadingDeleteProp, error: errorDeleteProp },
  ] = useMutation(DELETE_EVENT_PROPERTY)

  const handleDeleteEventProperty = async (label: string) => {
    const target = eventPropertyData.find((prop) => prop.label === label)

    if (target) {
      const { data } = await deleteEventProperty({
        variables: { filter: { iid: [target.iid] } },
      })

      if (data) {
        console.log(data)
      }
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
    const { data } = await updateEvent({
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

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-2"
          name="edit_properties"
        >
          {fields.map((field, index) => {
            return (
              <div className="flex flex-row gap-x-2" key={field.id}>
                <FormField
                  control={form.control}
                  name={`properties.${index}.label` as const}
                  render={() => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          key={field.id + 'propLabel'}
                          placeholder="Enter label"
                          {...form.register(
                            `properties.${index}.label` as const
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`properties.${index}.value` as const}
                  render={() => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          key={field.id + 'propValue'}
                          placeholder="Enter value"
                          {...form.register(
                            `properties.${index}.value` as const
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {loadingDeleteProp ? (
                  <ButtonLoading />
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => handleDeleteEventProperty(field.label)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            )
          })}
          {/* <AddEventPropertyForm eventIid={eventIid} /> */}
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
              variant="outline"
              onClick={handleCancelEditing}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
      <AddEventPropertyForm eventIid={eventIid} />
    </>
  )
}
