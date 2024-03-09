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
import { SingleDateInput } from '../../../input/singleDateInput'
import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { ButtonLoading } from '../../../ui/button/buttonLoading'
import { editEventPropertiesFormSchema } from '../../../../schema/editEventProperties'
import { UPDATE_EVENT_PROPERTY } from '../../../../gql/operations/updateEventProperty'
import { EventProperty } from '../../../../gql/codegen/graphql'
import { Input } from '../../../ui/input/default'
import { useRef } from 'react'

type EditEventPropertiesFormProps = {
  eventIid: string
  handleCancelEditing: () => void
  properties: EventProperty[]
}

export function EditEventPropertiesForm({
  eventIid,
  handleCancelEditing,
  properties: test,
}: EditEventPropertiesFormProps) {
  const form = useForm<z.infer<typeof editEventPropertiesFormSchema>>({
    resolver: zodResolver(editEventPropertiesFormSchema),
    defaultValues: {
      eventIid: eventIid,
      properties: test,
    },
  })

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: 'properties',
  })

  const inputNewPropertyLabelRef = useRef<HTMLInputElement>(null)
  const inputNewPropertyValueRef = useRef<HTMLInputElement>(null)

  const handleOnClickNewProperty = () => {
    if (inputNewPropertyLabelRef.current && inputNewPropertyValueRef.current) {
      let propLabel = inputNewPropertyLabelRef.current.value.trim()
      let propValue = inputNewPropertyValueRef.current.value.trim()
      if (propLabel.length > 0 && propValue.length > 0) {
        const exists = fields.find((e) => e.label === propLabel)
        if (!exists) {
          // const userId = user?.sub || 'auth0|undefined'
          const userId = 'auth0|undefined'
          const tagId = ''.concat(userId, '|', propLabel)
          // setTags([
          //   ...tags,
          //   {
          //     id: tagId,
          //     label: propLabel,
          //   },
          // ])
          append({
            label: propLabel,
            value: propValue,
          })
          inputNewPropertyLabelRef.current.value = ''
          inputNewPropertyValueRef.current.value = ''
        }
      }
    }
  }

  const [updateEventProperties, { loading, error }] = useMutation(
    UPDATE_EVENT_PROPERTY
  )

  if (error) console.log('error', error)

  async function onSubmit(
    values: z.infer<typeof editEventPropertiesFormSchema>
  ) {
    console.log(values)
    // const { eventIid, properties } = values
    // const { data } = await updateEventProperties({
    //   variables: {
    //     input: {
    //       filter: {
    //         iid: [eventIid],
    //       },
    //       set: {
    //         // properties: properties,
    //       },
    //     },
    //   },
    // })

    // if (data) {
    //   // setEntries([...entries, data?.addEventEntry?.eventEntry])
    //   handleCancelEditing()
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        {fields.map((field, index) => {
          return (
            <div className="flex flex-row gap-x-2">
              <FormField
                control={form.control}
                name={`properties.${index}.label` as const}
                render={() => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        key={field.id + 'propLabel'}
                        placeholder="Enter label"
                        {...form.register(`properties.${index}.label` as const)}
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
                        {...form.register(`properties.${index}.value` as const)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="outline" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          )
        })}

        <FormDescription>New property</FormDescription>
        <div className="flex flex-row gap-3">
          <div>
            <Input placeholder="Enter label" ref={inputNewPropertyLabelRef} />
          </div>
          <div>
            <Input placeholder="Enter value" ref={inputNewPropertyValueRef} />
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-min"
            onClick={handleOnClickNewProperty}
          >
            Add
          </Button>
        </div>
        <div className="mt-3 flex justify-between gap-3">
          {loading ? <ButtonLoading /> : <Button type="submit">Update</Button>}
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancelEditing}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
