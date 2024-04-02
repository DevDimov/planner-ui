import { gql } from '../codegen/gql'

export const ADD_EVENT = gql(`
  mutation AddEvent($input: [AddEventInput!]!) {
    addEvent(input: $input) {
      numUids
      event {
        id
        iid
        label
        properties {
          iid
          id
          label
          value
        }
      }
    }
  }
`)
