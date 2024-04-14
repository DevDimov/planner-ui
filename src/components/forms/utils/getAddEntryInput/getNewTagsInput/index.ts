import { z } from 'zod'
import { newTagsSchema } from '../../../../../schema/tags'
import { AddTagInput, AddUserInput } from '../../../../../gql/codegen/graphql'

export const getNewTagsInput = ({
  newTags,
  userId,
  userPayload,
}: {
  newTags: z.infer<typeof newTagsSchema>
  userId: string
  userPayload: AddUserInput
}): AddTagInput[] => {
  return newTags
    ? newTags.map((newTag) => {
        return {
          id: ''.concat(userId, '|', newTag.label),
          label: newTag.label,
          color: newTag.color,
          user: userPayload,
        }
      })
    : []
}
