import { EventEntryData } from '../../../../models/eventEntry'

export const removeEventProperty = (
  entries: EventEntryData[],
  eventIid: string,
  propertyIid: string
) => {
  const result = entries.map((entry) => {
    if (entry.event.iid === eventIid) {
      const newProperties = entry.event.properties?.filter(
        (prop) => prop.iid !== propertyIid
      )

      const newEvent = { ...entry.event, properties: newProperties }

      return { ...entry, event: newEvent }
    }

    return entry
  })

  return result
}
