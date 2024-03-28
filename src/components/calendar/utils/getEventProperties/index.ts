import { EventData } from '../../../../models/event'

export const getEventProperties = (events: EventData[], eventIid: string) => {
  const event = events.find((existingEvent) => existingEvent.iid === eventIid)
  return event?.properties || []
}
