import { expect } from '@jest/globals'
import { getDayColorClass } from './index'
import nextMonday from 'date-fns/nextMonday'
import nextSaturday from 'date-fns/nextSaturday'
import subMonths from 'date-fns/subMonths'

const testDate = new Date(2023, 11, 18)

test('returns text-red-600 for today', () => {
  const today = new Date()
  const actual = getDayColorClass(today, today)
  expect(actual).toBe('text-red-600')
})

test('returns 900 for a week day for the current month', () => {
  const actual = getDayColorClass(nextMonday(testDate), testDate)
  expect(actual).toBe('text-blue-900')
})

test('returns 400 for a weekend day for the current month', () => {
  const actual = getDayColorClass(nextSaturday(testDate), testDate)
  expect(actual).toBe('text-blue-400')
})

test('returns 300 for a day in the previous month', () => {
  const actual = getDayColorClass(subMonths(testDate, 1), testDate)
  expect(actual).toBe('text-blue-300')
})
