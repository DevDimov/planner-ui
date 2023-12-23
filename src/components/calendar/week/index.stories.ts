import type { Meta, StoryObj } from '@storybook/react'

import CalendarWeek from './index'

const meta: Meta<typeof CalendarWeek> = {
  title: 'Calendar/Week',
  component: CalendarWeek,
}

export default meta
type Story = StoryObj<typeof CalendarWeek>

const days = [
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
    days,
    occurrences: [],
  },
}

export const SingleDayEvent: Story = {
  args: {
    days,
    occurrences: [
      {
        iid: '0x1a5086a7de',
        startDateTime: '2023-12-25T00:00:00Z',
        endDateTime: '2023-12-31T00:00:00Z',
        eventInstance: {
          iid: '0x1a5086a7dd',
          id: 'auth0|65538f46da9fa0033488f080.Single Day Event.At work',
          tags: [
            {
              id: 'auth0|65538f46da9fa0033488f080.Work',
              iid: '0x1a5086a7dc',
              label: 'Work',
            },
          ],
          event: {
            id: 'auth0|65538f46da9fa0033488f080.Single Day Event',
            iid: '0x1a5086a7df',
            label: 'Single Day Event',
          },
        },
      },
    ],
  },
}

// export const SingleDayEventMaxTags: Story = {
//   args: {
//     days,
//     occurrences: [
//       {
//         label: 'Single Day Event Max Tags',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '2',
//         tags: [
//           { label: 'Red', color: 'red' },
//           { label: 'Blue', color: 'blue' },
//           { label: 'Green', color: 'green' },
//           { label: 'Orange', color: 'orange' },
//           { label: 'Orange', color: 'orange' },
//           { label: 'Orange', color: 'orange' },
//         ],
//       },
//     ],
//   },
// }

// export const MultiDayEvent: Story = {
//   args: {
//     days,
//     occurrences: [
//       {
//         label: 'Multi Day Event',
//         dateStart: days[1],
//         dateEnd: days[4],
//         colStart: '2',
//         colEnd: '6',
//         tags: [{ label: 'Blue', color: 'blue' }],
//       },
//     ],
//   },
// }

// export const FullWeekEvent: Story = {
//   args: {
//     days,
//     occurrences: [
//       {
//         label: 'Full week Event',
//         dateStart: days[0],
//         dateEnd: days[6],
//         colStart: '1',
//         colEnd: '8',
//         tags: [{ label: 'Blue', color: 'blue' }],
//       },
//     ],
//   },
// }

// export const SingleDayEvents: Story = {
//   args: {
//     days,
//     occurrences: [
//       {
//         label: 'Event One',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '2',
//         tags: [{ label: 'Blue', color: 'blue' }],
//       },
//       {
//         label: 'Event Two',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '2',
//         tags: [{ label: 'Yellow', color: 'yellow' }],
//       },
//       {
//         label: 'Event Three',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '2',
//         tags: [{ label: 'Violet', color: 'violet' }],
//       },
//     ],
//   },
// }

// export const MultiDayEvents: Story = {
//   args: {
//     days,
//     occurrences: [
//       {
//         label: 'Event One',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '2',
//         tags: [{ label: 'Blue', color: 'blue' }],
//       },
//       {
//         label: 'Event Two',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '5',
//         tags: [{ label: 'Yellow', color: 'yellow' }],
//       },
//       {
//         label: 'Event Five',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '7',
//         colEnd: '8',
//         tags: [{ label: 'Red', color: 'red' }],
//       },
//       {
//         label: 'Event Three',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '1',
//         colEnd: '3',
//         tags: [{ label: 'Violet', color: 'violet' }],
//       },
//       {
//         label: 'Event Four',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '3',
//         colEnd: '6',
//         tags: [{ label: 'Green', color: 'green' }],
//       },
//       {
//         label: 'Event Six',
//         dateStart: days[0],
//         dateEnd: days[0],
//         colStart: '6',
//         colEnd: '7',
//         tags: [{ label: 'Indogo', color: 'indigo' }],
//       },
//     ],
//   },
// }
