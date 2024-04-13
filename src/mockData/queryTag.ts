import { Tag, TagColor } from '../gql/codegen/graphql'

export const mockQueryTag: Tag[] = [
  {
    id: 'auth0|65538f46da9fa0033488f080.Work',
    iid: 'tag1',
    label: 'Work',
    color: TagColor.Blue,
    user: {
      iid: '',
      email: '',
    },
  },
  {
    id: 'auth0|65538f46da9fa0033488f080.School',
    iid: 'tag2',
    label: 'School',
    color: TagColor.Purple,
    user: {
      iid: '',
      email: '',
    },
  },
]
