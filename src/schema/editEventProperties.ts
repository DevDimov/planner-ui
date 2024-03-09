import { z } from 'zod'

export const editEventPropertiesFormSchema = z.object({
  eventIid: z.string().min(2),
  properties: z.array(
    z.object({
      label: z.string().min(1, {
        message: 'Label must be at least 2 characters long',
      }),
      value: z.string().min(1, {
        message: 'Value must be at least 2 characters long',
      }),
    })
  ),
})
