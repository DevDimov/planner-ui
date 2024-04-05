import { z } from 'zod'
import { existingTagsSchema, newTagsSchema } from './tags'
import isEqual from 'date-fns/isEqual'
import isBefore from 'date-fns/isBefore'

export const rangeIsValid = (startDateTime: Date, endDateTime: Date) => {
  return (
    isEqual(startDateTime, endDateTime) || isBefore(startDateTime, endDateTime)
  )
}

export const entrySchema = z.object({
  startDateTime: z.date(),
  endDateTime: z.date(),
})

export const addEntryFormSchema = z.object({
  eventLabel: z.string().min(1, { message: 'Label cannot be empty' }),
  entries: z
    .array(entrySchema)
    .min(1, { message: 'At least one entry is required' })
    .refine(
      (entries) => {
        return entries.every((entry) => {
          const { startDateTime, endDateTime } = entry
          return rangeIsValid(startDateTime, endDateTime)
        })
      },
      {
        message: 'Start date must be before or same as end date',
      }
    ),
  existingTags: existingTagsSchema,
  newTags: newTagsSchema,
})
