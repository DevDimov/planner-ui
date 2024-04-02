import { gql } from '../codegen'

export const ADD_EVENT_PROPERTY = gql(`
  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {
    addEventProperty(input: $input) {
      numUids
      eventProperty {
        iid
        id
        label
        value
        event {
          iid
          id
          user {
            email
          }
        }
      }
    }
  }
`)
