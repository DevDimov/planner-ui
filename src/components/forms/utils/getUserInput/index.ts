import { User } from '@auth0/auth0-react'
import { AddUserInput } from '../../../../gql/codegen/graphql'

export const getUserInput = ({
  user,
}: {
  user?: User
}): AddUserInput | undefined => {
  const email = user?.email

  if (email) {
    return {
      email,
    }
  }

  return undefined
}
