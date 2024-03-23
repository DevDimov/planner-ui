import { EventData } from './event'

export interface EventPropertyData {
  iid: string
  id: string
  label: string
  value: string
  event?: EventData
}
