import { EventData } from '../../../../models/event'
import { TagData } from '../../../../models/tag'

export const getTags = (events: EventData[]) => {
  let result: TagData[] = []
  events.forEach((event) => {
    event.tags?.forEach((tag) => {
      const exists = result.find((existingTag) => existingTag.iid === tag.iid)
      if (!exists) {
        result.push(tag)
      }
    })
  })

  return result
}
