import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './output.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { auth0 } from './authentication/auth0'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Root from './routes/root'
import ErrorRoute from './routes/errorPage'
import CalendarRoute from './routes/calendar'

const AuthorizedApolloProvider = ({ children }: any) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0()
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  })

  const authLink = setContext(async (_, { headers }) => {
    if (!isAuthenticated) {
      return headers
    }

    const token = await getIdTokenClaims()

    console.log(token)

    return {
      headers: {
        ...headers,
        'X-Auth-Token': token ? token.__raw : '',
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: 'calendar',
        element: <CalendarRoute />,
      },
    ],
  },
])

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
        {/* <App /> */}
      </React.StrictMode>
    </AuthorizedApolloProvider>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
