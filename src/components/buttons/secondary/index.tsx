import { Button } from '@mui/base/Button'

type SecondaryButtonProps = {
  title: string
  onClick: () => void
}

export default function SecondaryButton({
  title,
  onClick,
}: SecondaryButtonProps) {
  return (
    <Button
      className="rounded-sm bg-gray-200 px-3 py-1 text-black hover:bg-gray-300"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}
