import { z } from 'zod'
import { existingTagsSchema } from '../../../../../schema/tags'

export const getExistingTagsInput = (
  existingTags: z.infer<typeof existingTagsSchema>
) => {
  return existingTags
    ? existingTags.map((existingTag) => {
        return { id: existingTag.id }
      })
    : []
}
