import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { cn } from '../../../utils'
import { Button } from '../../buttons'
import { Calendar } from '../../ui/calendar'
import { FormControl } from '../../forms'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '../../ui/popover'

type SingleDateInputProps = {
  value: Date
  onChange: (...event: any[]) => void
}

export function SingleDateInput({ value, onChange }: SingleDateInputProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            className={cn(
              'pl-3 text-left font-normal',
              value && 'text-muted-foreground'
            )}
          >
            {value ? format(value, 'PPP') : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={(date) => date < new Date('1900-01-01')}
          initialFocus
        />
        <PopoverClose className="w-full p-2">
          <div className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
            Close
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
