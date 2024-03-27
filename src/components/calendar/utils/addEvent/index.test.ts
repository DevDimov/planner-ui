import { expect } from '@jest/globals'
import { EventData } from '../../../../models/event'
import { addEvent } from '.'

const newEvent: EventData = {
  iid: 'event3',
  id: 'newEvent',
  label: 'newEvent',
}

test('adds unique event to existing events array', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
    },
    {
      iid: 'event2',
      id: '',
      label: '',
    },
  ]

  const actual = addEvent(events, newEvent)

  expect(actual).toHaveLength(3)
  expect(actual[2]).toStrictEqual(newEvent)
})

test('Replaces an existing event with the same iid', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
    },
    {
      iid: 'event2',
      id: '',
      label: '',
    },
    {
      iid: 'event3',
      id: '',
      label: '',
    },
  ]

  const actual = addEvent(events, newEvent)

  expect(actual).toHaveLength(3)
  expect(actual[2]).toStrictEqual(newEvent)
})
