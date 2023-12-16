import type { Meta, StoryObj } from '@storybook/react'

import EventInstanceTag from './index'

const meta: Meta<typeof EventInstanceTag> = {
  title: 'Tags/Primary',
  component: EventInstanceTag,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EventInstanceTag>

export const Primary: Story = {
  args: {
    label: 'School',
    color: 'red',
  },
}
