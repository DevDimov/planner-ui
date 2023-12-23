import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation Mutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      numUids
    }
  }
`
