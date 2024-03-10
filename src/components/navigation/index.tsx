import LoginButton from '../../authentication/login'
import LogoutButton from '../../authentication/logout'
import { useAuth0 } from '@auth0/auth0-react'

export function NavBar() {
  const { isAuthenticated, isLoading, error } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <nav className="flex items-center justify-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  )
}
