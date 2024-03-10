import type { Meta, StoryObj } from '@storybook/react'

import EventTag from './index'

const meta: Meta<typeof EventTag> = {
  component: EventTag,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EventTag>

export const Red: Story = {
  args: {
    label: 'Red',
    color: 'red',
  },
}

export const Orange: Story = {
  args: {
    label: 'Orange',
    color: 'orange',
  },
}

export const Yellow: Story = {
  args: {
    label: 'Yellow',
    color: 'yellow',
  },
}

export const Green: Story = {
  args: {
    label: 'Green',
    color: 'green',
  },
}

export const Blue: Story = {
  args: {
    label: 'Blue',
    color: 'blue',
  },
}
export const Indigo: Story = {
  args: {
    label: 'Indigo',
    color: 'indigo',
  },
}
export const Violet: Story = {
  args: {
    label: 'Violet',
    color: 'violet',
  },
}
