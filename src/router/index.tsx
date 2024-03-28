import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import ErrorRoute from './routes/errorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [],
  },
])
