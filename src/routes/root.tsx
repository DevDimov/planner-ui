import { Link, Outlet } from 'react-router-dom'
import LoginButton from '../authentication/login'

export default function Root() {
  return (
    <div>
      <p>Navigation</p>
      <Link to={'/calendar'}>Calendar</Link>
      <LoginButton />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
