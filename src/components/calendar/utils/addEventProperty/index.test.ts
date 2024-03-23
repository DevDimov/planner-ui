import { expect } from '@jest/globals'
import { EventEntryData } from '../../../../models/eventEntry'
import { addEventProperty } from '.'
import { EventPropertyData } from '../../../../models/eventProperty'

const newProperty: EventPropertyData = {
  iid: 'event1.prop2',
  id: '',
  label: '',
  value: '',
}

test('adds a property to an event that exists once in an array of entries', () => {
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
        ],
      },
    },
  ]

  const actual = addEventProperty(entries, 'event1', newProperty)

  expect(actual[0].event.properties).toHaveLength(2)
  expect(actual[1].event.properties).toHaveLength(1)
  expect(actual[0].event.properties?.[0].iid).toStrictEqual('event1.prop1')
  expect(actual[0].event.properties?.[1].iid).toStrictEqual('event1.prop2')
})

test('adds a property to an event that exists multiple times in an array of entries', () => {
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
        ],
      },
    },
  ]

  const actual = addEventProperty(entries, 'event1', newProperty)

  expect(actual[0].event.properties).toHaveLength(2)
  expect(actual[1].event.properties).toHaveLength(2)
  expect(actual[0].event.properties?.[1].iid).toStrictEqual('event1.prop2')
  expect(actual[1].event.properties?.[1].iid).toStrictEqual('event1.prop2')
})

test('adds property to an event with no properties', () => {
  const entries: EventEntryData[] = [
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
        properties: [],
      },
    },
  ]

  const actual = addEventProperty(entries, 'event1', newProperty)

  expect(actual[0].event.properties).toHaveLength(1)
  expect(actual[0].event.properties?.[0]).toEqual(newProperty)
})

test('adds property to an event with undefined properties', () => {
  const entries: EventEntryData[] = [
    {
      iid: '',
      startDateTime: '',
      endDateTime: '',
      event: {
        iid: 'event1',
        id: '',
        label: '',
      },
    },
  ]

  const actual = addEventProperty(entries, 'event1', newProperty)

  expect(actual[0].event.properties).toHaveLength(1)
  expect(actual[0].event.properties?.[0]).toEqual(newProperty)
})
