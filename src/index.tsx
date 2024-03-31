import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './output.css'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0 } from './authentication/auth0'
import { router } from './router'
import { AuthorizedApolloProvider } from './context/apollo'
import { Toaster } from './components/ui/toast/toaster'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <AuthorizedApolloProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
      </React.StrictMode>
    </AuthorizedApolloProvider>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
