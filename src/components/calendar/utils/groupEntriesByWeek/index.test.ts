import { expect } from '@jest/globals'
import { groupEntriesByWeekToYearEnd } from './index'
import { EventEntryData } from '../../../../models/eventEntry'

test('groups two entries in one week in one year', () => {
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

  const grouped = groupEntriesByWeekToYearEnd(data, '2023')
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(1)
  expect(groups).toContain('53')

  expect(grouped['53']).toHaveLength(2)
})

test('groups 3 entries spanning 2 weeks to a given year end', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week53',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 7-day event in week 53',
      },
    },
    {
      iid: 'entry2.week53',
      startDateTime: '2023-12-26T00:00:00.000Z',
      endDateTime: '2023-12-26T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 53',
      },
    },
    {
      iid: 'entry3.week1',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 1-day event in week 1 of the next year',
      },
    },
  ]

  const grouped2023 = groupEntriesByWeekToYearEnd(data, '2023')
  const groups2023 = Object.keys(grouped2023)

  expect(groups2023).toHaveLength(1)
  expect(groups2023).toContain('53')

  expect(grouped2023['53']).toHaveLength(2)

  const grouped2024 = groupEntriesByWeekToYearEnd(data, '2024')
  const groups2024 = Object.keys(grouped2024)

  expect(groups2024).toHaveLength(1)
  expect(groups2024).toContain('1')

  expect(grouped2024['1']).toHaveLength(1)
})

test('returns an empty object when argument is an empty array and null reference year', () => {
  const data: EventEntryData[] = []

  const grouped = groupEntriesByWeekToYearEnd(data, '')
  const groups = Object.keys(grouped)

  expect(grouped).toEqual({})
  expect(groups).toHaveLength(0)
})

test('adds an entry spanning 3 weeks 3 times: the week it starts, the week it ends and the weeks in between', () => {
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
  ]

  const grouped = groupEntriesByWeekToYearEnd(data, '2023')
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

  const grouped = groupEntriesByWeekToYearEnd(data, '2023')
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(3)

  expect(groups).toContain('51')
  expect(groups).toContain('52')
  expect(groups).toContain('53')

  expect(grouped['51']).toHaveLength(2)
  expect(grouped['52']).toHaveLength(2)
  expect(grouped['53']).toHaveLength(2)
})

test('adds an entry spanning 53 weeks 53 times: the week it starts, the week it ends and the weeks in between', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week1-53',
      startDateTime: '2023-01-01T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 53-week event spanning weeks 1 to 53',
      },
    },
  ]

  const grouped = groupEntriesByWeekToYearEnd(data, '2023')
  const groups = Object.keys(grouped)

  expect(groups).toHaveLength(53)

  expect(groups).toContain('1')
  expect(groups).toContain('53')

  expect(grouped['1']).toHaveLength(1)
  expect(grouped['53']).toHaveLength(1)

  const grouped2000 = groupEntriesByWeekToYearEnd(data, '2000')
  const groups2000 = Object.keys(grouped2000)
  expect(groups2000).toHaveLength(0)
})

test('given that the start week number is bigger than the end week number, it adds an entry spanning 3 weeks 3 times', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week52/2023-week1/2024',
      startDateTime: '2023-12-18T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      event: {
        iid: '',
        label: 'A 3-week event spanning weeks 52 to 1 next year',
      },
    },
  ]

  const grouped2023 = groupEntriesByWeekToYearEnd(data, '2023')
  const groups2023 = Object.keys(grouped2023)
  expect(groups2023).toHaveLength(2)
  expect(groups2023).toContain('52')
  expect(groups2023).toContain('53')
  expect(grouped2023['52']).toHaveLength(1)
  expect(grouped2023['53']).toHaveLength(1)

  const grouped2024 = groupEntriesByWeekToYearEnd(data, '2024')
  const groups2024 = Object.keys(grouped2024)
  expect(groups2024).toHaveLength(1)
  expect(groups2024).toContain('1')
  expect(grouped2024['1']).toHaveLength(1)
})

test('given the start week is smaller than the end week and the end date is the year after, it adds an entry spanning 54 weeks', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week1/2023-week2/2024',
      startDateTime: '2023-01-01T00:00:00.000Z',
      endDateTime: '2024-01-08T00:00:00.000Z',
      event: {
        iid: '',
        label:
          'A 54-week event spanning weeks 1-53 in year 2023 and 1-2 in year 2024',
      },
    },
  ]

  const grouped2023 = groupEntriesByWeekToYearEnd(data, '2023')
  const groups2023 = Object.keys(grouped2023)
  expect(groups2023).toHaveLength(53)
  expect(groups2023).toContain('1')
  expect(groups2023).toContain('53')
  expect(grouped2023['1']).toHaveLength(1)
  expect(grouped2023['53']).toHaveLength(1)

  const grouped2024 = groupEntriesByWeekToYearEnd(data, '2024')
  const groups2024 = Object.keys(grouped2024)
  expect(groups2024).toHaveLength(2)
  expect(groups2024).toContain('1')
  expect(groups2024).toContain('2')
  expect(grouped2024['1']).toHaveLength(1)
  expect(grouped2024['2']).toHaveLength(1)
})

test('allocates an entry spanning 3 years', () => {
  const data: EventEntryData[] = [
    {
      iid: 'entry1.week50/2023-week4/2025',
      startDateTime: '2023-12-11T00:00:00.000Z',
      endDateTime: '2025-01-20T00:00:00.000Z',
      event: {
        iid: '',
        label:
          'An event spanning weeks 51-53 in year 2023, weeks 1-53 in year 2024, and weeks 1-4 in year 2025',
      },
    },
  ]

  const grouped2023 = groupEntriesByWeekToYearEnd(data, '2023')
  const groups2023 = Object.keys(grouped2023)
  expect(groups2023).toHaveLength(3)
  expect(groups2023).toContain('51')
  expect(groups2023).toContain('53')
  expect(grouped2023['51']).toHaveLength(1)
  expect(grouped2023['53']).toHaveLength(1)

  const grouped2024 = groupEntriesByWeekToYearEnd(data, '2024')
  const groups2024 = Object.keys(grouped2024)
  expect(groups2024).toHaveLength(52)
  expect(groups2024).toContain('1')
  expect(groups2024).toContain('52')
  expect(grouped2024['1']).toHaveLength(1)
  expect(grouped2024['52']).toHaveLength(1)

  const grouped2025 = groupEntriesByWeekToYearEnd(data, '2025')
  const groups2025 = Object.keys(grouped2025)
  expect(groups2025).toHaveLength(4)
  expect(groups2025).toContain('1')
  expect(groups2025).toContain('4')
  expect(grouped2025['1']).toHaveLength(1)
  expect(grouped2025['4']).toHaveLength(1)
})
