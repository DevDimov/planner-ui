import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { useAuth0 } from '@auth0/auth0-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../components/buttons'
import { getUserInput } from '../../../components/forms/utils/getUserInput'
import TagColourSelect from '../../../components/select/TagColourSelect'
import FormError from '../../../components/ui/form/formError'
import { Input } from '../../../components/ui/input/default'
import { useToast } from '../../../components/ui/toast/use-toast'
import { CalendarContext } from '../../../context/calendar'
import { TagColor } from '../../../gql/codegen/graphql'
import { ADD_TAG } from '../../../gql/operations/addTag'
import { TagData } from '../../../models/tag'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { existingTagSchema } from '../../../schema/tags'
import { z } from 'zod'
import { getTagId } from '../utils/getTagId'
import { ButtonLoading } from '../../../components/ui/button/buttonLoading'
import { isLabelUnique } from '../utils/isLabelUnique'

interface CreateTagData {
  addTag: {
    numUids: number
    tag: TagData[]
  }
}

type schemaType = z.infer<typeof existingTagSchema>

export default function CreateTagForm() {
  const { tags, addTag } = useContext(CalendarContext)
  const { toast } = useToast()
  const { user } = useAuth0()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm<schemaType>({
    resolver: zodResolver(existingTagSchema),
    defaultValues: {
      label: '',
      color: TagColor.Default,
    },
  })

  const [createTagMutation, { loading }] = useMutation<CreateTagData>(ADD_TAG)

  const onSubmit = async (values: schemaType) => {
    const { label, color } = values
    const userId = user?.sub

    const labelIsUnique = isLabelUnique(label, tags)
    if (!labelIsUnique) {
      return setError('label', {
        type: 'string',
        message: 'A tag with this label already exists',
      })
    }

    if (userId) {
      const id = getTagId({ userId, tagLabel: label })
      const userPayload = getUserInput({ user })

      const { data, errors } = await createTagMutation({
        variables: { input: [{ id, label, color, user: userPayload }] },
      })

      if (data?.addTag?.tag) {
        const updatedTag = data.addTag.tag
        addTag(updatedTag, { prepend: true })
        reset()
        toast({
          description: 'Event tag created.',
        })
      }
      if (errors) {
        toast({
          title: 'Error creating tag.',
          description: errors.toString(),
        })
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-8 mt-2 flex flex-col gap-3"
    >
      <div className="flex w-full flex-row gap-3">
        <Controller
          name="label"
          control={control}
          render={({ field }) => {
            return (
              <div className="flex w-full flex-col gap-2">
                <Input
                  placeholder="Label"
                  value={field.value}
                  onChange={field.onChange}
                />
              </div>
            )
          }}
        />

        <Controller
          name="color"
          control={control}
          render={({ field }) => {
            return (
              <TagColourSelect
                onValueChange={field.onChange}
                value={field.value}
              />
            )
          }}
        />

        {loading ? (
          <ButtonLoading />
        ) : (
          <Button type="submit" variant="outline" className="w-min">
            Create
          </Button>
        )}
      </div>
      <FormError>{errors?.label?.message}</FormError>
    </form>
  )
}
