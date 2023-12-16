import type { Meta, StoryObj } from '@storybook/react'

import EventInstance from './index'

const meta: Meta<typeof EventInstance> = {
  component: EventInstance,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EventInstance>

export const SingleTag: Story = {
  args: {
    label: 'Student Name',
    tags: ['School'],
  },
}

export const MultipleTags: Story = {
  args: {
    label: 'Student Name',
    tags: ['School', 'Full Day', 'Evening'],
  },
}

export const MaxTags: Story = {
  args: {
    label: 'Student Name',
    tags: ['School', 'Full Day', 'Evening', 'School', 'Max Tags'],
  },
}
