import { z } from 'zod'

export const eventEntryFormSchema = z.object({
  eventId: z.string().min(2),
  startDateTime: z.date(),
  endDateTime: z.date(),
})
