import { User } from '@auth0/auth0-react'
import { AddEventInput } from '../../../../gql/codegen/graphql'
import { createEventFormSchema } from '../../../../schema/createEvent'
import { z } from 'zod'

export const getAddEventInput = ({
  user,
  formValues,
}: {
  user?: User
  formValues: z.infer<typeof createEventFormSchema>
}): AddEventInput => {
  const userId = user?.sub || 'auth0|undefined'
  const { label } = formValues

  return {
    id: ''.concat(userId, '|', label),
    label,
    user: {
      email: user?.email,
    },
  }
}
