import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation DeleteUser($filter: UserFilter!) {
    deleteUser(filter: $filter) {
      numUids
    }
  }
`
