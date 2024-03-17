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
import { useAuth0 } from '@auth0/auth0-react'
import { TypographyMuted } from '../../../../typography/muted'
import { addEventPropertySchema } from '../../../../../schema/addEventProperty'
import { ADD_EVENT_PROPERTY } from '../../../../../gql/operations/addEventProperty'

type AddEventPropertyFormProps = {
  eventIid: string
}

export function AddEventPropertyForm({ eventIid }: AddEventPropertyFormProps) {
  const form = useForm<z.infer<typeof addEventPropertySchema>>({
    resolver: zodResolver(addEventPropertySchema),
    defaultValues: {
      label: '',
      value: '',
    },
  })

  const { user } = useAuth0()

  const [addEventProperty, { loading, error }] = useMutation(ADD_EVENT_PROPERTY)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof addEventPropertySchema>) {
    console.log(values)
    const { label, value } = values
    const userId = user?.sub || 'auth0|undefined'
    const newProperty = {}
    // const newProperty = properties.map((prop) => {
    //   return {
    //     id: ''.concat(userId, '|', eventIid, '|', prop.label),
    //     label: prop.label,
    //     value: prop.value,
    //     event: {
    //       iid: eventIid,
    //     },
    //   }
    // })
    console.log('New props', newProperty)
    const { data } = await addEventProperty({
      // variables: {
      //   input: newProperty,
      // },
    })

    if (data) {
      console.log('Event property added', data)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="new_property"
        className="flex w-full flex-col gap-4"
      >
        <TypographyMuted>New Property</TypographyMuted>
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter label"
                  />
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
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter value"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" variant="secondary" className="w-min">
              Create
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
