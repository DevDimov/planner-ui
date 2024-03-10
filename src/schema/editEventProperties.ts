import { z } from 'zod'

export const editEventPropertiesFormSchema = z.object({
  eventIid: z.string().min(2),
  properties: z.array(
    z.object({
      label: z.string().min(1, {
        message: 'Label must be at least 1 character long',
      }),
      value: z.string().min(1, {
        message: 'Value must be at least 1 character long',
      }),
    })
  ),
  // .refine(
  //   (props) => {
  //     // const labels = props.map((prop) => prop.label)
  //     // console.log(labels)
  //     // return labels.length !== 1
  //     return props.length === 2

  //     // return props.every((prop) => {
  //     //   const result = labels.filter((label) => label === prop.label)
  //     //   console.log(result)
  //     //   return result.length === 1
  //     // }
  //     //   )
  //   },
  //   { message: 'Labels must be unique' }
  // ),
})
