import { gql } from '@apollo/client'

export const QUERY_EVENT_PROPERTY = gql`
  query QueryEventProperty($filter: EventPropertyFilter) {
    queryEventProperty(filter: $filter) {
      id
      label
      value
      event {
        user {
          email
        }
      }
    }
  }
`
