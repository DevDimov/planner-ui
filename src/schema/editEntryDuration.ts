import { z } from 'zod'

export const editEntryDurationFormSchema = z.object({
  startDateTime: z.date(),
  endDateTime: z.date(),
})
