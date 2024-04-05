import {
  AddEventEntryInput,
  AddEventInput,
  AddUserInput,
} from '../../../../gql/codegen/graphql'
import { z } from 'zod'
import { existingTagsSchema, newTagsSchema } from '../../../../schema/tags'
import { entrySchema } from '../../../../schema/addEntry'
import { getExistingTagsInput } from './getExistingTagsInput'
import { getNewTagsInput } from './getNewTagsInput'

export const getAddEntryInput = ({
  userId,
  userPayload,
  eventPayload,
  entries,
  existingTags,
  newTags,
}: {
  userId: string
  userPayload: AddUserInput
  eventPayload: AddEventInput
  entries: z.infer<typeof entrySchema>[]
  existingTags?: z.infer<typeof existingTagsSchema>
  newTags?: z.infer<typeof newTagsSchema>
}): AddEventEntryInput[] => {
  const existingTagsInput = getExistingTagsInput(existingTags)

  const newTagsInput = getNewTagsInput({ userId, userPayload, newTags })

  return entries.map((entry) => {
    return {
      ...entry,
      event: eventPayload,
      tags: [...existingTagsInput, ...newTagsInput],
    }
  })
}
