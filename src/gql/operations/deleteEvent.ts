import { gql } from '../codegen/gql'

export const DELETE_EVENT = gql(`
  mutation DeleteEvent($filter: EventFilter!) {
    deleteEvent(filter: $filter) {
      numUids
      event {
        iid
        id
        label
      }
    }
  }
`)
