import type { Meta, StoryObj } from '@storybook/react'

import TagColourSelect from '.'

const meta: Meta<typeof TagColourSelect> = {
  title: 'Select/Tag Colour',
  component: TagColourSelect,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TagColourSelect>

export const Default: Story = {
  args: {
    onValueChange: (value) => console.log(value),
  },
}
