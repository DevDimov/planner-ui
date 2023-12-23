import { gql } from "@apollo/client";

export const DELETE_EVENT_INSTANCE = gql`
  mutation DeleteEventInstance($filter: EventInstanceFilter!) {
    deleteEventInstance(filter: $filter) {
      numUids
      eventInstance {
        iid
      }
    }
  }
`
