import { useCallback, useContext, useEffect } from 'react'
import CalendarControls from './controls'
import CalendarMonth from './month'
import { CalendarContext } from 'context/calendar'
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery'
import { QUERY_TAG } from 'gql/operations/queryTag'
import { TagData } from 'models/tag'
import { useToast } from 'components/ui/toast/use-toast'

interface QueryTagData {
  queryTag: TagData[]
}

export default function Calendar() {
  // const [tags, setTags] = useState<TagData[]>([])
  const { month, setMonth, entries, setTags } = useContext(CalendarContext)

  // const [queryEvents] = useLazyQuery<QueryEventData>(QUERY_EVENT)
  // const [queryEntries] = useLazyQuery<QueryEventEntryData>(QUERY_EVENT_ENTRY)
  const [queryTags] = useLazyQuery<QueryTagData>(QUERY_TAG)

  const { toast } = useToast()

  // const fetchEvents = useCallback(async () => {
  //   const { data, error } = await queryEvents()

  //   if (error) {
  //     toast({
  //       description: 'There was an error fetching events.',
  //       variant: 'destructive',
  //     })
  //     return
  //   }

  //   if (data) {
  //     if (data.queryEvent.length) {
  //       console.log('Fetch events', data.queryEvent)
  //       setEvents(data.queryEvent)
  //     }
  //   }
  // }, [queryEvents, toast])

  // const fetchEntries = useCallback(async () => {
  //   const { data, error } = await queryEntries()

  //   if (error) {
  //     toast({
  //       description: 'There was an error fetching entries.',
  //       variant: 'destructive',
  //     })
  //     return
  //   }

  //   if (data) {
  //     if (data.queryEventEntry.length) {
  //       console.log('Fetch entries', data.queryEventEntry)
  //       setEntries(data.queryEventEntry)
  //     }
  //   }
  // }, [queryEntries, toast])

  const fetchTags = useCallback(async () => {
    console.log('Usecallback rerendered')
    const { data, error } = await queryTags()

    if (error) {
      toast({
        description: 'There was an error fetching tags.',
        variant: 'destructive',
      })
      return
    }

    if (data) {
      if (data.queryTag.length) {
        console.log('Fetch tags', data.queryTag)
        setTags(data.queryTag)
      }
    }
  }, [queryTags, toast, setTags])

  useEffect(() => {
    fetchTags().catch(console.error)
  }, [fetchTags])

  return (
    <div>
      <CalendarControls month={month} setMonth={setMonth} />
      <CalendarMonth month={month} entries={entries} />
    </div>
  )
}
