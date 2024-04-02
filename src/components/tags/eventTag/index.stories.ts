import type { Meta, StoryObj } from '@storybook/react'

import EventTag from './index'
import { TagColor } from '../../../gql/codegen/graphql'

const meta: Meta<typeof EventTag> = {
  component: EventTag,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EventTag>

export const Red: Story = {
  args: {
    label: 'Red',
    color: TagColor.Red,
  },
}

export const Orange: Story = {
  args: {
    label: 'Orange',
    color: TagColor.Orange,
  },
}

export const Yellow: Story = {
  args: {
    label: 'Yellow',
    color: TagColor.Yellow,
  },
}

export const Green: Story = {
  args: {
    label: 'Green',
    color: TagColor.Green,
  },
}

export const Blue: Story = {
  args: {
    label: 'Blue',
    color: TagColor.Blue,
  },
}
// export const Indigo: Story = {
//   args: {
//     label: 'Indigo',
//     color: 'indigo',
//   },
// }
// export const Violet: Story = {
//   args: {
//     label: 'Violet',
//     color: 'violet',
//   },
// }
