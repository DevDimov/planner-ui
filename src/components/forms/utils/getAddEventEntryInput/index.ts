import { User } from '@auth0/auth0-react'
import {
  AddEventEntryInput,
  AddTagInput,
} from '../../../../gql/codegen/graphql'
import { createEventFormSchema } from '../../../../schema/createEvent'
import { z } from 'zod'

export const getAddEventEntryInput = ({
  user,
  eventId,
  formValues,
}: {
  user?: User
  eventId: string
  formValues: z.infer<typeof createEventFormSchema>
}): AddEventEntryInput => {
  const { entry, existingTags, newTags } = formValues
  const userPayload = {
    email: user?.email,
  }
  const existingTagsInput = existingTags
    ? existingTags.map((existingTag) => {
        return { id: existingTag.id }
      })
    : []

  const newTagsInput: AddTagInput[] = newTags
    ? newTags.map((newTag) => {
        return {
          id: ''.concat(user?.sub || 'auth0|unknown', '|', newTag.label),
          label: newTag.label,
          user: userPayload,
        }
      })
    : []

  return {
    ...entry,
    event: {
      id: eventId,
    },
    tags: [...existingTagsInput, ...newTagsInput],
  }
}
