import { z } from 'zod'

export const editEventPropertyFormSchema = z.object({
  label: z.string().min(1, {
    message: 'Label too short',
  }),
  value: z.string().min(1, {
    message: 'Value too short',
  }),
})
