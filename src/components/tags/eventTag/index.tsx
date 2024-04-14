import { TagColor } from '../../../gql/codegen/graphql'
import { Badge } from '../../ui/badge'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { cn } from '../../../utils'
import { tagColourMap } from '../../../constants/tagColours'

export type EventTagProps = {
  label: string
  color?: TagColor | null
  variant?: 'removable' | 'outline' | 'checked'
  onClick?: () => void
}

export default function EventTag({
  label,
  color,
  variant,
  onClick,
}: EventTagProps) {
  const colorClass = tagColourMap[color || 'Default']

  if (variant === 'outline') {
    return (
      <Badge
        variant="outline"
        onClick={onClick}
        className={`cursor-pointer hover:${colorClass}`}
      >
        {label}
      </Badge>
    )
  }

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
