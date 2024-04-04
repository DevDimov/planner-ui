import { User } from '../gql/codegen/graphql'
import { EventEntryData } from './eventEntry'
import { EventPropertyData } from './eventProperty'

export interface EventData {
  iid: string
  id: string
  label: string
  entries?: EventEntryData[]
  properties?: EventPropertyData[]
  user?: User
}
