import { expect } from '@jest/globals'
import { EventData } from '../../../../models/event'
import { getEventTags } from '.'

const events: EventData[] = [
  {
    iid: 'event1',
    id: '',
    label: '',
    tags: [
      {
        iid: 'tag1',
        id: '',
        label: 'label1',
      },
    ],
  },
  {
    iid: 'event2',
    id: '',
    label: '',
    tags: [
      {
        iid: 'tag2',
        id: '',
        label: '',
      },
      {
        iid: 'tag3',
        id: '',
        label: '',
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
  const actual = getEventTags(events, 'event2')
  const actualPropertyIids = actual.map((prop) => prop.iid)

  expect(actual).toHaveLength(2)
  expect(actualPropertyIids).toContain('tag2')
  expect(actualPropertyIids).toContain('tag3')
})

test('returns an empty array if an event with the given iid has no properties', () => {
  const actual = getEventTags(events, 'event3')

  expect(actual).toHaveLength(0)
})
