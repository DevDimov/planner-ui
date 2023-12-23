import { gql } from '@apollo/client'

export const UPDATE_EVENT_INSTANCE = gql`
  mutation UpdateEventInstance($input: UpdateEventInstanceInput!) {
    updateEventInstance(input: $input) {
      numUids
      eventInstance {
        iid
      }
    }
  }
`
