import { gql } from '../codegen/gql'

export const ADD_EVENT_ENTRY = gql(`
  mutation AddEventInstanceOccurrence(
    $input: [AddEventInstanceOccurrenceInput!]!
  ) {
    addEventInstanceOccurrence(input: $input) {
      numUids
    }
  }
`)
