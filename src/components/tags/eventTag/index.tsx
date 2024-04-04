import { TagColor } from '../../../gql/codegen/graphql'
import { Badge } from '../../ui/badge'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { cn } from '../../../utils'

export type EventTagProps = {
  label: string
  color?: TagColor | null
  variant?: 'removable' | 'outline' | 'checked'
  onClick?: () => void
}

const colors = {
  Black: 'bg-black',
  Blue: 'bg-blue-500',
  Default: 'bg-blue-500',
  Gray: 'bg-gray-500',
  Green: 'bg-green-500',
  Orange: 'bg-orange-500',
  Purple: 'bg-purple-500',
  Red: 'bg-red-500',
  White: 'bg-white',
  Yellow: 'bg-yellow-500',
  // indigo: 'bg-indigo-500',
  // violet: 'bg-violet-500',
}

export default function EventTag({
  label,
  color,
  variant,
  onClick,
}: EventTagProps) {
  if (variant === 'outline') {
    return (
      <Badge variant="outline" onClick={onClick} className="cursor-pointer">
        {label}
      </Badge>
    )
  }

  const colorClass = `${colors[color || 'Default']}`

  if (variant && ['checked', 'removable'].includes(variant)) {
    return (
      <Badge
        className={cn(`${colorClass} hover:${colorClass} cursor-pointer`)}
        onClick={onClick}
      >
        <div className="flex flex-row items-center justify-items-center gap-2">
          <div>{label}</div>
          {variant === 'checked' && <CheckIcon className="h-4 w-4" />}
          {variant === 'removable' && <Cross2Icon className="h-4 w-4" />}
        </div>
      </Badge>
    )
  }

  return <Badge className={`${colorClass} hover:${colorClass}`}>{label}</Badge>
}
