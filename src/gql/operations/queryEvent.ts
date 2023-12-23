import { gql } from '../codegen/gql'

// export const QUERY_EVENT = gql`
//   query QueryEvent($filter: EventFilter) {
//     queryEvent(filter: $filter) {
//       id
//       iid
//       label
//       instances {
//         id
//         occurrences {
//           endDateTime
//           startDateTime
//           iid
//         }
//         tags {
//           id
//           iid
//           label
//         }
//       }
//     }
//   }
// `

export const QUERY_ALL_EVENTS = gql(`
query QueryEvent {
  queryEvent {
    id
    iid
    instances {
      id
      iid
      occurrences {
        endDateTime
        iid
        startDateTime
      }
      tags {
        id
        iid
        label
      }
    }
    label
    properties {
      id
      iid
      label
      value
    }
    user {
      email
      iid
    }
  }
}
`)
