import { gql } from '@apollo/client'

export const UPDATE_EVENT_PROPERTY = gql`
  mutation UpdateEventProperty($input: UpdateEventPropertyInput!) {
    updateEventProperty(input: $input) {
      numUids
      eventProperty {
        id
        label
        value
        event {
          id
          label
        }
      }
    }
  }
`
