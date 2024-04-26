import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import ErrorRoute from './routes/errorPage'
// import EventsRoute from './routes/events'
import Calendar from '../components/calendar'
import TagsPage from '../pages/tags'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      // {
      //   path: '/events',
      //   element: <EventsRoute />,
      // },
      {
        path: 'tags',
        element: <TagsPage />,
      },
    ],
  },
])
