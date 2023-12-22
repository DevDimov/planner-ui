import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { groupBy } from 'lodash'
import { GroupedOccurrences } from '../../month'
import { EventInstanceTagProps } from '../../../tags/eventInstanceTag'

export const groupOccurrencesByWeek = (data: {
  label: string
  start: Date
  end: Date
  tags: EventInstanceTagProps[]
}): GroupedOccurrences => {
  return groupBy(data, (occurrence: any) => {
    const date = parseISO(occurrence.start)
    return getWeek(date, { weekStartsOn: 1 })
  })
}
