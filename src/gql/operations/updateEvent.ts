import { gql } from '../codegen/gql'

export const UPDATE_EVENT = gql(`
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      numUids
      event {
        id
        iid
        label
      }
    }
  }
`)
