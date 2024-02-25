import { z } from 'zod'

export const addEntryFormSchema = z.object({
  eventId: z.string().min(2),
  startDateTime: z.date(),
  endDateTime: z.date(),
})
