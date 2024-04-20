import { expect } from '@jest/globals'
import { getAllDaysInMonth } from '../getAllDaysInMonth'
import { groupDatesByWeek } from '.'

test('groups an array of dates for Dec 2023 into 5 weeks of 7 days each', () => {
  const days = getAllDaysInMonth(new Date(2023, 11, 1), { weekStartsOn: 1 })
  const grouped = groupDatesByWeek(days)
  const groups = Object.keys(grouped)

  expect(groups).toEqual(['49', '50', '51', '52', '53'])

  Object.values(grouped).forEach((value) => {
    expect(value.length).toEqual(7)
  })
})

test('groups an array of dates for Dec 2024 into 5 weeks of 7 days each', () => {
  const days = getAllDaysInMonth(new Date(2024, 11, 1), { weekStartsOn: 1 })
  const grouped = groupDatesByWeek(days)
  const groups = Object.keys(grouped)

  expect(groups).toEqual(['1', '48', '49', '50', '51', '52'])

  Object.values(grouped).forEach((value) => {
    expect(value.length).toEqual(7)
  })
})
