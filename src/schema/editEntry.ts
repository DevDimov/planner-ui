import { z } from 'zod'

export const editEntryFormSchema = z.object({
  entryIid: z.string().min(2),
  startDateTime: z.date(),
  endDateTime: z.date(),
})
