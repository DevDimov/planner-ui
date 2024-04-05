import { z } from 'zod'
import { existingTagsSchema, newTagsSchema } from './tags'

export const addEntryFormSchema = z.object({
  eventLabel: z.string().min(1, { message: 'Label cannot be empty' }),
  entries: z
    .array(z.object({ startDateTime: z.date(), endDateTime: z.date() }))
    .min(1, { message: 'At least one entry is required' }),
  existingTags: existingTagsSchema,
  newTags: newTagsSchema,
})
