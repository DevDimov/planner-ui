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
import { CalendarContext } from '../../../../../context/calendar/index'
import { useContext } from 'react'
import { EventPropertyData } from '../../../../../models/eventProperty'
import { useToast } from '../../../../ui/toast/use-toast'

type AddEventPropertyFormProps = {
  eventIid: string
}

type AddEventPropertyData = {
  addEventProperty: {
    eventProperty?: EventPropertyData[]
  }
}

export function AddEventPropertyForm({ eventIid }: AddEventPropertyFormProps) {
  const form = useForm<z.infer<typeof addEventPropertySchema>>({
    resolver: zodResolver(addEventPropertySchema),
    defaultValues: {
      label: '',
      value: '',
    },
  })

  const { toast } = useToast()
  const { user } = useAuth0()
  const { addEventProperty } = useContext(CalendarContext)

  const [addEventPropertyMutation, { loading, error }] =
    useMutation<AddEventPropertyData>(ADD_EVENT_PROPERTY)

  if (error) console.log('error', error)

  async function onSubmit(values: z.infer<typeof addEventPropertySchema>) {
    console.log(values)
    const { label, value } = values
    const userId = user?.sub || 'auth0|undefined'
    const newProperty = {
      id: ''.concat(userId, '|', eventIid, '|', label),
      label: label,
      value: value,
      event: {
        iid: eventIid,
      },
    }
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
    // console.log('New props', newProperty)
    const { data, errors } = await addEventPropertyMutation({
      variables: {
        input: newProperty,
      },
    })

    if (data) {
      const eventPropertyWithIid = data?.addEventProperty?.eventProperty?.[0]
      if (eventPropertyWithIid) {
        addEventProperty(eventIid, eventPropertyWithIid)
        form.reset()
        toast({
          description: 'Event property added.',
        })
      }
      return
    }

    if (errors) {
      toast({
        description: 'There was an error adding event property.',
        variant: 'destructive',
      })
      console.log(errors)
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
        <div className="flex flex-wrap gap-2 md:flex-row md:flex-nowrap">
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
            <Button type="submit" variant="default" className="w-min">
              Create
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
