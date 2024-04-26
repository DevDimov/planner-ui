import type { Meta, StoryObj } from '@storybook/react'
import TagsPage from './index'

const meta: Meta<typeof TagsPage> = {
  title: 'Pages/Tags',
  component: TagsPage,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof TagsPage>

export const NoTags: Story = {}
