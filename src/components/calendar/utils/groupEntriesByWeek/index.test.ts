import { expect } from '@jest/globals'
import { groupEntriesByWeek } from './index'
import { EventEntryData } from '../../../../models/eventEntry'

test('groups two entries in one week', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week53',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      event: {
        iid: '',
        label: 'A 7-day entry in week 53',
      },
    },
    {
      iid: 'entry2.week53',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      event: {
        iid: '',
        label: 'A 1-day entry in week 53',
      },
    },
  ]

  const grouped = groupEntriesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(1)
  expect(groups).toContain('53')

  expect(grouped['53']).toHaveLength(2)
})

test('groups an array of 3 entries spanning 2 weeks', () => {
  const data: EventEntryData[] = [
    {
      // Week 53
      iid: 'entry1.week53',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 7-day event in week 53',
      },
    },
    {
      // Week 53
      iid: 'entry2.week53',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 53',
      },
    },
    {
      // Week 1
      iid: 'entry3.week1',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 1 of the next year',
      },
    },
  ]

  const grouped = groupEntriesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(2)
  expect(groups).toContain('53')
  expect(groups).toContain('1')

  expect(grouped['53']).toHaveLength(2)
  expect(grouped['1']).toHaveLength(1)
})

test('returns an empty object when argument is an empty array', () => {
  const data: EventEntryData[] = []

  const grouped = groupEntriesByWeek(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})

test('adds an entry spanning 3 weeks 3 times: the week it starts, the week it ends and the weeks in between', () => {
  const data: EventEntryData[] = [
    {
      // Week 51 to 53
      iid: 'entry1.week51-53',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 51 to 53',
      },
    },
  ]

  const grouped = groupEntriesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(3)

  expect(groups).toContain('51')
  expect(groups).toContain('52')
  expect(groups).toContain('53')

  expect(grouped['51']).toHaveLength(1)
  expect(grouped['52']).toHaveLength(1)
  expect(grouped['53']).toHaveLength(1)
})

test('allocates two entries spanning 3 weeks 3 times each', () => {
  const data: EventEntryData[] = [
    {
      // Entry 1 Week 51 to 53
      iid: 'entry1.week51-53',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 51 to 53',
      },
    },
    {
      // Entry 2 Week 51 to 53
      iid: 'entry2.week51-53',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 51 to 53',
      },
    },
  ]

  const grouped = groupEntriesByWeek(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(3)

  expect(groups).toContain('51')
  expect(groups).toContain('52')
  expect(groups).toContain('53')

  expect(grouped['51']).toHaveLength(2)
  expect(grouped['52']).toHaveLength(2)
  expect(grouped['53']).toHaveLength(2)
})
