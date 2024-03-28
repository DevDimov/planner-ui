import { NavBar } from '../../components/navigation'
import Welcome from '../pages/welcome'
import { useAuth0 } from '@auth0/auth0-react'
import App from '../../App'

export default function Root() {
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
          <App />
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  )
}
