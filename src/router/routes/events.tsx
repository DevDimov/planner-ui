import { NavBar } from '../../components/navigation/navBar'
import Welcome from './welcome'
import { useAuth0 } from '@auth0/auth0-react'

export default function EventsRoute() {
  const { isAuthenticated, isLoading, error } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex flex-col gap-y-4 p-4">
          <NavBar />
          <div>Events page coming soon</div>
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  )
}
