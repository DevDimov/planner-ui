import { gql } from '../../gql/codegen'

export const ADD_TAG =
  gql(`mutation AddTag($input: [AddTagInput!]!, $upsert: Boolean) {
  addTag(input: $input, upsert: $upsert) {
    numUids
    tag {
      iid
      id
      label
      color
    }
  }
}`)
