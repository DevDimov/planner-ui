import { gql } from '../codegen'

export const DELETE_EVENT_ENTRY = gql(`
  mutation DeleteEventEntry($filter: EventEntryFilter!) {
    deleteEventEntry(filter: $filter) {
      numUids
      eventEntry {
        endDateTime
        iid
        startDateTime
      }
    }
  }
`)
