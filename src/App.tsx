import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './authentication/login'
import LogoutButton from './authentication/logout'
import Profile from './authentication/profile'
import DisplayEventClass from './component/displayEventClass'

function App() {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <>
      <LogoutButton />
      <Profile />
      <DisplayEventClass />
    </>
  ) : (
    <LoginButton />
  )
}

export default App
