import { expect } from '@jest/globals'
import { getEventColumns } from '.'

const weekdays = [
  new Date(2023, 11, 25),
  new Date(2023, 11, 26),
  new Date(2023, 11, 27),
  new Date(2023, 11, 28),
  new Date(2023, 11, 29),
  new Date(2023, 11, 30),
  new Date(2023, 11, 31),
]

const sevendDateTimeayEvent = {
  startDateTime: '2023-12-25T00:00:00.000Z',
  endDateTime: '2023-12-31T00:00:00.000Z',
}

const oneDayEvent = {
  startDateTime: '2023-12-27T00:00:00.000Z',
  endDateTime: '2023-12-27T00:00:00.000Z',
}

const threeDayEvent = {
  startDateTime: '2023-12-27T00:00:00.000Z',
  endDateTime: '2023-12-29T00:00:00.000Z',
}

const oneDayEventWeekstartDateTime = {
  startDateTime: '2023-12-25T00:00:00.000Z',
  endDateTime: '2023-12-25T00:00:00.000Z',
}

const oneDayEventWeekendDateTime = {
  startDateTime: '2023-12-31T00:00:00.000Z',
  endDateTime: '2023-12-31T00:00:00.000Z',
}

const multiWeekEvent = {
  startDateTime: '2023-12-24T00:00:00.000Z',
  endDateTime: '2024-01-01T00:00:00.000Z',
}

const eventstartDateTimesThisWeek = {
  startDateTime: '2023-12-28T00:00:00.000Z',
  endDateTime: '2023-01-01T00:00:00.000Z',
}

const eventendDateTimesThisWeek = {
  startDateTime: '2023-12-22T00:00:00.000Z',
  endDateTime: '2023-12-28T00:00:00.000Z',
}

const eventOutsideThisWeek = {
  startDateTime: '2000-01-01T00:00:00.000Z',
  endDateTime: '2000-01-02T00:00:00.000Z',
}

test('returns the columns for a 7-day event', () => {
  const actual = getEventColumns({
    weekdays,
    event: sevendDateTimeayEvent,
  })

  expect(actual).toEqual({ colStart: 1, colEnd: 8 })
})

test('returns the columns for a 1-day event', () => {
  const actual = getEventColumns({ weekdays, event: oneDayEvent })

  expect(actual).toEqual({ colStart: 3, colEnd: 4 })
})

test('returns the columns for a 3-day event', () => {
  const actual = getEventColumns({
    weekdays,
    event: threeDayEvent,
  })

  expect(actual).toEqual({ colStart: 3, colEnd: 6 })
})

test('returns the columns for a 1-day event at the startDateTime of a week', () => {
  const actual = getEventColumns({
    weekdays,
    event: oneDayEventWeekstartDateTime,
  })

  expect(actual).toEqual({ colStart: 1, colEnd: 2 })
})

test('returns the columns for a 1-day event at the endDateTime of a week', () => {
  const actual = getEventColumns({
    weekdays,
    event: oneDayEventWeekendDateTime,
  })

  expect(actual).toEqual({ colStart: 7, colEnd: 8 })
})

test('returns the columns for a multi-week event that encompasses the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: multiWeekEvent,
  })

  expect(actual).toEqual({ colStart: 1, colEnd: 8 })
})

test('returns the columns for an event that only startDateTimes the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventstartDateTimesThisWeek,
  })

  expect(actual).toEqual({ colStart: 4, colEnd: 8 })
})

test('returns the columns for an event that only endDateTimes the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventendDateTimesThisWeek,
  })

  expect(actual).toEqual({ colStart: 1, colEnd: 5 })
})

test('returns the zeros for an event outside the scope of the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventOutsideThisWeek,
  })

  expect(actual).toEqual({ colStart: 0, colEnd: 0 })
})
