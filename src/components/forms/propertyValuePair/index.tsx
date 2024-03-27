import { TypographyMuted } from '../../typography/muted'
import { TypographySmall } from '../../typography/small'

type PropertyValuePairProps = {
  label: string
  value: string
}

export default function PropertyValuePair({
  label,
  value,
}: PropertyValuePairProps) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <TypographySmall>{label}</TypographySmall>
      <TypographyMuted>{value}</TypographyMuted>
    </div>
  )
}
