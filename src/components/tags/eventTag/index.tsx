import { TagColor } from '../../../gql/codegen/graphql'
import { Badge } from '../../ui/badge'

export type EventTagProps = {
  label: string
  color?: TagColor
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

export default function EventTag({ label, color }: EventTagProps) {
  const colorClass = `${colors[color || 'Default']}`
  return <Badge className={`${colorClass} hover:${colorClass}`}>{label}</Badge>
}
