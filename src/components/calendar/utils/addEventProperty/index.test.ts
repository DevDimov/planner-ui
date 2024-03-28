import { expect } from '@jest/globals'
import { addEventProperty } from '.'
import { EventPropertyData } from '../../../../models/eventProperty'
import { EventData } from '../../../../models/event'

const newProperty: EventPropertyData = {
  iid: 'event1.prop2',
  id: '',
  label: '',
  value: '',
}

test('adds a property to an event that exists once in an array of entries', () => {
  const events: EventData[] = [
    {
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
    {
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
  ]

  const actual = addEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(2)
  expect(actual[1].properties).toHaveLength(1)
  expect(actual[0].properties?.[0].iid).toStrictEqual('event1.prop1')
  expect(actual[0].properties?.[1].iid).toStrictEqual('event1.prop2')
})

test('adds a property to an event that exists multiple times in an array of entries', () => {
  const events: EventData[] = [
    {
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
    {
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
  ]

  const actual = addEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(2)
  expect(actual[1].properties).toHaveLength(2)
  expect(actual[0].properties?.[1].iid).toStrictEqual('event1.prop2')
  expect(actual[1].properties?.[1].iid).toStrictEqual('event1.prop2')
})

test('adds property to an event with no properties', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
      properties: [],
    },
  ]

  const actual = addEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(1)
  expect(actual[0].properties?.[0]).toEqual(newProperty)
})

test('adds property to an event with undefined properties', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
    },
  ]

  const actual = addEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(1)
  expect(actual[0].properties?.[0]).toEqual(newProperty)
})
