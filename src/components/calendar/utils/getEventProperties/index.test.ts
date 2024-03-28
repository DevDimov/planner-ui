import { expect } from '@jest/globals'
import { EventData } from '../../../../models/event'
import { getEventProperties } from '.'

const events: EventData[] = [
  {
    iid: 'event1',
    id: '',
    label: '',
    properties: [
      {
        iid: 'prop1',
        id: '',
        label: 'label1',
        value: 'value1',
      },
    ],
  },
  {
    iid: 'event2',
    id: '',
    label: '',
    properties: [
      {
        iid: 'prop2',
        id: '',
        label: '',
        value: '',
      },
      {
        iid: 'prop3',
        id: '',
        label: '',
        value: '',
      },
    ],
  },
  {
    iid: 'event3',
    id: '',
    label: '',
  },
]

test('returns all properties for an event with the given iid', () => {
  const actual = getEventProperties(events, 'event2')
  const actualPropertyIids = actual.map((prop) => prop.iid)

  expect(actual).toHaveLength(2)
  expect(actualPropertyIids).toContain('prop2')
  expect(actualPropertyIids).toContain('prop3')
})

test('returns an empty array if an event with the given iid has no properties', () => {
  const actual = getEventProperties(events, 'event3')

  expect(actual).toHaveLength(0)
})
