import { expect } from '@jest/globals'
import { getAllDaysInMonth } from '../getAllDaysInMonth'
import { getWeeksForCalendarMonth } from '.'

test('returns an unordered list of week numbers for Dec 2023', () => {
  const allDaysInMonth = getAllDaysInMonth(new Date(2023, 11, 1))
  const weeks = getWeeksForCalendarMonth(allDaysInMonth)
  expect(weeks).toEqual([48, 49, 50, 51, 52])
})

test('returns an unordered list of week numbers for Jan 2023 which includes Dec 2022', () => {
  const allDaysInMonth = getAllDaysInMonth(new Date(2023, 0, 1))
  const weeks = getWeeksForCalendarMonth(allDaysInMonth)
  expect(weeks).toEqual([53, 1, 2, 3, 4, 5])
})

test('returns an unordered list of week numbers for Dec 2024 which spills into 2025', () => {
  const allDaysInMonth = getAllDaysInMonth(new Date(2024, 11, 1))
  const weeks = getWeeksForCalendarMonth(allDaysInMonth)
  expect(weeks).toEqual([48, 49, 50, 51, 52, 1])
})

test('returns an unordered list of week numbers for Jan 2024 which does not include Dec 2023', () => {
  const allDaysInMonth = getAllDaysInMonth(new Date(2024, 0, 1))
  const weeks = getWeeksForCalendarMonth(allDaysInMonth)
  expect(weeks).toEqual([1, 2, 3, 4, 5])
})
