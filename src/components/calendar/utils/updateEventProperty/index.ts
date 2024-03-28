import { EventData } from '../../../../models/event'
import { EventPropertyData } from '../../../../models/eventProperty'

export const updateEventProperty = (
  events: EventData[],
  eventIid: string,
  property: EventPropertyData
) => {
  const result = events.map((event) => {
    if (event.iid === eventIid) {
      const newProperties = event.properties?.map((currentProperty) => {
        if (currentProperty.iid === property.iid) {
          return property
        }
        return currentProperty
      })

      return { ...event, properties: newProperties }
    }

    return event
  })

  return result
}
