import { EventEntryData } from '../../../../models/eventEntry'
import {
  EntriesByWeek,
  groupEntriesByWeekToYearEnd,
} from '../groupEntriesByWeek'
import { groupEntriesByYear } from '../groupEntriesByYear'

export type EntriesByYearAndWeek = Record<string, EntriesByWeek>

export const groupEntriesByYearAndWeek = (entries: EventEntryData[]) => {
  let result: EntriesByYearAndWeek = {}

  const entriesByYear = groupEntriesByYear(entries)

  for (const [year, entries] of Object.entries(entriesByYear)) {
    const entriesByWeek = groupEntriesByWeekToYearEnd(entries, year)
    // console.log(entriesByWeek)
    result[year] = entriesByWeek
  }

  return result
}
