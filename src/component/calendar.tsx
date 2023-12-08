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

export default function Calendar() {
  const today = new Date()
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const days = eachDayOfInterval({
    start: startOfMonth(today),
    end: endOfWeek(endOfMonth(today)),
  })

  const [currentDate, setCurrentDate] = useState(today)
  const [monthDays, setMonthDays] = useState(days)

  const handlePreviousMonth = () => {
    const newDate = subMonths(currentDate, 1)
    setCurrentDate(newDate)

    const newMonthDays = eachDayOfInterval({
      start: startOfMonth(newDate),
      end: endOfWeek(endOfMonth(newDate)),
    })

    setMonthDays(newMonthDays)
  }

  const handleNextMonth = () => {
    const newDate = addMonths(currentDate, 1)
    setCurrentDate(newDate)

    const newMonthDays = eachDayOfInterval({
      start: startOfMonth(newDate),
      end: endOfWeek(endOfMonth(newDate)),
    })

    setMonthDays(newMonthDays)
  }

  return (
    <div className="">
      <ul className="navigation-controls">
        <li>
          <button onClick={handlePreviousMonth}>Prev</button>
        </li>
        <li>{format(currentDate, 'MMMM yyyy')}</li>
        <li>
          <button onClick={handleNextMonth}>Next</button>
        </li>
      </ul>
      <div className="grid">
        {weekdays.map((item) => {
          return <span key={item}>{item}</span>
        })}
        {monthDays.map((day, index) => {
          const dateTime = format(day, 'yyyy-MM-dd')
          let style = {}
          if (index === 0) {
            style = { gridColumnStart: colStartClasses[getDay(currentDate)] }
          }
          return (
            <time dateTime={dateTime} key={dateTime} style={style}>
              {format(day, 'd')}
            </time>
          )
        })}
      </div>

      {/*
      <ul className="days">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>
          <span className="active">10</span>
        </li>
        <li>11</li>
        ...etc
      </ul> */}
    </div>
  )
}

const colStartClasses = [7, 1, 2, 3, 4, 5, 6]
