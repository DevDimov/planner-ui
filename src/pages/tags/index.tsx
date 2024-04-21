import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { Button } from 'components/buttons'
import TagColourSelect from 'components/select/TagColourSelect'
import EventTag from 'components/tags/eventTag'
import { TypographyH3 } from 'components/typography/h3'
import { TypographySmall } from 'components/typography/small'
import { Badge } from 'components/ui/badge'
import { Input } from 'components/ui/input/default'
import { useToast } from 'components/ui/toast/use-toast'
import { tagColourMap } from 'constants/tagColours'
import { CalendarContext } from 'context/calendar'
import { TagColor } from 'gql/codegen/graphql'
import { QUERY_TAG } from 'gql/operations/queryTag'
import { TagData } from 'models/tag'
import { useCallback, useContext, useEffect, useState } from 'react'
import EditTag from './forms/editTag'
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery'
import { filterNewTags } from 'components/calendar/utils/filterNewTags'

interface QueryTagData {
  queryTag: TagData[]
}

export default function TagsPage() {
  // const { tags, setTags } = useContext(CalendarContext)
  const [tags, setTags] = useState<TagData[]>([])
  const { toast } = useToast()

  // const { data, loading, error: queryError } = useQuery<QueryTagData>(QUERY_TAG)
  const [queryTags, { loading }] = useLazyQuery<QueryTagData>(QUERY_TAG)

  const handleSetTags = useCallback((data: TagData[]) => {
    setTags(data)
  }, [])

  const handleUpdateTag = (updatedTag: TagData) => {
    const existingTags = tags.map((tag) => {
      if (tag.iid === updatedTag.iid) {
        return { ...tag, ...updatedTag }
      }
      return tag
    })
    setTags(existingTags)
  }

  const handleRemoveTag = useCallback(
    (iid: string) => {
      const newTags = tags.filter((tag) => tag.iid !== iid)
      setTags(newTags)
    },
    [tags]
  )

  const fetchTags = useCallback(async () => {
    console.log('Usecallback rerendered')
    const { data, error } = await queryTags()

    if (error) {
      toast({
        title: 'There was an error fetching tags.',
        description: error?.message,
        variant: 'destructive',
      })
    }

    if (data) {
      if (data.queryTag.length) {
        console.log('Fetch tags', data.queryTag)
        handleSetTags(data.queryTag)
      }
    }
  }, [queryTags, toast, handleSetTags])

  useEffect(() => {
    fetchTags()
  }, [fetchTags])

  return (
    <div className="mt-12 w-[30vw]">
      <div className="flex flex-col gap-y-6">
        <TypographyH3 className="mb-1">Existing Tags</TypographyH3>
        {loading && <div>Loading results...</div>}
        {tags &&
          tags.map((tag) => {
            return (
              <EditTag
                key={tag.iid}
                tag={tag}
                onUpdateTag={handleUpdateTag}
                onDeleteTag={handleRemoveTag}
              />
            )
          })}
      </div>
    </div>
  )
}
