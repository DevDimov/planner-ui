import { EventData } from './event'

export interface EventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
  event: EventData
}

export interface UpdateEventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
}
