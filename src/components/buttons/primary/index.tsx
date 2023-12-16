import { Button } from '@mui/base/Button'

type PrimaryButtonProps = {
  title: string
}

export default function PrimaryButton({ title }: PrimaryButtonProps) {
  return (
    <Button className="rounded-sm bg-blue-500 px-3 py-1 text-white hover:bg-blue-400">
      {title}
    </Button>
  )
}
