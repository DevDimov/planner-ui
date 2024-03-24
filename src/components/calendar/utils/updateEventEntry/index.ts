import {
  EventEntryData,
  UpdateEventEntryData,
} from '../../../../models/eventEntry'

export const updateEventEntry = (
  entries: EventEntryData[],
  updatedEntry: UpdateEventEntryData
) => {
  const { iid, startDateTime, endDateTime } = updatedEntry

  const result = entries.map((entry) => {
    if (entry.iid === iid) {
      return { ...entry, startDateTime, endDateTime }
    }

    return entry
  })

  return result
}
