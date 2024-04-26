import { TagData } from '../../../../models/tag'
import { filterNewTags } from '.'

/*
Compares the iids of a list of tags (potentially new tags) to those of a list of existing tags (the tags state) 
and returns a list of only those tags not present in the state
*/
test('Returns the difference between two arrays of tags', () => {
  const existingTags: TagData[] = [
    { iid: '1', id: '', label: '' },
    { iid: '2', id: '', label: '' },
  ]

  const tags: TagData[] = [
    { iid: '1', id: '', label: '' },
    { iid: '2', id: '', label: '' },
    { iid: '3', id: '', label: '' },
  ]

  const actual = filterNewTags(existingTags, tags)
  const expected = [{ iid: '3', id: '', label: '' }]

  expect(actual).toHaveLength(expected.length)
  expect(actual[0]).toStrictEqual(expected[0])
})
