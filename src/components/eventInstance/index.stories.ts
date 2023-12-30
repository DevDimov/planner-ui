import type { Meta, StoryObj } from '@storybook/react'

import EventInstance from './index'

const meta: Meta<typeof EventInstance> = {
  component: EventInstance,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EventInstance>

export const SingleTag: Story = {
  args: {
    label: 'Instance with one tag',
    tags: [{ label: 'Violet' }],
    startDateTime: '2023-12-25',
    endDateTime: '2023-12-31',
    properties: [
      {
        iid: 'p1',
        label: 'Event type',
        value: 'Student',
      },
    ],
  },
}

export const MultipleTags: Story = {
  args: {
    label: 'Instance with multiple tags',
    tags: [
      { label: 'Red', iid: 't1' },
      { label: 'Orange', iid: 't2' },
      { label: 'Yellow', iid: 't3' },
    ],
    startDateTime: '2023-12-25',
    endDateTime: '2023-12-31',
  },
}
