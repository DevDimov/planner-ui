import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from '../../buttons'

export function ButtonLoading({ label }: { label?: string }) {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {label || 'Please wait'}
    </Button>
  )
}
