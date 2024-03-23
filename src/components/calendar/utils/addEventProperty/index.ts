import { EventEntryData } from '../../../../models/eventEntry'
import { EventPropertyData } from '../../../../models/eventProperty'

export const addEventProperty = (
  entries: EventEntryData[],
  eventIid: string,
  property: EventPropertyData
) => {
  const result = entries.map((entry) => {
    if (entry.event.iid === eventIid) {
      const properties = entry.event.properties

      if (properties) {
        let newProperties = [...properties, property]
        let newEvent = { ...entry.event, properties: newProperties }

        return { ...entry, event: newEvent }
      }

      const newEvent = { ...entry.event, properties: [property] }
      return { ...entry, event: newEvent }
    }

    return entry
  })

  return result
}
