import type { Meta, StoryObj } from '@storybook/react'

import Calendar from '../component/calendar'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Test: Story = {
  // args: {
  //   primary: true,
  // },

  // render: () => <Calendar />,
}
