import type { Preview } from '@storybook/react'
import { MockedProvider } from '@apollo/client/testing'

import '../src/output.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    apolloClient: {
      MockedProvider,
    },
  },
}

export default preview
