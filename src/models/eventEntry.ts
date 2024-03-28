export interface EventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
  event: {
    iid: string
    label: string
  }
}

export interface UpdateEventEntryData {
  iid: string
  startDateTime: string
  endDateTime: string
}
