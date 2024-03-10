import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'

export const AuthorizedApolloProvider = ({ children }: any) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0()
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  })

  const authLink = setContext(async (_, { headers }) => {
    if (!isAuthenticated) {
      return headers
    }

    const token = await getIdTokenClaims()

    return {
      headers: {
        ...headers,
        'Planner-Token': token ? token.__raw : '',
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
