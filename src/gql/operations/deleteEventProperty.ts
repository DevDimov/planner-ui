import { gql } from '../codegen/gql'

export const DELETE_EVENT_PROPERTY = gql(`
  mutation DeleteEventProperty($filter: EventPropertyFilter!) {
    deleteEventProperty(filter: $filter) {
      numUids
      eventProperty {
        id
        iid
        label
        value
        event {
          id
          label
        }
      }
    }
  }
`)
