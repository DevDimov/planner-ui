import type { Meta, StoryObj } from '@storybook/react'
import Event from './index'
import { DELETE_EVENT_ENTRY } from '../../gql/operations/deleteEventEntry'

const meta: Meta<typeof Event> = {
  component: Event,
  parameters: {
    layout: 'centered',
    // apolloClient: {
    //   mocks: [
    //     {
    //       request: {
    //         query: DELETE_EVENT_INSTANCE_OCCURRENCE,
    //         variables: { filter: { iid: 'mockIid' } },
    //       },
    //       result: {
    //         data: {
    //           // viewer: null,
    //           eventInstanceOccurrence: [{ iid: 'mockIid' }],
    //         },
    //       },
    //     },
    //   ],
    // },
  },
}

export default meta
type Story = StoryObj<typeof Event>

export const SingleTag: Story = {
  args: {
    iid: 'mockIid',
    label: 'Instance with one tag',
    tags: [
      {
        iid: 't1',
        label: 'Violet',
        id: '',
        user: { email: '', iid: '' },
      },
    ],
    startDateTime: '2023-12-25',
    endDateTime: '2023-12-31',
    properties: [
      {
        iid: 'p1',
        label: 'Event type',
        value: 'Student',
      },
    ],
  },
  // parameters: {
  //   apolloClient: {
  //     mocks: [
  //       {
  //         delay: 1000,
  //         request: {
  //           query: DELETE_EVENT_INSTANCE_OCCURRENCE,
  //           variables: { filter: { iid: 'mockIid' } },
  //         },
  //         result: {
  //           data: {
  //             deleteEventInstanceOccurrence: {
  //               numUids: 1,
  //               eventInstanceOccurrence: {
  //                 iid: 'mockIid',
  //                 endDateTime: '2023-11-30',
  //                 startDateTime: '2023-11-31',
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
}

export const MultipleTags: Story = {
  args: {
    label: 'Instance with multiple tags',
    tags: [
      { label: 'Red', iid: 't1', id: '', user: { email: '', iid: '' } },
      { label: 'Orange', iid: 't2', id: '', user: { email: '', iid: '' } },
      { label: 'Yellow', iid: 't3', id: '', user: { email: '', iid: '' } },
    ],
    startDateTime: '2023-12-25',
    endDateTime: '2023-12-31',
  },
}
