import { cn } from "../../utils"

export function TypographyMuted({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  )
}
