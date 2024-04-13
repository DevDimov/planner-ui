import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const args = {
  user: {
    name: 'Jane Doe',
  },
  onLogin: () => undefined,
  onLogout: () => undefined,
  onCreateAccount: () => undefined,
}

export const LoggedIn: Story = {
  args,
}

export const LoggedOut: Story = { args }
