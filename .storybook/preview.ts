import type { Preview } from '@storybook/react'
import { MockedProvider } from '@apollo/client/testing'

import '../src/output.css'

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    apolloClient: {
      MockedProvider,
      // globalMocks: [],
    },
  },
}

export default preview
