import { Button } from '@mui/base/Button'

type PrimaryButtonProps = {
  title: string
  onClick: () => void
}

export default function PrimaryButton({ title, onClick }: PrimaryButtonProps) {
  return (
    <Button
      className="rounded-sm bg-blue-500 px-3 py-1 text-white hover:bg-blue-400"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}
