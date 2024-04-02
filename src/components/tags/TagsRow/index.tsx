import { TagData } from '../../../models/tag'
import EventTag from '../eventTag'

export default function TagsRow({ tags }: { tags: TagData[] }) {
  return (
    <div className="row-start-2 mt-1.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        return <EventTag key={tag.iid} label={tag.label} color={tag.color} />
      })}
    </div>
  )
}
