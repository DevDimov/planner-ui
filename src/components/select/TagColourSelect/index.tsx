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
  disabled?: boolean
}

export default function TagColourSelect(props: SelectEventProps) {
  const { onValueChange, defaultValue, disabled } = props
  return (
    <Select
      defaultValue={defaultValue || TagColor.Default}
      onValueChange={onValueChange}
      disabled={disabled}
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
                <span>
                  {colour === TagColor.Default ? `Blue (default)` : colour}
                </span>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

// export const TagColourSelectForm = forwardRef(function TagColourSelect(
//   props: SelectEventProps,
//   ref: React.ForwardedRef<HTMLInputElement>
// ) {
//   const { onValueChange, defaultValue, disabled, ...otherProps } = props
//   return (
//     <Select
//       defaultValue={defaultValue || TagColor.Default}
//       onValueChange={onValueChange}
//       disabled={disabled}
//     >
//       <SelectTrigger>
//         <SelectValue placeholder="Select color" ref={ref} {...otherProps} />
//       </SelectTrigger>
//       <SelectContent>
//         {tagColours.map((colour) => {
//           return (
//             <SelectItem key={colour} value={colour}>
//               <div className="flex flex-row items-center gap-2">
//                 <span
//                   className={cn('w-4 rounded pb-4', tagColourMap[colour])}
//                 ></span>
//                 <span>
//                   {colour === TagColor.Default ? `Blue (default)` : colour}
//                 </span>
//               </div>
//             </SelectItem>
//           )
//         })}
//       </SelectContent>
//     </Select>
//   )
// })
