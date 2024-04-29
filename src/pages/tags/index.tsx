import { TypographyH3 } from '../../components/typography/h3'
import { CalendarContext } from '../../context/calendar'
import { useContext } from 'react'
import EditTag from './forms/editTag'
import { TypographyMuted } from '../../components/typography/muted'
import CreateTag from './forms/createTag'

export default function TagsPage() {
  const { tags, updateTag, removeTag } = useContext(CalendarContext)

  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <div className="w-full sm:mt-12 sm:max-w-lg">
        <div className="flex flex-col gap-y-6">
          <TypographyH3 className="mb-1">Create Tag</TypographyH3>
          <CreateTag />
          <TypographyH3 className="mb-1">Edit Tags</TypographyH3>
          {tags && tags.length > 0 ? (
            tags.map((tag) => {
              return (
                <EditTag
                  key={tag.iid}
                  tag={tag}
                  onUpdateTag={updateTag}
                  onDeleteTag={removeTag}
                />
              )
            })
          ) : (
            <TypographyMuted>You haven't created any tags yet.</TypographyMuted>
          )}
        </div>
      </div>
    </div>
  )
}
