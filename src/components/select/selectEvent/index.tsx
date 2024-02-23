import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../index'
import { FormControl } from '../../forms'

type SelectEventProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (...event: any[]) => void
}

export function SelectEvent({
  value,
  onValueChange,
  defaultValue,
}: SelectEventProps) {
  // const [value, setValue] = useState('')

  // const handleOnValueChange = (newValue: string) => {
  //   if (newValue !== value) setValue(newValue)
  // }

  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger className="">
          <SelectValue placeholder="Select event" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}
