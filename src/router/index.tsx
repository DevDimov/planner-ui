import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import ErrorRoute from './routes/errorPage'
import TagsRoute from './routes/tags'
import EventsRoute from './routes/events'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [],
  },
  {
    path: '/tags',
    element: <TagsRoute />,
  },
  {
    path: '/events',
    element: <EventsRoute />,
  },
])
