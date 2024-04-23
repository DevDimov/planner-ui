import { gql } from '../codegen/gql'

export const UPDATE_TAG = gql(`mutation UpdateTag($input: UpdateTagInput!) {
    updateTag(input: $input) {
      numUids
      tag {
        iid
        id
        label
        color
      }
    }
  }`)
