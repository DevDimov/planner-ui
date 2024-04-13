import { z } from 'zod'
import { TagColor } from '../gql/codegen/graphql'

export const existingTagsSchema = z
  .array(z.object({ id: z.string(), label: z.string().min(2) }))
  .optional()

export const newTagsSchema = z
  .array(
    z.object({
      label: z.string().min(2),
      colour: z.nativeEnum(TagColor).default(TagColor.Default),
    })
  )
  .optional()

export const manageTagsSchema = z.object({
  existingTags: existingTagsSchema,
  newTags: newTagsSchema,
})
