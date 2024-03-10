import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { groupBy } from 'lodash'
import { EventEntry } from '../../../../gql/codegen/graphql'

export const groupOccurrencesByWeek = (data: EventEntry[]) => {
  return groupBy(data, (entry) => {
    const date = parseISO(entry.startDateTime)
    return getWeek(date, { weekStartsOn: 1 })
  })
}
