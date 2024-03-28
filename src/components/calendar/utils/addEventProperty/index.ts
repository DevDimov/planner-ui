import { EventData } from '../../../../models/event'
import { EventPropertyData } from '../../../../models/eventProperty'

export const addEventProperty = (
  events: EventData[],
  eventIid: string,
  property: EventPropertyData
) => {
  const result = events.map((event) => {
    if (event.iid === eventIid) {
      const properties = event.properties

      if (properties) {
        let newProperties = [...properties, property]
        return { ...event, properties: newProperties }
      }

      return { ...event, properties: [property] }
    }

    return event
  })

  return result
}
