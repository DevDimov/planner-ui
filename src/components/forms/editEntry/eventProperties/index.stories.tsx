import type { Meta, StoryObj } from '@storybook/react'
import { EditEventPropertiesForm } from './index'

const meta: Meta<typeof EditEventPropertiesForm> = {
  component: EditEventPropertiesForm,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EditEventPropertiesForm>

export const EventPropertiesForm: Story = {
  args: {
    eventIid: 'Test',
    handleCancelEditing: () => console.log('Close'),
    properties: [
      {
        iid: 'iid1',
        id: 'id1',
        label: 'label1',
        value: 'value1',
        event: {
          id: 'event1',
          iid: '',
          label: '',
          user: {
            email: '',
            iid: '',
          },
        },
      },
    ],
  },
}
