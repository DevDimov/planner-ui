import { TagData } from 'models/tag'

export const filterNewTags = (
  existingTags: TagData[],
  tags: TagData[]
): TagData[] => {
  const result = tags.filter((tag) => {
    const exists = existingTags.find(
      (existingTag) => existingTag.iid === tag.iid
    )
    if (!exists) return true
    return false
  })

  return result
}
