import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './index'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const CalendarWithNoEvents: Story = {
  args: {
    
  },
}
