import { Button } from '../../../components/buttons'
import { ButtonLoading } from '../button/buttonLoading'
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'

export default function ButtonPairSubmitDelete({
  onSubmit,
  onDelete,
  onSubmitLoading,
  onDeleteLoading,
}: {
  onSubmit?: () => void
  onDelete: () => void
  onSubmitLoading: boolean
  onDeleteLoading: boolean
}) {
  return (
    <div className="flex flex-row gap-1">
      {onSubmitLoading ? (
        <ButtonLoading label="Update" />
      ) : (
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          onClick={onSubmit || undefined}
        >
          <CheckIcon className="h-6 w-6" />
        </Button>
      )}
      {onDeleteLoading ? (
        <ButtonLoading label="Delete" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          title="Remove property"
          onClick={onDelete}
          className="hover:text-destructive"
        >
          <TrashIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
