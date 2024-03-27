import { expect } from '@jest/globals'
import { EventData } from '../../../../models/event'
import { getTags } from '.'

test('extracts all tags from an rray of events without duplicates', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
      tags: [
        {
          iid: 'tag1',
          id: '',
          label: '',
        },
        {
          iid: 'tag2',
          id: '',
          label: '',
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
    {
      iid: 'event4',
      id: '',
      label: '',
      tags: [
        {
          iid: 'tag1',
          id: '',
          label: '',
        },
      ],
    },
  ]

  const actual = getTags(events)
  const actualIids = actual.map((tag) => tag.iid)

  expect(actual).toHaveLength(3)
  expect(actualIids).toContain('tag1')
  expect(actualIids).toContain('tag2')
  expect(actualIids).toContain('tag3')
})
