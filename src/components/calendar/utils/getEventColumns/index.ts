import getDay from 'date-fns/getDay'
import isBefore from 'date-fns/isBefore'
import isSameDay from 'date-fns/isSameDay'
import isSameWeek from 'date-fns/isSameWeek'
import parseISO from 'date-fns/parseISO'

export const getEventColumns = ({
  weekdays,
  event,
}: {
  weekdays: Date[]
  event: { start: string; end: string }
}) => {
  const columns = [7, 1, 2, 3, 4, 5, 6]
  const length = weekdays.length
  let gridColumnStart = 0
  let gridColumnEnd = 0

  const eventStart = parseISO(event.start)
  const eventEnd = parseISO(event.end)

  weekdays.forEach((day, index) => {
    // If start is in the given week days but end my or may not be
    if (isSameDay(day, eventStart)) {
      gridColumnStart = columns[getDay(day)]

      const eventEndsTheSameWeek = weekdays.find((date) =>
        isSameDay(date, eventEnd)
      )

      eventEndsTheSameWeek
        ? (gridColumnEnd = columns[getDay(eventEnd)] + 1)
        : (gridColumnEnd = 8)
    }

    // If end is in the given week but start isn't
    else if (
      isSameDay(day, eventEnd) &&
      isSameWeek(eventStart, eventEnd, {
        weekStartsOn: 1,
      }) === false
    ) {
      gridColumnEnd = columns[getDay(day)] + 1
      gridColumnStart = 1
    }

    // If the event is outside the scope of the given week the last iteration
    // else if (
    //   (index === length - 1 && isAfter(weekdays[index], eventEnd)) ||
    //   isAfter(eventStart, weekdays[index])
    // ) {
    //   gridColumnStart = 0
    //   gridColumnEnd = 0
    // }

    // If the event encompasses the given week for the last iteration
    else if (
      index === length - 1 &&
      isBefore(eventStart, weekdays[0]) &&
      isBefore(weekdays[index], eventEnd)
    ) {
      gridColumnStart = 1
      gridColumnEnd = 8
    }
  })

  return { gridColumnStart, gridColumnEnd }
}
