import { gql } from '../codegen/gql'

export const QUERY_EVENT_ENTRY = gql(`
query QueryEventEntry {
    queryEventEntry {
      iid
      startDateTime
      endDateTime
      event {
        iid
        label
      }
    }
  }
`)
