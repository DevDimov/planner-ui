import { z } from 'zod'

export const editEntryDurationFormSchema = z.object({
  entryIid: z.string().min(2),
  startDateTime: z.date(),
  endDateTime: z.date(),
})
