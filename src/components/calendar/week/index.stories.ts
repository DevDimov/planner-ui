import type { Meta, StoryObj } from '@storybook/react'

import CalendarWeek from './index'

const meta: Meta<typeof CalendarWeek> = {
  title: 'Calendar/Week',
  component: CalendarWeek,
}

export default meta
type Story = StoryObj<typeof CalendarWeek>

const entries = [
  new Date(2023, 11, 25),
  new Date(2023, 11, 26),
  new Date(2023, 11, 27),
  new Date(2023, 11, 28),
  new Date(2023, 11, 29),
  new Date(2023, 11, 30),
  new Date(2023, 11, 31),
]

export const NoEvents: Story = {
  args: {
    entries,
    occurrences: [],
  },
}

export const SingleDayEvent: Story = {
  args: {
    entries,
    occurrences: [
      {
        label: 'Single Day Event',
        dateStart: entries[0],
        dateEnd: entries[0],
        colStart: '1',
        colEnd: '2',
        tags: [{ label: 'Blue', color: 'blue' }],
      },
    ],
  },
}

export const SingleDayEventMaxTags: Story = {
  args: {
    entries,
    occurrences: [
      {
        label: 'Single Day Event Max Tags',
        dateStart: entries[0],
        dateEnd: entries[0],
        colStart: '1',
        colEnd: '2',
        tags: [
          { label: 'Red', color: 'red' },
          { label: 'Blue', color: 'blue' },
          { label: 'Green', color: 'green' },
          { label: 'Orange', color: 'orange' },
          { label: 'Orange', color: 'orange' },
          { label: 'Orange', color: 'orange' },
        ],
      },
    ],
  },
}

export const MultiDayEvent: Story = {
  args: {
    entries,
    occurrences: [
      {
        label: 'Multi Day Event',
        dateStart: entries[1],
        dateEnd: entries[4],
        colStart: '2',
        colEnd: '6',
        tags: [{ label: 'Blue', color: 'blue' }],
      },
    ],
  },
}

export const FullWeekEvent: Story = {
  args: {
    entries,
    occurrences: [
      {
        label: 'Full week Event',
        dateStart: entries[0],
        dateEnd: entries[6],
        colStart: '1',
        colEnd: '8',
        tags: [{ label: 'Blue', color: 'blue' }],
      },
    ],
  },
}

// export const MultipleTags: Story = {
//   args: {
//     label: 'Instance with multiple tags',
//     tags: [
//       { label: 'Red', color: 'red' },
//       { label: 'Orange', color: 'orange' },
//       { label: 'Yellow', color: 'yellow' },
//     ],
//   },
// }

// export const MaxTags: Story = {
//   args: {
//     label: 'Instance with maximum tags',
//     tags: [
//       { label: 'Red', color: 'red' },
//       { label: 'Orange', color: 'orange' },
//       { label: 'Yellow', color: 'yellow' },
//       { label: 'Green', color: 'green' },
//       { label: 'Blue', color: 'blue' },
//     ],
//   },
// }
