import { cn } from 'utils'

export default function FormError({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-[0.8rem] font-medium text-destructive', className)}>
      {children}
    </p>
  )
}
