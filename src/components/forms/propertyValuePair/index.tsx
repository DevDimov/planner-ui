type PropertyValuePairProps = {
  label: string
  value: string
}

export default function PropertyValuePair({
  label,
  value,
}: PropertyValuePairProps) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <span className="font-medium">{value}</span>
    </div>
  )
}
