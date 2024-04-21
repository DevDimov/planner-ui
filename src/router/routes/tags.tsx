import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery'
import { NavBar } from '../../components/navigation'
import Welcome from './welcome'
import { useAuth0 } from '@auth0/auth0-react'
import { TypographyH3 } from 'components/typography/h3'
import { CalendarContext } from 'context/calendar/index'
import { useCallback, useContext, useEffect } from 'react'
import { QUERY_TAG } from 'gql/operations/queryTag'
import { TagData } from 'models/tag'
import { useToast } from 'components/ui/toast/use-toast'
import { useQuery } from '@apollo/client/react/hooks/useQuery'
import TagsPage from 'pages/tags'

interface QueryTagData {
  queryTag: TagData[]
}

export default function TagsRoute() {
  const { isAuthenticated, isLoading, error } = useAuth0()

  // const fetchTags = useCallback(async () => {
  //   console.log('In callback')
  //   const { data, error } = await queryTags()

  //   if (error) {
  //     toast({
  //       description: 'There was an error fetching tags.',
  //       variant: 'destructive',
  //     })
  //     return
  //   }

  //   if (data) {
  //     if (data.queryTag.length) {
  //       console.log('Fetch tags', data.queryTag)
  //       // setTags(data.queryTag)
  //     }
  //   }

  //   console.log("no data or error")
  // }, [queryTags, toast])

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log('UseEffect in tags page')
  //     fetchTags().catch(console.error)
  //   }
  // }, [fetchTags, isAuthenticated])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-y-4 p-4">
        <NavBar />
        {isAuthenticated ? <TagsPage /> : <div>Not authenticated</div>}
      </div>
    </div>
  )
}
