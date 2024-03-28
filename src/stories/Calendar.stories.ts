import type { Meta, StoryObj } from '@storybook/react'

import CalendarX from '../components/calendar'

const meta: Meta<typeof CalendarX> = {
  component: CalendarX,
}

export default meta
type Story = StoryObj<typeof CalendarX>

export const Test: Story = {
  // args: {
  //   primary: true,
  // },

  // render: () => <Calendar />,
}
