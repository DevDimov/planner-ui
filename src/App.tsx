import { useAuth0 } from '@auth0/auth0-react'
import Calendar from './components/calendar/index'

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0()

  console.log('isAuthenticated', isAuthenticated)
  if (isLoading) {
    return <div>Calendar is loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return <div>{isAuthenticated && <Calendar />}</div>
}

export default App
