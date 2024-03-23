import { expect } from '@jest/globals'
import { EventEntryData } from '../../../../models/eventEntry'
import { removeEventProperty } from '.'

test('removes a property from an event that exists once in an array of unique entries', () => {
  const entries: EventEntryData[] = [
    {
      iid: 'entry1',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event1.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event1.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
    {
      iid: 'entry2',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event2',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event2.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event2.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
  ]

  const actual = removeEventProperty(entries, 'event2', 'event2.prop1')

  expect(actual[0].event.properties).toHaveLength(2)
  expect(actual[1].event.properties).toHaveLength(1)
  expect(actual[1].event.properties?.[0].iid).toStrictEqual('event2.prop2')
})

test('removes a property from an event that exists multiple times in an array of entries', () => {
  const entries: EventEntryData[] = [
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event1.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event1.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event1.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event1.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
  ]

  const actual = removeEventProperty(entries, 'event1', 'event1.prop1')

  expect(actual[0].event.properties).toHaveLength(1)
  expect(actual[1].event.properties).toHaveLength(1)
  expect(actual[0].event.properties?.[0].iid).toStrictEqual('event1.prop2')
  expect(actual[1].event.properties?.[0].iid).toStrictEqual('event1.prop2')
})

test('does not modify the entries if the target event does not have the target property', () => {
  const entries: EventEntryData[] = [
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event1.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event1.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event2',
        id: '',
        label: '',
        properties: [
          {
            iid: 'event2.prop1',
            id: '',
            label: '',
            value: '',
          },
          {
            iid: 'event2.prop2',
            id: '',
            label: '',
            value: '',
          },
        ],
      },
    },
  ]

  const actual = removeEventProperty(entries, 'event2', 'event1.prop3')

  expect(actual[0].event.properties).toHaveLength(2)
  expect(actual[1].event.properties).toHaveLength(2)
})
