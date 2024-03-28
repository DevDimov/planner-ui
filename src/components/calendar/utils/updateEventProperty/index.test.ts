import { expect } from '@jest/globals'
import { updateEventProperty } from '.'
import { EventPropertyData } from '../../../../models/eventProperty'
import { EventData } from '../../../../models/event'

test('updates a property of an event', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
      properties: [
        {
          iid: 'event1.prop1',
          id: '',
          label: 'event1.prop1.label',
          value: 'event1.prop1.value',
        },
        {
          iid: 'event1.prop2',
          id: '',
          label: 'event1.prop2.label',
          value: 'event1.prop2.value',
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
          label: 'event2.prop1.label',
          value: 'event2.prop1.value',
        },
        {
          iid: 'event2.prop2',
          id: '',
          label: 'event2.prop1.label',
          value: 'event2.prop1.value',
        },
      ],
    },
  ]

  const newProperty: EventPropertyData = {
    iid: 'event2.prop1',
    id: '',
    label: 'event2.prop1.newLabel',
    value: 'event2.prop1.newValue',
  }

  const actual = updateEventProperty(events, 'event2', newProperty)

  expect(actual[0].properties).toHaveLength(2)
  expect(actual[1].properties).toHaveLength(2)
  expect(actual[1].properties?.[0]).toStrictEqual(newProperty)
})

test('removes a property from an event that exists multiple times in an array of entries', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
      properties: [
        {
          iid: 'event1.prop1',
          id: '',
          label: 'event1.prop1.label',
          value: 'event1.prop1.value',
        },
        {
          iid: 'event1.prop2',
          id: '',
          label: 'event1.prop2.label',
          value: 'event1.prop2.value',
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
          label: 'event1.prop1.label',
          value: 'event1.prop1.value',
        },
        {
          iid: 'event1.prop2',
          id: '',
          label: 'event1.prop2.label',
          value: 'event1.prop2value',
        },
      ],
    },
  ]

  const newProperty: EventPropertyData = {
    iid: 'event1.prop1',
    id: '',
    label: 'event1.prop1.newLabel',
    value: 'event1.prop1.newValue',
  }

  const actual = updateEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(2)
  expect(actual[1].properties).toHaveLength(2)
  expect(actual[0].properties?.[0]).toStrictEqual(newProperty)
  expect(actual[1].properties?.[0]).toStrictEqual(newProperty)
})

test('does not modify any properties if an event does not have the target property', () => {
  const events: EventData[] = [
    {
      iid: 'event1',
      id: '',
      label: '',
      properties: [
        {
          iid: 'event1.prop1',
          id: '',
          label: 'event1.prop1.label',
          value: 'event1.prop1.value',
        },
        {
          iid: 'event1.prop2',
          id: '',
          label: 'event1.prop2.label',
          value: 'event1.prop2.value',
        },
      ],
    },
  ]

  const newProperty: EventPropertyData = {
    iid: 'event1.prop3',
    id: '',
    label: 'event1.prop3.newLabel',
    value: 'event1.prop3.newValue',
  }

  const actual = updateEventProperty(events, 'event1', newProperty)

  expect(actual[0].properties).toHaveLength(2)
  expect(actual[0].properties?.[0].label).toEqual('event1.prop1.label')
  expect(actual[0].properties?.[1].label).toEqual('event1.prop2.label')
})
