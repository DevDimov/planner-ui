import { gql } from '@apollo/client'

export const ADD_EVENT_INSTANCE_OCCURRENCE = gql`
  mutation AddEventInstanceOccurrence(
    $input: [AddEventInstanceOccurrenceInput!]!
  ) {
    addEventInstanceOccurrence(input: $input) {
      numUids
    }
  }
`
