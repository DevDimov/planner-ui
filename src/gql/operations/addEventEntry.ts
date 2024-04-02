import { gql } from '../codegen/gql'

export const ADD_EVENT_ENTRY = gql(`
  mutation AddEventEntry($input: [AddEventEntryInput!]!) {
  addEventEntry(input: $input) {
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
      event {
        iid
        id
      }
    }
  }
}
`)
