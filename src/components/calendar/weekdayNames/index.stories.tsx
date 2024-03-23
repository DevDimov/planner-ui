import type { Meta, StoryObj } from '@storybook/react'
import WeekdayNames from './index'
import { CalendarContext } from '../../../context/calendar'
import { defaultValue } from '../../../context/calendar/index'

const meta: Meta<typeof WeekdayNames> = {
  title: 'Calendar/WeekdayNames',
  component: WeekdayNames,
}

export default meta
type Story = StoryObj<typeof WeekdayNames>

export const MonToSun: Story = {}

export const SunToSat: Story = {
  decorators: (Story) => (
    <CalendarContext.Provider value={defaultValue}>
      <Story />
    </CalendarContext.Provider>
  ),
}
