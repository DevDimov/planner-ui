import { EventData } from '../../../../models/event'

export const removeEventProperty = (
  events: EventData[],
  eventIid: string,
  propertyIid: string
) => {
  const result = events.map((event) => {
    if (event.iid === eventIid) {
      const newProperties = event.properties?.filter(
        (prop) => prop.iid !== propertyIid
      )

      return { ...event, properties: newProperties }
    }

    return event
  })

  return result
}
