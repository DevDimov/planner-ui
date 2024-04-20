import startOfWeek from 'date-fns/startOfWeek'
import { EventEntryData } from '../models/eventEntry'
import endOfWeek from 'date-fns/endOfWeek'
import addDays from 'date-fns/addDays'
import addYears from 'date-fns/addYears'

const weekStartsOn = 1
const today = new Date()

export const mockQueryEventEntry: EventEntryData[] = [
  {
    iid: 'entry1',
    startDateTime: today.toISOString(),
    endDateTime: today.toISOString(),
    tags: [
      {
        id: 'user1|Work',
        iid: 'tagWork',
        label: 'Work',
      },
    ],
    event: {
      iid: 'event1',
      label: '1-day Event',
    },
  },
  {
    iid: 'entry2',
    startDateTime: startOfWeek(today, { weekStartsOn }).toISOString(),
    endDateTime: endOfWeek(today, { weekStartsOn }).toISOString(),
    tags: [
      {
        id: 'user1|Work',
        iid: 'tagWork',
        label: 'Work',
      },
    ],
    event: {
      iid: 'event2',
      label: '7-day Event, Start to End of Week',
    },
  },
  {
    iid: 'entry3',
    startDateTime: startOfWeek(addDays(today, 7), {
      weekStartsOn,
    }).toISOString(),
    endDateTime: addDays(today, 14).toISOString(),
    tags: [
      {
        id: 'user1|Work',
        iid: 'tagWork',
        label: 'Work',
      },
    ],
    event: {
      iid: 'event3',
      label: '2-week Event',
    },
  },
  {
    iid: 'entry4',
    startDateTime: addDays(today, 7).toISOString(),
    endDateTime: addDays(today, 14).toISOString(),
    tags: [
      {
        id: 'user1|Work',
        iid: 'tagWork',
        label: 'Work',
      },
    ],
    event: {
      iid: 'event4',
      label: '7-day Event',
    },
  },
  {
    iid: 'entry5',
    startDateTime: addDays(today, 14).toISOString(),
    endDateTime: addYears(addDays(today, 14), 1).toISOString(),
    tags: [],
    event: {
      iid: 'event5',
      label: '1-year Event',
    },
  },
]
