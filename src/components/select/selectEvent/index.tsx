import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../index'
import { FormControl, FormDescription } from '../../forms'
import { CalendarContext } from '../../../context/calendar'
import { TypographyLarge } from '../../typography/large'
import { EventInstanceOccurrence } from '../../../gql/codegen/graphql'
import lodash from 'lodash'

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
