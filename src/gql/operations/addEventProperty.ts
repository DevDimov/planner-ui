import { gql } from '@apollo/client'

export const ADD_EVENT_PROPERTY = gql`
  mutation AddEventProperty($input: [AddEventPropertyInput!]!) {
    addEventProperty(input: $input) {
      numUids
      eventProperty {
        id
        label
        value
        iid
        event {
          id
          user {
            email
          }
        }
      }
    }
  }
`
