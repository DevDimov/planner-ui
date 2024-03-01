import { gql } from '../codegen/gql'

export const QUERY_USER = gql(`
  query QueryUser($filter: UserFilter) {
    queryUser(filter: $filter) {
      email
      iid
    }
  }
`)
