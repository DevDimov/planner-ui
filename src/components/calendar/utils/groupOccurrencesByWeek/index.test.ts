import { expect } from '@jest/globals'
import { groupOccurrencesByWeek } from './index'

test('groups two occurrences in one week', () => {
  const data = [
    {
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-31T00:00:00Z',
    },
    {
      startDateTime: '2023-12-25T00:00:00Z',
      endDateTime: '2023-12-25T00:00:00Z',
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
      label: 'Full Week Event',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-31T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      // Week 53
      label: 'Single Day Event',
      startDateTime: '2023-12-25T00:00:00.000Z',
      endDateTime: '2023-12-25T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      // Week 1
      label: 'Jan Day Event',
      startDateTime: '2024-01-01T00:00:00.000Z',
      endDateTime: '2024-01-01T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
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
