import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './authentication/login'
import LogoutButton from './authentication/logout'
import Calendar from './components/calendar/index'
import { useState, useEffect } from 'react'
import { EventInstanceOccurrence } from './gql/codegen/graphql'
import { mockQueryEventEntry } from './mockData/queryEventEntry'

function App() {
  // const { isAuthenticated } = useAuth0()

  // const [occurrences, setOccurrences] = useState<EventInstanceOccurrence[]>([])

  // useEffect(() => {
  //   setOccurrences(mockQueryEventInstanceOccurrence)
  // }, [])

  return (
    <div className="p-4">
      <Calendar />
    </div>
  )

  // return isAuthenticated ? (
  //   <>
  //     <LogoutButton />
  //     <Calendar occurrences={[]} />
  //   </>
  // ) : (
  //   <LoginButton />
  // )
}

export default App
