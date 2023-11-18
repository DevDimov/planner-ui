import { gql } from '@apollo/client'

export const QUERY_EVENT_CLASS = gql`
  query QueryEventClass {
    queryEventClass {
      id
      label
      user {
        email
        id
      }
    }
  }
`
