import getWeek from 'date-fns/getWeek'
import parseISO from 'date-fns/parseISO'
import { groupBy } from 'lodash'
import { EventInstanceOccurrence } from '../../../../gql/codegen/graphql'

export const groupOccurrencesByWeek = (data: EventInstanceOccurrence[]) => {

  return groupBy(data, (occurrence) => {
    const date = parseISO(occurrence.startDateTime)
    return getWeek(date, { weekStartsOn: 1 })
  })
}
