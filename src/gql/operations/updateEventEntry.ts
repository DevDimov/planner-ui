import { gql } from '../codegen/gql'

export const UPDATE_EVENT_ENTRY = gql(`
  mutation UpdateEventEntry($input: UpdateEventEntryInput!) {
    updateEventEntry(input: $input) {
      numUids
      eventEntry {
        iid
        startDateTime
        endDateTime
        tags {
          iid
          id
          label
          color
        }
      }
    }
  }
`)
