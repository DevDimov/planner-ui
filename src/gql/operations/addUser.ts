import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation AddUser($input: [AddUserInput!]!, $upsert: Boolean) {
    addUser(input: $input, upsert: $upsert) {
      numUids
    }
  }
`
