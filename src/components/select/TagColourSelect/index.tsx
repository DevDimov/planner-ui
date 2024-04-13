import { tagColourMap, tagColours } from '../../../constants/tagColours'
import { TagColor } from '../../../gql/codegen/graphql'
import { cn } from '../../../utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'

type SelectEventProps = {
  defaultValue?: TagColor
  onValueChange?: (value: TagColor) => void
}

export default function TagColourSelect({
  onValueChange,
  defaultValue,
}: SelectEventProps) {
  return (
    <Select
      defaultValue={defaultValue || TagColor.Default}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select color" />
      </SelectTrigger>
      <SelectContent>
        {tagColours.map((colour) => {
          return (
            <SelectItem key={colour} value={colour}>
              <div className="flex flex-row items-center gap-2">
                <span
                  className={cn('w-4 rounded pb-4', tagColourMap[colour])}
                ></span>
                <span>{colour}</span>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
