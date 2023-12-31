import { Link, Outlet } from 'react-router-dom'
import LoginButton from '../authentication/login'
import Calendar from '../components/calendar'
import App from '../App'

export default function Root() {
  return (
    // <div>
    //   <p>Navigation</p>
    //   <Link to={'/calendar'}>Calendar</Link>
    //   <LoginButton />
    //   <div>
    //     <Outlet />
    //   </div>
    // </div>
    <App />
  )
}
