import { gql } from '@apollo/client/core'

export const QUERY_USER = gql`
  query QueryUser($filter: UserFilter) {
    queryUser(filter: $filter) {
      email
      iid
    }
  }
`
