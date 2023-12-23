import { gql } from '@apollo/client'

export const DELETE_EVENT_INSTANCE_TAG = gql`
  mutation DeleteEventInstanceTag($filter: EventInstanceTagFilter!) {
    deleteEventInstanceTag(filter: $filter) {
      numUids
      eventInstanceTag {
        id
        iid
        label
      }
    }
  }
`
