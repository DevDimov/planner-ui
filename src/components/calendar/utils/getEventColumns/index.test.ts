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

const sevenDayEvent = {
  start: '2023-12-25T00:00:00.000Z',
  end: '2023-12-31T00:00:00.000Z',
}

const oneDayEvent = {
  start: '2023-12-27T00:00:00.000Z',
  end: '2023-12-27T00:00:00.000Z',
}

const threeDayEvent = {
  start: '2023-12-27T00:00:00.000Z',
  end: '2023-12-29T00:00:00.000Z',
}

const oneDayEventWeekStart = {
  start: '2023-12-25T00:00:00.000Z',
  end: '2023-12-25T00:00:00.000Z',
}

const oneDayEventWeekEnd = {
  start: '2023-12-31T00:00:00.000Z',
  end: '2023-12-31T00:00:00.000Z',
}

const multiWeekEvent = {
  start: '2023-12-24T00:00:00.000Z',
  end: '2024-01-01T00:00:00.000Z',
}

const eventStartsThisWeek = {
  start: '2023-12-28T00:00:00.000Z',
  end: '2023-01-01T00:00:00.000Z',
}

const eventEndsThisWeek = {
  start: '2023-12-22T00:00:00.000Z',
  end: '2023-12-28T00:00:00.000Z',
}

const eventOutsideThisWeek = {
  start: '2000-01-01T00:00:00.000Z',
  end: '2000-01-02T00:00:00.000Z',
}

test('returns the columns for a 7-day event', () => {
  const actual = getEventColumns({
    weekdays,
    event: sevenDayEvent,
  })

  expect(actual).toEqual({ gridColumnStart: 1, gridColumnEnd: 8 })
})

test('returns the columns for a 1-day event', () => {
  const actual = getEventColumns({ weekdays, event: oneDayEvent })

  expect(actual).toEqual({ gridColumnStart: 3, gridColumnEnd: 4 })
})

test('returns the columns for a 3-day event', () => {
  const actual = getEventColumns({
    weekdays,
    event: threeDayEvent,
  })

  expect(actual).toEqual({ gridColumnStart: 3, gridColumnEnd: 6 })
})

test('returns the columns for a 1-day event at the start of a week', () => {
  const actual = getEventColumns({
    weekdays,
    event: oneDayEventWeekStart,
  })

  expect(actual).toEqual({ gridColumnStart: 1, gridColumnEnd: 2 })
})

test('returns the columns for a 1-day event at the end of a week', () => {
  const actual = getEventColumns({
    weekdays,
    event: oneDayEventWeekEnd,
  })

  expect(actual).toEqual({ gridColumnStart: 7, gridColumnEnd: 8 })
})

test('returns the columns for a multi-week event that encompasses the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: multiWeekEvent,
  })

  expect(actual).toEqual({ gridColumnStart: 1, gridColumnEnd: 8 })
})

test('returns the columns for an event that only starts the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventStartsThisWeek,
  })

  expect(actual).toEqual({ gridColumnStart: 4, gridColumnEnd: 8 })
})

test('returns the columns for an event that only ends the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventEndsThisWeek,
  })

  expect(actual).toEqual({ gridColumnStart: 1, gridColumnEnd: 5 })
})

test('returns the zeros for an event outside the scope of the given week', () => {
  const actual = getEventColumns({
    weekdays,
    event: eventOutsideThisWeek,
  })

  expect(actual).toEqual({ gridColumnStart: 0, gridColumnEnd: 0 })
})
