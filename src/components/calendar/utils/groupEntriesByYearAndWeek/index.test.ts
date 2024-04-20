import { expect } from '@jest/globals'
import { groupEntriesByYearAndWeek } from './index'
import { EventEntryData } from '../../../../models/eventEntry'

test('groups two entries in one year and one week', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week53.2023',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
      event: {
        iid: '',
        label: 'A 7-day entry in week 53 of year 2023',
      },
    },
    {
      iid: 'entry2.week53.2023',
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
      event: {
        iid: '',
        label: 'A 1-day entry in week 53 of year 2023',
      },
    },
  ]

  const grouped = groupEntriesByYearAndWeek(data)
  const groupsByYear = Object.keys(grouped)

  expect(groupsByYear).toHaveLength(1)
  expect(groupsByYear).toContain('2023')

  const entriesByWeek = grouped['2023']
  const groupsByWeek = Object.keys(entriesByWeek)

  expect(groupsByWeek).toHaveLength(1)
  expect(groupsByWeek).toContain('53')
  expect(entriesByWeek['53']).toHaveLength(2)
})

test('groups 3 entries spanning 2 weeks and 2 years', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week53.2023',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 7-day event in week 53 of 2023',
      },
    },
    {
      iid: 'entry2.week53.2023',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 53 of year 2023',
      },
    },
    {
      iid: 'entry3.week1.2024',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 1 of year 2024',
      },
    },
  ]

  const grouped = groupEntriesByYearAndWeek(data)
  const groupsByYear = Object.keys(grouped)

  expect(groupsByYear).toHaveLength(2)
  expect(groupsByYear).toContain('2023')
  expect(groupsByYear).toContain('2024')

  const groupsByWeekYear2023 = Object.keys(grouped['2023'])
  const groupsByWeekYear2024 = Object.keys(grouped['2024'])

  expect(groupsByWeekYear2023).toHaveLength(1)
  expect(groupsByWeekYear2023).toContain('53')
  expect(grouped['2023']['53']).toHaveLength(2)

  expect(groupsByWeekYear2024).toHaveLength(1)
  expect(groupsByWeekYear2024).toContain('1')
  expect(grouped['2024']['1']).toHaveLength(1)
})

test('returns an empty object when argument is an empty array', () => {
  const data: EventEntryData[] = []

  const grouped = groupEntriesByYearAndWeek(data)
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})

test('adds an entry spanning 53 weeks correctly: the week and year it starts, the week and year it ends', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week1-53.year2023-2024',
      startDateTime: '2023-01-01T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 53-week event in 2023',
      },
    },
  ]

  const grouped = groupEntriesByYearAndWeek(data)
  const groupsByYear = Object.keys(grouped)

  expect(groupsByYear).toHaveLength(1)
  expect(groupsByYear).toContain('2023')
  const groupsByWeek2023 = Object.keys(grouped['2023'])
  expect(groupsByWeek2023).toHaveLength(53)
})

test('adds an entry spanning 2 years and 52 weeks correctly: the week and year it starts, the week and year it ends and the weeks and years in between', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week4-2023.week4-2024',
      startDateTime: '2023-01-22T00:00:00.000Z',
      endDateTime: '2024-01-22T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 53-week event spanning 2023 and 2024',
      },
    },
  ]

  const grouped = groupEntriesByYearAndWeek(data)

  const groupsByYear = Object.keys(grouped)
  expect(groupsByYear).toHaveLength(2)
  expect(groupsByYear).toContain('2023')
  expect(groupsByYear).toContain('2024')

  const groupsByWeek2023 = Object.keys(grouped['2023'])
  expect(groupsByWeek2023).toHaveLength(50)
  expect(groupsByWeek2023).toContain('4')
  expect(groupsByWeek2023).toContain('53')

  const groupsByWeek2024 = Object.keys(grouped['2024'])
  expect(groupsByWeek2024).toHaveLength(4)
  expect(groupsByWeek2024).toContain('1')
  expect(groupsByWeek2024).toContain('4')
})

test('allocates two entries spanning 3 weeks 3 times each', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week51-53',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 51 to 53',
      },
    },
    {
      iid: 'entry2.week51-53',
      startDateTime: '2023-12-17T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 51 to 53',
      },
    },
  ]

  const grouped = groupEntriesByYearAndWeek(data)
  const groups = Object.keys(grouped)
  expect(groups).toHaveLength(1)
  expect(groups).toContain('2023')

  expect(grouped['2023']).toHaveProperty('51')
  expect(grouped['2023']).toHaveProperty('52')
  expect(grouped['2023']).toHaveProperty('53')

  expect(grouped['2023']['51']).toHaveLength(2)
  expect(grouped['2023']['52']).toHaveLength(2)
  expect(grouped['2023']['53']).toHaveLength(2)
})
