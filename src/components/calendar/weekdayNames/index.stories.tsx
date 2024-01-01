import type { Meta, StoryObj } from '@storybook/react'
import WeekdayNames from './index'
import { CalendarContext } from '../../../context/calendar'

const meta: Meta<typeof WeekdayNames> = {
  title: 'Calendar/WeekdayNames',
  component: WeekdayNames,
}

export default meta
type Story = StoryObj<typeof WeekdayNames>

export const MonToSun: Story = {}

export const SunToSat: Story = {
  decorators: (Story) => (
    <CalendarContext.Provider
      value={{
        month: new Date(),
        weekStartsOn: 0,
        occurrences: [],
        setOccurrences: () => undefined,
      }}
    >
      <Story />
    </CalendarContext.Provider>
  ),
}
