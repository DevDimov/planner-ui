import type { Meta, StoryObj } from '@storybook/react'
import WeekdayNames from './index'

const meta: Meta<typeof WeekdayNames> = {
  title: 'Calendar/WeekdayNames',
  component: WeekdayNames,
}

export default meta
type Story = StoryObj<typeof WeekdayNames>

export const MonToSun: Story = {}
