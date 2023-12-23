import { gql } from '@apollo/client'

export const DELETE_EVENT_INSTANCE_OCCURRENCE = gql`
  mutation DeleteEventInstanceOccurrence(
    $filter: EventInstanceOccurrenceFilter!
  ) {
    deleteEventInstanceOccurrence(filter: $filter) {
      numUids
      eventInstanceOccurrence {
        endDateTime
        iid
        startDateTime
      }
    }
  }
`
