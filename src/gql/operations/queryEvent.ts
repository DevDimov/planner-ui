import { gql } from '../codegen/gql'

export const QUERY_EVENT = gql(`
  query QueryEvent($filter: EventFilter) {
    queryEvent(filter: $filter) {
      iid
      id
      label
      properties {
        iid
        id
        label
        value
      }
    }
  }
`)
