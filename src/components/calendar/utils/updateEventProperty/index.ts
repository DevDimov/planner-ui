import { EventEntryData } from '../../../../models/eventEntry'
import { EventPropertyData } from '../../../../models/eventProperty'

export const updateEventProperty = (
  entries: EventEntryData[],
  eventIid: string,
  property: EventPropertyData
) => {
  const result = entries.map((entry) => {
    if (entry.event.iid === eventIid) {
      let propUpdated = false

      const newProperties = entry.event.properties?.map((currentProperty) => {
        if (currentProperty.iid === property.iid) {
          propUpdated = true
          return property
        }
        return currentProperty
      })

      if (propUpdated) {
        const newEvent = { ...entry.event, properties: newProperties }
        return { ...entry, event: newEvent }
      }

      return entry
    }

    return entry
  })

  return result
}
