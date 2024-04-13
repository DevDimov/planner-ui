import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { FormControl } from '../../forms'

type SelectEventProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (...event: any[]) => void
  options: { id: string; label: string }[]
}

export function SelectEvent({
  value,
  onValueChange,
  defaultValue,
  options,
}: SelectEventProps) {

  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger className="">
          <SelectValue placeholder="Select event" />
        </SelectTrigger>
      </FormControl>
      {/* <FormDescription>
        Select an existing event to which to add new entry
      </FormDescription> */}
      <SelectContent>
        {options.map((option) => {
          const eventId = option.id
          const eventLabel = option.label
          return (
            <SelectItem key={eventId} value={eventId}>
              {eventLabel}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
