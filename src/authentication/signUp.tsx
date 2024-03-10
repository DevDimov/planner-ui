import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../components/buttons'

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button variant="secondary" onClick={() => loginWithRedirect()}>
      Sign Up
    </Button>
  )
}

export default SignUpButton
