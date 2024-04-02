import { gql } from '../codegen/gql'

export const DELETE_EVENT_PROPERTY = gql(`
  mutation DeleteEventProperty($filter: EventPropertyFilter!) {
    deleteEventProperty(filter: $filter) {
      numUids
      eventProperty {
        iid
        id
        label
        value
        event {
          iid
          id
          label
        }
      }
    }
  }
`)
