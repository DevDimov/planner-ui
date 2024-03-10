import { Badge } from '../../ui/badge'

export type EventTagProps = {
  label: string
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'
}

const colors = {
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
}

export default function EventTag({ label, color }: EventTagProps) {
  return (
    // <span
    //   className={`${colors[color]} rounded-sm px-2 py-0.5 font-sans text-sm font-normal text-white`}
    // >
    //   {label}
    // </span>
    <Badge className={`${colors[color]}`}>{label}</Badge>
  )
}
