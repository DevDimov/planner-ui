// import { gql } from '@apollo/client'
import { gql } from '../codegen/gql'

export const QUERY_EVENT_ENTRY = gql(`
query QueryEventEntry($filter: EventFilter) {
    queryEventEntry {
      iid
      startDateTime
      endDateTime
      event(filter: $filter) {
        iid
        id
        label
        tags {
          iid
          id
          label
        }
        properties {
          iid
          id
          label
          value
        }
      }
    }
  }
`)
