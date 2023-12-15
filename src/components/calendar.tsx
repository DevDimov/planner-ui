import addMonths from 'date-fns/addMonths'
import './calendar.css'
import format from 'date-fns/format'
import subMonths from 'date-fns/subMonths'
import { useState } from 'react'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfMonth from 'date-fns/endOfMonth'
import startOfMonth from 'date-fns/startOfMonth'
import endOfWeek from 'date-fns/endOfWeek'
import getDay from 'date-fns/getDay'
import isToday from 'date-fns/isToday'
import startOfWeek from 'date-fns/startOfWeek'
import { groupBy } from 'lodash'
import getWeek from 'date-fns/getWeek'
import { example2 } from './example2'
import { example1 } from './example1'
import isSameDay from 'date-fns/isSameDay'
import compareAsc from 'date-fns/compareAsc'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import isSameWeek from 'date-fns/isSameWeek'

// Object.groupBy(_.eachDayOfInterval({
//   start: _.startOfWeek(_.startOfMonth(new Date()), { weekStartsOn: 1 }),
//   end: _.endOfWeek(_.endOfMonth(new Date()), { weekStartsOn: 1 }),
// }), (day) => _.getWeek(day, { weekStartsOn: 1 }))

// Object.entries(groupBy(getAllDaysInMonth(month), (day) => getWeek(day))

const getAllDaysInMonth = (date: Date) => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(date), { weekStartsOn: 1 }),
  })
}

const myDate = {
  start: new Date(2023, 11, 9), // Dec 9
  // end: new Date(2023, 11, 11), // Dec 11
  end: new Date(2023, 11, 21), // Dec 21
}

export default function Calendar() {
  const today = new Date()
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const [month, setMonth] = useState(startOfMonth(today))

  const handlePreviousMonth = () => {
    const newMonth = subMonths(month, 1)
    setMonth(newMonth)
  }

  const handleNextMonth = () => {
    const newMonth = addMonths(month, 1)
    setMonth(newMonth)
  }

  return (
    <div className="">
      <ul className="navigation-controls">
        <li>
          <button onClick={handlePreviousMonth}>Prev</button>
        </li>
        <li>{format(month, 'MMMM yyyy')}</li>
        <li>
          <button onClick={handleNextMonth}>Next</button>
        </li>
      </ul>
      <div className="grid">
        {weekdays.map((item) => {
          return <span key={item}>{item}</span>
        })}
        {Object.entries(
          groupBy(getAllDaysInMonth(month), (day) =>
            getWeek(day, { weekStartsOn: 1 })
          )
        ).map(([key, entry]) => {
          return (
            <div
              key={'week-container' + key}
              className="week-container"
              data-key={'week-container' + key}
            >
              {entry.map((day, index) => {
                const dateTime = format(day, 'yyyy-MM-dd')
                return (
                  <time dateTime={dateTime} key={dateTime}>
                    {format(day, 'd')}
                  </time>
                )
              })}
              <div
                className="week-events"
                style={{
                  minHeight: '10px',
                  backgroundColor: 'lightcoral',
                }}
              >
                {entry.map((day, index) => {
                  const length = entry.length
                  let gridColumnStart = 0
                  let gridColumnEnd = 0

                  // If start is in the given week days but end my or may not be
                  if (isSameDay(day, myDate.start)) {
                    gridColumnStart = colStartClasses[getDay(day)]
                    const test = entry.find((endDay) =>
                      isSameDay(endDay, myDate.end)
                    )
                    test
                      ? (gridColumnEnd = colStartClasses[getDay(test)] + 1)
                      : (gridColumnEnd = -1)

                    console.log('Case 1', gridColumnStart, gridColumnEnd)
                  }

                  // If end is in the given week but start isn't
                  else if (
                    isSameDay(day, myDate.end) &&
                    isSameWeek(myDate.start, myDate.end, {
                      weekStartsOn: 1,
                    }) === false
                  ) {
                    gridColumnEnd = colStartClasses[getDay(day)] + 1
                    gridColumnStart = 1

                    console.log(
                      'Case 2, end is in the given week but start is not,',
                      gridColumnStart,
                      gridColumnEnd
                    )
                  }

                  // If neither start or end are in the given week for the last iteration
                  else if (
                    index === length - 1 &&
                    isAfter(day, myDate.start) &&
                    isBefore(day, myDate.end) &&
                    isSameWeek(day, myDate.start, { weekStartsOn: 1 }) ===
                      false &&
                    isSameWeek(day, myDate.end, { weekStartsOn: 1 }) === false
                  ) {
                    gridColumnStart = 1
                    gridColumnEnd = -1

                    console.log('Case 3', gridColumnStart, gridColumnEnd)
                  }

                  return (
                    gridColumnStart > 0 &&
                    gridColumnEnd !== 0 && (
                      <div
                        key={index}
                        style={{
                          backgroundColor: 'aqua',
                          gridColumnStart,
                          gridColumnEnd,
                        }}
                      >
                        Vlad Dimov
                      </div>
                    )
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const colStartClasses = [7, 1, 2, 3, 4, 5, 6]
const colEndClasses = [8, 2, 3, 4, 5, 6, 7]

// const dateTime = format(day, 'yyyy-MM-dd')
// let style = {}
// // if (index === 0) {
// //   style = { gridColumnStart: colStartClasses[getDay(month)] }
// // }
// if (isToday(day)) style = { color: 'purple' }
// return (
//   <time dateTime={dateTime} key={dateTime} style={style}>
//     {format(day, 'd')}
//     {isToday(day) && (
//       <div
//         style={{
//           backgroundColor: 'grey',
//           gridColumnEnd: 6,
//           gridRowEnd: 5,
//         }}
//       >
//         Vlad Dimov
//       </div>
//     )}
//   </time>
// )

// {entry.map((day) => {
//   const dateTime = format(day, 'yyyy-MM-dd')
//   return (
//     <time dateTime={dateTime} key={dateTime}>
//       {format(day, 'd')}
//     </time>
//   )
// })}
