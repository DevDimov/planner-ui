import type { Meta, StoryObj } from '@storybook/react'

import SecondaryButton from './index'

const meta: Meta<typeof SecondaryButton> = {
  title: 'Buttons/Secondary',
  component: SecondaryButton,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof SecondaryButton>

export const SecondaryPrevious: Story = {
  args: {
    title: 'Previous',
  },
}
