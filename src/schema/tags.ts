import { z } from 'zod'
import { TagColor } from '../gql/codegen/graphql'

export const existingTagSchema = z.object({
  label: z
    .string()
    .min(1, { message: 'Label is required' })
    .transform((label) => label.trim()),
  color: z.nativeEnum(TagColor).optional(),
})

export const existingTagsSchema = z
  .array(z.object({ id: z.string(), label: z.string().min(1) }))
  .optional()

export const newTagsSchema = z
  .array(
    z.object({
      label: z
        .string()
        .min(1)
        .transform((label) => label.trim()),
      color: z.nativeEnum(TagColor),
    })
  )
  .optional()

export const manageTagsSchema = z.object({
  existingTags: existingTagsSchema,
  newTags: newTagsSchema,
})
