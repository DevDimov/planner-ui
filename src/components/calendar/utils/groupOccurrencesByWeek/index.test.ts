import { expect } from '@jest/globals'
import { groupOccurrencesByWeek } from './index'
import { EventEntry } from '../../../../gql/codegen/graphql'

test('groups two entries in one week', () => {
  const data: EventEntry[] = [
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      event: {
        id: '',
        iid: '',
        label: '',
        user: {
          iid: '',
          email: '',
        },
      },
    },
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      event: {
        id: '',
        iid: '',
        label: '',
        user: {
          iid: '',
          email: '',
        },
      },
    },
  ]

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(1)
  expect(groups).toContain('53')

  expect(grouped['53']).toHaveLength(2)
})

test('groups an array of 3 entries spanning 2 weeks', () => {
  const data: EventEntry[] = [
    {
      // Week 53
      iid: '',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        id: '',
        iid: '',
        label: 'Full Week Event',
        tags: [],
        user: {
          iid: '',
          email: '',
        },
      },
    },
    {
      // Week 53
      iid: '',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      event: {
        id: 'Single Day Event',
        iid: '',
        label: '',
        tags: [],
        user: {
          iid: '',
          email: '',
        },
      },
    },
    {
      // Week 1
      iid: '',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        id: '',
        iid: '',
        label: 'Jan Day Event',
        tags: [],
        user: {
          iid: '',
          email: '',
        },
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
  const data: EventEntry[] = []

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})
