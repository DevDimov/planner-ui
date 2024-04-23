import { NavBar } from '../../components/navigation'
import Welcome from './welcome'
import { useAuth0 } from '@auth0/auth0-react'
import CalendarContextProvider from 'context/calendar'
import { AuthorizedApolloProvider } from 'context/apollo'
import { Outlet } from 'react-router-dom'

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
          <AuthorizedApolloProvider>
            <CalendarContextProvider>
              <NavBar />
              <Outlet />
            </CalendarContextProvider>
          </AuthorizedApolloProvider>
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  )
}
