import { expect } from '@jest/globals'
import { getDayColorClass } from './index'
import nextMonday from 'date-fns/nextMonday'
import nextSaturday from 'date-fns/nextSaturday'
import subMonths from 'date-fns/subMonths'

const currentDate = new Date(2023, 11, 18)

test('returns 900 for week day for the current month', () => {
  const actual = getDayColorClass(nextMonday(currentDate), currentDate)
  expect(actual).toBe('text-blue-900')
})

test('returns 400 for weekend day for the current month', () => {
  const actual = getDayColorClass(nextSaturday(currentDate), currentDate)
  expect(actual).toBe('text-blue-400')
})

test('returns 300 for a day in the previous month', () => {
  const actual = getDayColorClass(subMonths(currentDate, 1), currentDate)
  expect(actual).toBe('text-blue-300')
})
