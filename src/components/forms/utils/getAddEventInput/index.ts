import { AddEventInput, AddUserInput } from '../../../../gql/codegen/graphql'

export const getAddEventInput = ({
  userId,
  userPayload,
  eventLabel,
}: {
  userId: string
  userPayload: AddUserInput
  eventLabel: string
}): AddEventInput => {
  return {
    id: ''.concat(userId, '|', eventLabel),
    label: eventLabel,
    user: userPayload,
  }
}
