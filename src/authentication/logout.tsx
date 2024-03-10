import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../components/buttons'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      variant="ghost"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
