import { TagData } from '../../../../models/tag'

export const isLabelUnique = (label: string, tags: TagData[]) => {
  let tagLabel = label.trim()
  const existsInCurrentTags = tags.find((e) => e.label === tagLabel)
  if (existsInCurrentTags) {
    return false
  }
  return true
}
