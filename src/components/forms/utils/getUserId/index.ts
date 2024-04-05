import { User } from '@auth0/auth0-react'

export const getUserId = ({ user }: { user?: User }): string | undefined => {
  return user?.sub || undefined
}
