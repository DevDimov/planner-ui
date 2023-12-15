import type { Meta, StoryObj } from '@storybook/react'

import PrimaryButton from './index'

const meta: Meta<typeof PrimaryButton> = {
  title: 'Buttons/Primary',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof PrimaryButton>

export const Primary: Story = {
  args: {
    title: "Log in",
  },
}
