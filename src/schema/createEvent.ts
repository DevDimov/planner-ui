import { z } from 'zod'

export const createEventFormSchema = z.object({
  label: z.string().min(2),
  tags: z
    .array(z.object({ id: z.string(), label: z.string() }))
    .refine((value) => value.some((item) => item), {
      message: 'Choose at least one tag',
    }),
})
