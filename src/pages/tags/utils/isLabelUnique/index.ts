import { TagData } from '../../../../models/tag'

export const isLabelUnique = (label: string, tags: TagData[]) => {
  const exists = tags.find((e) => e.label === label)
  if (exists) {
    return false
  }
  return true
}
