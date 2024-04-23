import { TagColor } from '../gql/codegen/graphql'

export interface TagData {
  iid: string
  id: string
  label: string
  color?: TagColor | null
}

export interface QueryTagData {
  queryTag: TagData[]
}
