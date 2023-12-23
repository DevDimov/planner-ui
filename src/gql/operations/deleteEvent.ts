import { gql } from '@apollo/client'

export const DELETE_EVENT = gql`
  mutation DeleteEvent($filter: EventFilter!) {
    deleteEvent(filter: $filter) {
      numUids
      event {
        id
        label
      }
    }
  }
`
