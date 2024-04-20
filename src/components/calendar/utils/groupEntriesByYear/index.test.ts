import { expect } from '@jest/globals'
import { groupEntriesByYear } from './index'
import { EventEntryData } from '../../../../models/eventEntry'

test('groups two entries in one year', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.2023',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      event: {
        iid: '',
        label: 'A 7-day entry in 2023',
      },
    },
    {
      iid: 'entry2.2023',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      event: {
        iid: '',
        label: 'A 1-day entry in 2023',
      },
    },
  ]

  const grouped = groupEntriesByYear(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(1)
  expect(groups).toContain('2023')

  expect(grouped['2023']).toHaveLength(2)
})

test('groups 3 entries spanning 2 years', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.2023',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 7-day event in 2023',
      },
    },
    {
      iid: 'entry2.2023',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in 2023',
      },
    },
    {
      iid: 'entry3.2024',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 1 of year 2024',
      },
    },
  ]

  const grouped = groupEntriesByYear(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(2)
  expect(groups).toContain('2023')
  expect(groups).toContain('2024')

  expect(grouped['2023']).toHaveLength(2)
  expect(grouped['2024']).toHaveLength(1)
})

test('returns an empty object when argument is an empty array', () => {
  const data: EventEntryData[] = []

  const grouped = groupEntriesByYear(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})

test('adds an entry spanning 3 years 3 times: the week it starts, the week it ends and the weeks in between', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.2023-2025',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2025-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-year event spanning years 2023 to 2025',
      },
    },
  ]

  const grouped = groupEntriesByYear(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(3)

  expect(groups).toContain('2023')
  expect(groups).toContain('2024')
  expect(groups).toContain('2025')

  expect(grouped['2023']).toHaveLength(1)
  expect(grouped['2024']).toHaveLength(1)
  expect(grouped['2025']).toHaveLength(1)
})

test('allocates two entries spanning 3 years 3 times each', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week2023-25',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2025-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-year event spanning 2023 to 2025',
      },
    },
    {
      iid: 'entry2.week2023-2025',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2025-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-year event spanning 2023 to 2025',
      },
    },
  ]

  const grouped = groupEntriesByYear(data)
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(3)

  expect(groups).toContain('2023')
  expect(groups).toContain('2024')
  expect(groups).toContain('2025')

  expect(grouped['2023']).toHaveLength(2)
  expect(grouped['2024']).toHaveLength(2)
  expect(grouped['2025']).toHaveLength(2)
})
