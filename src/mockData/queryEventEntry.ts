import { EventEntry } from '../gql/codegen/graphql'

export const mockQueryEventEntry: EventEntry[] = [
  {
    iid: '0x1a5086a7de1',
    startDateTime: '2023-12-25T00:00:00Z',
    endDateTime: '2023-12-31T00:00:00Z',
    tags: [
      {
        id: 'auth0|65538f46da9fa0033488f080.Work',
        iid: '0x1a5086a7dc',
        label: 'Work',
        user: {
          iid: '',
          email: '',
        },
      },
    ],
    event: {
      iid: '0x1a5086a7dd1',
      id: 'auth0|65538f46da9fa0033488f080.Margo Dimova.At work',
      label: 'Margo Dimova',

      properties: [
        {
          iid: 'p1',
          id: 'auth0|65538f46da9fa0033488f080.EventType',
          label: 'Event type',
          value: 'Student',
          event: {
            id: '',
            iid: '',
            label: '',
            user: {
              iid: '',
              email: '',
            },
          },
        },
        {
          iid: 'p2',
          label: 'Mobile',
          value: '073xxx',
          id: 'auth0|65538f46da9fa0033488f080.Mobile',
          event: {
            id: '',
            iid: '',
            label: '',
            user: {
              iid: '',
              email: '',
            },
          },
        },
      ],
      user: {
        email: 'vdimov@proton.me',
        iid: '0x1a508680f9',
      },
    },
  },
  {
    iid: '0x1a5086a7de2',
    startDateTime: '2023-12-25T00:00:00Z',
    endDateTime: '2023-12-25T00:00:00Z',
    tags: [
      {
        id: 'auth0|65538f46da9fa0033488f080.School',
        iid: '0x1a5086a7dc',
        label: 'School',
        user: {
          iid: '',
          email: '',
        },
      },
    ],
    event: {
      iid: '0x1a5086a7dd2',
      id: 'auth0|65538f46da9fa0033488f080.Margo Dimova.At school',
      label: 'Margo Dimova',

      properties: [],
      user: {
        email: 'vdimov@proton.me',
        iid: '0x1a508680f9',
      },
    },
  },
]
