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
import { useRef } from 'react'

type SingleDateInputProps = {
  value: Date
  onChange: (...event: any[]) => void
  placeholder?: string
}

export function SingleDateInput({
  value,
  onChange,
  placeholder,
}: SingleDateInputProps) {
  const popoverCloseRef = useRef<HTMLButtonElement>(null)

  const handleOnDayClick = () => {
    popoverCloseRef?.current?.click()
  }

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
            {value ? (
              format(value, 'PPP')
            ) : (
              <span>{placeholder || 'Pick a date'}</span>
            )}
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
          weekStartsOn={1}
          onDayClick={handleOnDayClick}
        />
        <PopoverClose className="hidden w-full p-2" ref={popoverCloseRef}>
          <div className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
            Close
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
