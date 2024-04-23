import { TypographyH3 } from 'components/typography/h3'
import { CalendarContext } from 'context/calendar'
import { useContext } from 'react'
import EditTag from './forms/editTag'

export default function TagsPage() {
  const { tags, updateTag, removeTag } = useContext(CalendarContext)

  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <div className="mt-12 w-[30vw]">
        <div className="flex flex-col gap-y-6">
          <TypographyH3 className="mb-1">Existing Tags</TypographyH3>
          {tags &&
            tags.map((tag) => {
              return (
                <EditTag
                  key={tag.iid}
                  tag={tag}
                  onUpdateTag={updateTag}
                  onDeleteTag={removeTag}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
