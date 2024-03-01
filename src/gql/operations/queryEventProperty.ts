import { gql } from '../codegen/gql'

export const QUERY_EVENT_PROPERTY = gql(`
  query QueryEventProperty($filter: EventPropertyFilter) {
    queryEventProperty(filter: $filter) {
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
`)
