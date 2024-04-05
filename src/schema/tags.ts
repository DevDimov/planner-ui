import { z } from 'zod'

export const existingTagsSchema = z
  .array(z.object({ id: z.string(), label: z.string().min(2) }))
  .optional()

export const newTagsSchema = z
  .array(z.object({ label: z.string().min(2) }))
  .optional()

export const manageTagsSchema = z.object({
  existingTags: existingTagsSchema,
  newTags: newTagsSchema,
})
