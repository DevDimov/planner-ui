import type { Meta, StoryObj } from '@storybook/react'
import Calendar from './index'
import { DELETE_EVENT_ENTRY } from '../../gql/operations/deleteEventEntry'
import { QUERY_EVENT_ENTRY } from '../../gql/operations/queryEventEntry'
import { mockQueryEventEntry } from '../../mockData/queryEventEntry'
import { ADD_EVENT_ENTRY } from '../../gql/operations/addEventEntry'
import { QUERY_TAG } from '../../gql/operations/queryTag'
import { mockQueryTag } from '../../mockData/queryTag'

const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)
const currentISODate = currentDate.toISOString()

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Full',
  component: Calendar,
  parameters: {
    apolloClient: {
      mocks: [
        {
          delay: 1000,
          request: {
            query: QUERY_EVENT_ENTRY,
          },
          result: {
            data: {
              queryEventEntry: mockQueryEventEntry,
            },
          },
        },
        {
          delay: 1000,
          request: {
            query: QUERY_TAG,
          },
          result: {
            data: {
              queryTag: mockQueryTag,
            },
          },
        },
        {
          delay: 1000,
          request: {
            query: DELETE_EVENT_ENTRY,
            variables: { filter: { iid: ['0x1a5086a7de2'] } },
          },
          result: {
            data: {
              deleteEventEntry: {
                numUids: 1,
                eventEntry: {
                  iid: '0x1a5086a7de2',
                  endDateTime: '2023-12-25',
                  startDateTime: '2023-12-25',
                },
              },
            },
          },
        },
        {
          delay: 1000,
          request: {
            query: DELETE_EVENT_ENTRY,
            variables: { filter: { iid: ['0x1a5086a7de1'] } },
          },
          error: new Error('This is a mock network error'),
        },
        {
          delay: 1000,
          request: {
            query: ADD_EVENT_ENTRY,
            variables: {
              input: {
                startDateTime: currentISODate,
                endDateTime: currentISODate,
                event: { id: '0x1a5086a7dd1' },
              },
            },
          },
          result: {
            data: {
              addEventEntry: {
                numUids: 1,
                eventEntry: {
                  iid: '0x1a5086a7de3',
                  startDateTime: currentISODate,
                  endDateTime: currentISODate,
                  event: {
                    iid: '0x1a5086a7dd1',
                    id: 'auth0|65538f46da9fa0033488f080.Margo Dimova.At work',
                    label: 'Margo Dimova',
                    tags: [
                      {
                        id: 'auth0|65538f46da9fa0033488f080.Work',
                        iid: '0x1a5086a7dc',
                        label: 'Work',
                        user: {
                          iid: '',
                          email: '',
                        },
                      },
                    ],
                    properties: [],
                  },
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

export const EmptyCalendar: Story = {}

export const FullCalendar: Story = {}
