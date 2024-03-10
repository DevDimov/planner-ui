import { gql } from '../codegen'

export const QUERY_TAG = gql(`
  query QueryTag {
    queryTag {
      iid
      id
      label
    }
  }
`)
