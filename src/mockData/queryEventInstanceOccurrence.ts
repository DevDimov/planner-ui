import { EventInstanceOccurrence } from '../gql/codegen/graphql'

export const mockQueryEventInstanceOccurrence: EventInstanceOccurrence[] = [
  {
    iid: '0x1a5086a7de',
    startDateTime: '2023-12-25T00:00:00Z',
    endDateTime: '2023-12-31T00:00:00Z',
    eventInstance: {
      iid: '0x1a5086a7dd',
      id: 'auth0|65538f46da9fa0033488f080.Margo Dimova.At work',
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
        id: 'auth0|65538f46da9fa0033488f080.Margo Dimova',
        iid: '0x1a5086a7df',
        label: 'Margo Dimova',
        properties: [
          {
            iid: 'p1',
            id: '',
            event: {
              id: '',
              iid: '',
              label: '',
              user: {
                iid: '',
                email: '',
              },
            },
            label: 'Event type',
            value: 'Student',
          },
          {
            iid: 'p2',
            label: 'Mobile',
            value: '073xxx',
            id: '',
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
  },
  {
    iid: '0x1a5086a7de2',
    startDateTime: '2023-12-25T00:00:00Z',
    endDateTime: '2023-12-25T00:00:00Z',
    eventInstance: {
      iid: '0x1a5086a7dd',
      id: 'auth0|65538f46da9fa0033488f080.Margo Dimova.At work',
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
        id: 'auth0|65538f46da9fa0033488f080.Margo Dimova',
        iid: '0x1a5086a7df',
        label: 'Margo Dimova',
        properties: [],
        user: {
          email: 'vdimov@proton.me',
          iid: '0x1a508680f9',
        },
      },
    },
  },
]
