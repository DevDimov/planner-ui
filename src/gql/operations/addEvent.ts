import { gql } from '../codegen/gql'

export const ADD_EVENT =
  gql(`mutation AddEvent($upsert: Boolean, $input: [AddEventInput!]!) {
  addEvent(upsert: $upsert, input: $input) {
    numUids
    event {
      id
      iid
      label
      properties {
        iid
        id
        label
        value
      }
    }
  }
}`)
