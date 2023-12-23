import type { Meta, StoryObj } from '@storybook/react'

import CalendarControls from './index'

const meta: Meta<typeof CalendarControls> = {
  title: 'Calendar/Controls',
  component: CalendarControls,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof CalendarControls>

export const DecemberHeader: Story = {
  args: {
    month: new Date(2023, 11, 1),
  },
}
