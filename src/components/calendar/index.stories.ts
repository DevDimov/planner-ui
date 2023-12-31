import type { Meta, StoryObj } from '@storybook/react'
import Calendar from './index'
import { DELETE_EVENT_INSTANCE_OCCURRENCE } from '../../gql/operations/deleteEventInstanceOccurence'

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Full',
  component: Calendar,
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: DELETE_EVENT_INSTANCE_OCCURRENCE,
            variables: { filter: { iid: '0x1a5086a7de2' } },
          },
          result: {
            data: {
              deleteEventInstanceOccurrence: {
                numUids: 1,
                eventInstanceOccurrence: {
                  iid: '0x1a5086a7de2',
                  endDateTime: '2023-12-25',
                  startDateTime: '2023-12-25',
                },
              },
            },
          },
        },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const EmptyCalendar: Story = {
  // args: {
  //   occurrences: [],
  // },
}

export const FullCalendar: Story = {
  // args: {
  //   occurrences: mockQueryEventInstanceOccurrence,
  // },
}
