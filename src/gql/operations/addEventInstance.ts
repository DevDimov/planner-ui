import { gql } from '@apollo/client'

export const ADD_EVENT_INSTANCE = gql`
  mutation AddEventInstance($input: [AddEventInstanceInput!]!) {
    addEventInstance(input: $input) {
      numUids
      eventInstance {
        iid
        occurrences {
          iid
          endDateTime
          startDateTime
        }
      }
    }
  }
`
