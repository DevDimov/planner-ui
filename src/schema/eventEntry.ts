import { z } from 'zod'

export const eventEntryFormSchema = z.object({
  eventId: z.string().min(2),
  fromDateTime: z.date(),
  // toDateTime: z.date(),
})
