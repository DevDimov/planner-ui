import { useAuth0 } from '@auth0/auth0-react'
// import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="rounded-sm bg-blue-500 px-2 py-1"
    >
      Log In / Sign Up
    </button>
  )
}

export default LoginButton
