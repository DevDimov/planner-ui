export const mockQueryEventInstanceOccurrence = {
  data: {
    queryEventInstanceOccurrence: [
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
            },
          ],
          event: {
            id: 'auth0|65538f46da9fa0033488f080.Margo Dimova',
            iid: '0x1a5086a7df',
            label: 'Margo Dimova',
            properties: [
              {
                iid: "p1",
                label: "Event type",
                value: "Student"
              },
              {
                iid: "p2",
                label: "Mobile",
                value: "073xxx"
              },
            ]
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
            },
          ],
          event: {
            id: 'auth0|65538f46da9fa0033488f080.Margo Dimova',
            iid: '0x1a5086a7df',
            label: 'Margo Dimova',
            properties: []
          },
        },
      },
    ],
  },
}
