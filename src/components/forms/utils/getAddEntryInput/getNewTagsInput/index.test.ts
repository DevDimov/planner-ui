import { z } from 'zod'
import { getNewTagsInput } from '.'
import { newTagsSchema } from 'schema/tags'
// import { AddTagInput, TagColor } from '../../../../../gql/codegen/graphql'
import { AddTagInput, TagColor } from 'gql/codegen/graphql'

const userId: string = 'auth|user1'
const userPayload = { email: 'user1@gmail.com' }

test('returns the right schema input for one tag', () => {
  const newTags: z.infer<typeof newTagsSchema> = [
    { label: 'Work', color: TagColor.Red },
  ]
  const actual = getNewTagsInput({ newTags, userId, userPayload })
  const expected: AddTagInput[] = [
    {
      id: `${userId}|Work`,
      label: 'Work',
      color: TagColor.Red,
      user: userPayload,
    },
  ]
  expect(actual).toStrictEqual(expected)
})

test('returns the right schema input for two tags', () => {
  const newTags: z.infer<typeof newTagsSchema> = [
    { label: 'Work', color: TagColor.Red },
    { label: 'Exercise', color: TagColor.Green },
  ]
  const actual = getNewTagsInput({ newTags, userId, userPayload })
  const expected: AddTagInput[] = [
    {
      id: `${userId}|Work`,
      label: 'Work',
      color: TagColor.Red,
      user: userPayload,
    },
    {
      id: `${userId}|Exercise`,
      label: 'Exercise',
      color: TagColor.Green,
      user: userPayload,
    },
  ]
  expect(actual).toStrictEqual(expected)
})

test('returns the right schema input for zero tags', () => {
  const newTags: z.infer<typeof newTagsSchema> = []
  const actual = getNewTagsInput({ newTags, userId, userPayload })
  const expected: AddTagInput[] = []
  expect(actual).toHaveLength(expected.length)
  expect(actual).toStrictEqual(expected)
})

test('returns an empty array when tags are undefined', () => {
  const actual = getNewTagsInput({ newTags: undefined, userId, userPayload })
  const expected: AddTagInput[] = []
  expect(actual).toHaveLength(expected.length)
  expect(actual).toStrictEqual(expected)
})
