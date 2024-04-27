import { cn } from '../../../utils'
import { Button } from '../../buttons'

export default function NavButton({
  text,
  isActive,
}: {
  isActive: boolean
  text: string
}) {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        className={cn(isActive ? 'hover:cursor-default hover:bg-white' : '')}
      >
        {text}
      </Button>
      <div
        className={cn(
          isActive ? 'absolute h-1 w-full cursor-default border-b-4' : ''
        )}
      ></div>
    </div>
  )
}
