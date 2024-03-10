import { User } from '../gql/codegen/graphql'
import { EventEntryData } from './eventEntry'
import { EventPropertyData } from './eventProperty'
import { TagData } from './tag'

export interface EventData {
  iid: string
  id: string
  label: string
  entries?: EventEntryData[]
  properties?: EventPropertyData[]
  tags?: TagData[]
  user?: User
}
