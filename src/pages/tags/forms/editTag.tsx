import { useMutation } from '@apollo/client/react/hooks/useMutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/buttons'
import TagColourSelect from 'components/select/TagColourSelect'
import EventTag from 'components/tags/eventTag'
import ButtonPairSubmitDelete from 'components/ui/form/buttonPairSubmitDelete'
import FormError from 'components/ui/form/formError'
import { Input } from 'components/ui/input/default'
import { useToast } from 'components/ui/toast/use-toast'
import { DELETE_TAG } from 'gql/operations/deleteTag'
import { UPDATE_TAG } from 'gql/operations/updateTag'
import { TagData } from 'models/tag'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { existingTagSchema } from 'schema/tags'
import { z } from 'zod'

interface UpdateTagData {
  updateTag: {
    numUids: number
    tag: TagData[]
  }
}

type schemaType = z.infer<typeof existingTagSchema>

export default function EditTag({
  tag,
  onUpdateTag,
  onDeleteTag,
}: {
  tag: TagData
  onUpdateTag: (tag: TagData) => void
  onDeleteTag: (iid: string) => void
}) {
  const { toast } = useToast()
  const [canEdit, setCanEdit] = useState(false)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(existingTagSchema),
    defaultValues: {
      label: tag.label,
      color: tag?.color || undefined,
    },
  })

  const [updateTagMutation, { loading: loadingUpdateTag }] =
    useMutation<UpdateTagData>(UPDATE_TAG)

  const [deleteTagMutation, { loading: loadingDeleteTag }] =
    useMutation(DELETE_TAG)

  const handleDeleteTag = async () => {
    const { iid } = tag

    const { data, errors } = await deleteTagMutation({
      variables: { filter: { iid: [iid] } },
    })

    if (data?.deleteTag?.tag) {
      onDeleteTag(iid)
      toast({
        description: 'Event tag deleted.',
      })
    }

    if (errors) {
      toast({
        title: 'Error deleting tag.',
        description: errors.toString(),
      })
    }
  }

  const onSubmit = async (values: schemaType) => {
    console.log(tag.label, values)
    const { iid } = tag
    const { label, color } = values

    const { data, errors } = await updateTagMutation({
      variables: { input: { filter: { iid: [iid] }, set: { label, color } } },
    })

    if (data?.updateTag?.tag) {
      const updatedTag = data.updateTag.tag[0]
      onUpdateTag(updatedTag)
      reset()
      setCanEdit(false)
      toast({
        description: 'Event tag updated.',
      })
    }

    if (errors) {
      toast({
        title: 'Error updating tag.',
        description: errors.toString(),
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-3 flex flex-col gap-3"
    >
      <div className="w-full">
        <EventTag label={tag.label} color={tag.color} key={tag.iid} />
      </div>
      <div className="flex w-full flex-row gap-3">
        <Controller
          name="label"
          control={control}
          render={({ field }) => {
            return (
              <div className="flex w-full flex-col gap-2">
                <Input
                  placeholder="Label"
                  disabled={canEdit ? false : true}
                  defaultValue={field.value}
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
                disabled={canEdit ? false : true}
                onValueChange={field.onChange}
                defaultValue={field.value}
              />
            )
          }}
        />

        {canEdit ? (
          <ButtonPairSubmitDelete
            onDelete={handleDeleteTag}
            onDeleteLoading={loadingDeleteTag}
            onSubmitLoading={loadingUpdateTag}
          />
        ) : (
          <Button
            type="button"
            variant="outline"
            className="w-min"
            onClick={() => setCanEdit(true)}
          >
            Edit
          </Button>
        )}
      </div>
      <FormError>{errors?.label?.message}</FormError>
    </form>
  )
}
