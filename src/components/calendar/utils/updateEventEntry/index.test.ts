import { expect } from '@jest/globals'
import {
  EventEntryData,
  UpdateEventEntryData,
} from '../../../../models/eventEntry'
import { updateEventEntry } from '.'

const entries: EventEntryData[] = [
  {
    iid: 'entry1',
    startDateTime: 'entry1.start',
    endDateTime: 'entry1.end',
    event: {
      iid: 'event1',
      label: '',
    },
  },
  {
    iid: 'entry2',
    startDateTime: 'entry2.start',
    endDateTime: 'entry2.end',
    event: {
      iid: 'event2',
      label: '',
    },
  },
]

test('updates one entry in an array of unique entries', () => {
  const updatedEntry: UpdateEventEntryData = {
    iid: 'entry2',
    startDateTime: 'entry2.newStart',
    endDateTime: 'entry2.newEnd',
  }

  const actual = updateEventEntry(entries, updatedEntry)

  expect(actual[0]).toStrictEqual(entries[0])
  expect(actual[1].startDateTime).toEqual(updatedEntry.startDateTime)
  expect(actual[1].endDateTime).toEqual(updatedEntry.endDateTime)
  expect(actual[1].event.iid).toBeDefined()
})

test('does not modify entries if the target entry does not exist', () => {
  const nonExisingEntry: UpdateEventEntryData = {
    iid: 'entry3',
    startDateTime: 'entry3.newStart',
    endDateTime: 'entry3.newEnd',
  }

  const actual = updateEventEntry(entries, nonExisingEntry)

  expect(actual).toHaveLength(entries.length)
  expect(actual[0]).toEqual(entries[0])
  expect(actual[1]).toEqual(entries[1])
})
