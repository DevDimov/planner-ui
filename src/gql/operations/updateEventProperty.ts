import { gql } from '../codegen/gql'

export const UPDATE_EVENT_PROPERTY = gql(`
  mutation UpdateEventProperty($input: UpdateEventPropertyInput!) {
    updateEventProperty(input: $input) {
      numUids
      eventProperty {
        iid
        id
        label
        value
        event {
          iid
          id
          label
        }
      }
    }
  }
`)
