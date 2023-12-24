import { expect } from '@jest/globals'
import { formatDay } from './index'

test('returns 900 for week day for the current month', () => {
  const actual = formatDay(new Date(2023, 11, 2))
  expect(actual).toBe('2')
})

test('returns 400 for weekend day for the current month', () => {
  const actual = formatDay(new Date(2023, 11, 1))
  expect(actual).toBe('1 Dec')
})
