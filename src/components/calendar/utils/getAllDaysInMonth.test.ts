import { expect } from '@jest/globals'
import { getAllDaysInMonth } from './getAllDaysInMonth'

test('returns an array of all days in a month from a given date', () => {
  const days = getAllDaysInMonth(new Date(2023, 11, 1), { weekStartsOn: 1 })
  const length = days.length

  expect(length).toEqual(35)
  expect(days[0].toISOString()).toMatch('2023-11-27')
  expect(days[length-1].toISOString()).toMatch('2023-12-31')
})
