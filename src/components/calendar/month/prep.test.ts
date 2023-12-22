import { describe, expect, test } from '@jest/globals'
import { groupDatesByWeek } from '../utils/groupDatesByWeek'
import { getAllDaysInMonth } from '../utils/getAllDaysInMonth'

describe('test', () => {
  test('adds 1 + 2 to equal 3', () => {
    const weeksGroup = groupDatesByWeek(
      getAllDaysInMonth(new Date(2023, 11, 21))
    )
    // const occurrencesTest = [
    //   {
    //     label: 'Full Week Event',
    //     dateStart: '2023-12-25T00:00:00.000Z',
    //     dateEnd: '2023-12-31T00:00:00.000Z',
    //     tags: [{ label: 'Yellow', color: 'yellow' }],
    //   },
    //   {
    //     label: 'Single Day Event',
    //     dateStart: '2023-12-25T00:00:00.000Z',
    //     dateEnd: '2023-12-25T00:00:00.000Z',
    //     tags: [{ label: 'Yellow', color: 'yellow' }],
    //   },
    //   {
    //     label: 'Jan Day Event',
    //     dateStart: '2024-01-01T00:00:00.000Z',
    //     dateEnd: '2024-01-01T00:00:00.000Z',
    //     tags: [{ label: 'Yellow', color: 'yellow' }],
    //   },
    // ]
    expect(weeksGroup).toHaveProperty('54')
  })
})
