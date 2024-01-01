import type { Meta, StoryObj } from '@storybook/react'

import CalendarMonth from './index'

const meta: Meta<typeof CalendarMonth> = {
  title: 'Calendar/Month',
  component: CalendarMonth,
}

export default meta
type Story = StoryObj<typeof CalendarMonth>

export const NoEvents: Story = {
  args: {
    month: new Date(2023, 11, 25),
    occurrences: [],
  },
}

// export const ManyEvents: Story = {
//   args: {
//     weeks: [
//       {
//         days: [
//           new Date(2023, 10, 27),
//           new Date(2023, 10, 28),
//           new Date(2023, 10, 29),
//           new Date(2023, 10, 30),
//           new Date(2023, 11, 1),
//           new Date(2023, 11, 2),
//           new Date(2023, 11, 3),
//         ],
//         occurrences: [],
//       },
//       {
//         days: [
//           new Date(2023, 11, 4),
//           new Date(2023, 11, 5),
//           new Date(2023, 11, 6),
//           new Date(2023, 11, 7),
//           new Date(2023, 11, 8),
//           new Date(2023, 11, 9),
//           new Date(2023, 11, 10),
//         ],
//         occurrences: [],
//       },
//       {
//         days: [
//           new Date(2023, 11, 11),
//           new Date(2023, 11, 12),
//           new Date(2023, 11, 13),
//           new Date(2023, 11, 14),
//           new Date(2023, 11, 15),
//           new Date(2023, 11, 16),
//           new Date(2023, 11, 17),
//         ],
//         occurrences: [],
//       },
//       {
//         days: [
//           new Date(2023, 11, 18),
//           new Date(2023, 11, 19),
//           new Date(2023, 11, 20),
//           new Date(2023, 11, 21),
//           new Date(2023, 11, 22),
//           new Date(2023, 11, 23),
//           new Date(2023, 11, 24),
//         ],
//         occurrences: [
//           {
//             label: 'Full Week Event',
//             dateStart: new Date(2023, 11, 25),
//             dateEnd: new Date(2023, 11, 25),
//             colStart: '1',
//             colEnd: '8',
//             tags: [{ label: 'Yellow', color: 'yellow' }],
//           },
//           {
//             label: 'Single Day Event',
//             dateStart: new Date(2023, 11, 25),
//             dateEnd: new Date(2023, 11, 25),
//             colStart: '3',
//             colEnd: '4',
//             tags: [{ label: 'Yellow', color: 'yellow' }],
//           },
//         ],
//       },
//       {
//         days: [
//           new Date(2023, 11, 25),
//           new Date(2023, 11, 26),
//           new Date(2023, 11, 27),
//           new Date(2023, 11, 28),
//           new Date(2023, 11, 29),
//           new Date(2023, 11, 30),
//           new Date(2023, 11, 31),
//         ],
//         occurrences: [
//           {
//             label: 'Single Day Event',
//             dateStart: new Date(2023, 11, 25),
//             dateEnd: new Date(2023, 11, 25),
//             colStart: '1',
//             colEnd: '2',
//             tags: [{ label: 'Blue', color: 'blue' }],
//           },
//           {
//             label: 'Multi Day Event',
//             dateStart: new Date(2023, 11, 25),
//             dateEnd: new Date(2023, 11, 25),
//             colStart: '1',
//             colEnd: '4',
//             tags: [{ label: 'Blue', color: 'blue' }],
//           },
//         ],
//       },
//     ],
//   },
// }
