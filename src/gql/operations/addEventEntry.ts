import { gql } from '@apollo/client'
// import { gql } from '../codegen/gql'

export const ADD_EVENT_ENTRY = gql(`
  mutation AddEventEntry($input: [AddEventEntryInput!]!) {
  addEventEntry(input: $input) {
    numUids
    eventEntry {
      iid
      startDateTime
      endDateTime
      event {
        id
        iid
        label
        tags {
          id
          iid
          label
        }
        properties {
          id
          iid
          label
          value
        }
      }
    }
  }
}
`)
