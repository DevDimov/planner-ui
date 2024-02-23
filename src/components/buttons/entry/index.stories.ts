import type { Meta, StoryObj } from '@storybook/react'

import EntryButton from './index'

const meta: Meta<typeof EntryButton> = {
  title: 'Buttons/Entry',
  component: EntryButton,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EntryButton>

export const Secondary: Story = {
  args: {
    title: 'Entry button',
  },
}
