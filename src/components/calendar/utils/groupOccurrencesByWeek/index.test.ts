import { expect } from '@jest/globals'
import { groupOccurrencesByWeek } from './index'
import { EventEntryData } from '../../../../models/eventEntry'

test('groups two entries in one week', () => {
  const data: EventEntryData[] = [
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      event: {
        iid: '',
        label: '',
      },
    },
    {
      iid: '',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      event: {
        iid: '',
        label: '',
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
  const data: EventEntryData[] = [
    {
      // Week 53
      iid: '',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'Full Week Event',
      },
    },
    {
      // Week 53
      iid: '',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      event: {
        iid: '',
        label: '',
      },
    },
    {
      // Week 1
      iid: '',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'Jan Day Event',
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
  const data: EventEntryData[] = []

  const grouped = groupOccurrencesByWeek(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})
