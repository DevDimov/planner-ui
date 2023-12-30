import { expect } from '@jest/globals'
import { groupOccurrencesByWeek } from './index'
import { EventInstanceOccurrence } from '../../../../gql/codegen/graphql'

test('groups two occurrences in one week', () => {
  const data = [
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      eventInstance: {
        event: {
          id: '',
          iid: '',
          label: '',
          user: {
            iid: '',
            email: '',
          },
        },
        id: '',
        iid: '',
      },
    },
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      eventInstance: {
        event: {
          id: '',
          iid: '',
          label: '',
          user: {
            iid: '',
            email: '',
          },
        },
        id: '',
        iid: '',
      },
    },
  ]

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(1)
  expect(groups).toContain('53')

  expect(grouped['53']).toHaveLength(2)
})

test('groups an array of 3 occurrences spanning 2 weeks', () => {
  const data = [
    {
      // Week 53
      iid: '',
      label: 'Full Week Event',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
      eventInstance: {
        event: {
          id: '',
          iid: '',
          label: '',
          user: {
            iid: '',
            email: '',
          },
        },
        id: '',
        iid: '',
      },
    },
    {
      // Week 53
      iid: '',
      label: 'Single Day Event',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
      eventInstance: {
        event: {
          id: '',
          iid: '',
          label: '',
          user: {
            iid: '',
            email: '',
          },
        },
        id: '',
        iid: '',
      },
    },
    {
      // Week 1
      iid: '',
      label: 'Jan Day Event',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
      eventInstance: {
        event: {
          id: '',
          iid: '',
          label: '',
          user: {
            iid: '',
            email: '',
          },
        },
        id: '',
        iid: '',
      },
    },
  ]

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(2)
  expect(groups).toContain('53')
  expect(groups).toContain('1')

  expect(grouped['53']).toHaveLength(2)
  expect(grouped['1']).toHaveLength(1)
})

test('returns an empty object when argument is an empty array', () => {
  const data: EventInstanceOccurrence[] = []

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})
