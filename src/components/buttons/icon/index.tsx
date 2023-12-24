import { Button } from '@mui/base/Button'

type IconButtonProps = {
  children: any
  title?: string
  onClick: () => void
}

export default function IconButton({
  title,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <Button
      className="rounded-sm bg-gray-200 px-3 py-2 hover:bg-gray-300"
      onClick={onClick}
      title={title}
    >
      {children}
    </Button>
  )
}
