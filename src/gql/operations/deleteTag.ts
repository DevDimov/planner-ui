import { gql } from '../codegen/gql'

export const DELETE_TAG = gql(`
  mutation DeleteTag($filter: TagFilter!) {
    deleteTag(filter: $filter) {
      numUids
      tag {
        iid
        id
        label
        color
      }
    }
  }
`)
