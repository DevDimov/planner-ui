import { gql } from '../codegen/gql'

export const QUERY_EVENT = gql(`
  query QueryEvent($filter: EventFilter) {
    queryEvent(filter: $filter) {
      iid
      id
      label
      tags {
        id
        iid
        label
      }
    }
  }
`)

// export const QUERY_ALL_EVENTS = gql(`
// query QueryEvent {
//   queryEvent {
//     iid
//     id
//     label
//     entries {
//       iid
//       startDateTime
//       endDateTime
//     }
//     tags {
//       id
//       iid
//       label
//     }
//     properties {
//       id
//       iid
//       label
//       value
//     }
//     user {
//       email
//       iid
//     }
//   }
// }
// `)
