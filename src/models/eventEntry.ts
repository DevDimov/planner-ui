import { TagData } from './tag'

export interface EventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
  event: {
    iid: string
    label: string
  }
  tags?: TagData[]
}

export interface UpdateEventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
}

export interface QueryEventEntryData {
  queryEventEntry: EventEntryData[]
}
