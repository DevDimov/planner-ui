import { TagColor } from '../gql/codegen/graphql'

export const tagColours: TagColor[] = [
  // TagColor.Black,
  // TagColor.Blue,
  TagColor.Default,
  TagColor.Gray,
  TagColor.Green,
  TagColor.Orange,
  TagColor.Purple,
  TagColor.Red,
  // TagColor.White,
  TagColor.Yellow,
]

export const tagColourMap: Record<TagColor, string> = {
  Black: 'bg-black',
  Blue: 'bg-blue-500',
  Default: 'bg-blue-500',
  Gray: 'bg-gray-500',
  Green: 'bg-green-500',
  Orange: 'bg-orange-500',
  Purple: 'bg-purple-500',
  Red: 'bg-red-500',
  White: 'bg-white',
  Yellow: 'bg-yellow-500',
}
