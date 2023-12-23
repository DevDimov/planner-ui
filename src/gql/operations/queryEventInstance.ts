import { gql } from '../codegen/gql'

export const QUERY_EVENT_INSTANCE = gql(`
  query QueryEventInstance($filter: EventFilter) {
    queryEventInstance {
      iid
      occurrences {
        iid
        endDateTime
        startDateTime
      }
      event(filter: $filter) {
        id
      }
      tags {
        label
        iid
        id
      }
    }
  }
`)
