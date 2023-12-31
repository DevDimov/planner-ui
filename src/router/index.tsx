import { createBrowserRouter } from 'react-router-dom'
import Root from '../routes/root'
import ErrorRoute from '../routes/errorPage'
import CalendarRoute from '../routes/calendar'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    // children: [
    //   {
    //     path: 'calendar',
    //     element: <CalendarRoute />,
    //   },
    // ],
  },
])
