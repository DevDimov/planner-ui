import { z } from 'zod'

export const createEventFormSchema = z.object({
  label: z
    .string()
    .min(2, { message: 'Label must be at least 2 characters long' }),
  entry: z.object({
    startDateTime: z.date(),
    endDateTime: z.date(),
  }),
  existingTags: z
    .array(z.object({ id: z.string(), label: z.string().min(2) }))
    .optional(),
  newTags: z.array(z.object({ label: z.string().min(2) })),
})
