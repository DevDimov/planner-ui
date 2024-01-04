// import { gql } from '../codegen/gql'

import { gql } from "@apollo/client";

export const QUERY_EVENT_INSTANCE_OCCURRENCE = gql(`
query QueryEventInstanceOccurrence {
  queryEventInstanceOccurrence {
    iid
    startDateTime
    endDateTime
    eventInstance {
      iid
      id
      tags {
        id
        iid
        label
      }
      event {
        id
        iid
        label
        properties {
          id
          iid
          label
          value
        }
      }
    }
  }
}
`)
