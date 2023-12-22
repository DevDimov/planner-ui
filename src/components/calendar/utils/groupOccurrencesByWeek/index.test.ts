import { expect } from '@jest/globals'
import { groupOccurrencesByWeek } from './index'

test('groups an array of 3 occurrences spanning 2 weeks', () => {
  const data = [
    {
      // Week 53
      label: 'Full Week Event',
      start: '2023-12-25T00:00:00.000Z',
      end: '2023-12-31T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      // Week 53
      label: 'Single Day Event',
      start: '2023-12-25T00:00:00.000Z',
      end: '2023-12-25T00:00:00.000Z',
      tags: [{ label: 'Yellow', color: 'yellow' }],
    },
    {
      // Week 1
      label: 'Jan Day Event',
      start: '2024-01-01T00:00:00.000Z',
      end: '2024-01-01T00:00:00.000Z',
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
