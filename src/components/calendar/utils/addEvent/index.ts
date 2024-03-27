import { EventData } from '../../../../models/event'

export const addEvent = (events: EventData[], event: EventData) => {
  const result = events.filter((currentEvent) => currentEvent.iid !== event.iid)

  result.push(event)

  return result
}
