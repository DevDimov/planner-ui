import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './index'

import { mockQueryEventInstanceOccurrence } from '../../mockData/queryEventInstanceOccurrence'

const meta: Meta<typeof Calendar> = {
  title: 'Calendar/Full',
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const EmptyCalendar: Story = {
  args: {
    occurrences: [],
  },
}

export const FullCalendar: Story = {
  args: {
    occurrences:
      mockQueryEventInstanceOccurrence.data.queryEventInstanceOccurrence,
  },
}
