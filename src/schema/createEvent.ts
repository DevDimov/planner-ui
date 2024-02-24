import { z } from 'zod'

export const createEventFormSchema = z.object({
  label: z.string().min(2),
  tags: z.array(z.string()).refine((tags) => tags.length > 0),
})
