import { z } from 'zod'

const errorBlankSpace = {
  message: 'Too many blank spaces',
}

export const addEventPropertySchema = z.object({
  label: z
    .string()
    .min(1, { message: 'Label too short' })
    .max(50, { message: 'Label too long' })
    .refine((val) => val.trim().length > 0, errorBlankSpace),
  value: z
    .string()
    .min(1, { message: 'Value too short' })
    .max(50, { message: 'Value too short' })
    .refine((val) => val.trim().length > 0, errorBlankSpace),
})
