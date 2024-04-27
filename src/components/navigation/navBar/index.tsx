import { NavLink } from 'react-router-dom'
import LogoutButton from '../../../authentication/logout'
import NavButton from '../navButton'
import { ReactComponent as Logo } from '../../../assets/Kalendara.svg'

export function NavBar() {
  return (
    <nav className="mb-12 flex items-center justify-center gap-1">
      <div className="m-auto flex w-4 items-center">
        <div className="absolute left-5 flex w-36">
          <Logo className="fill-slate-800" />
        </div>
      </div>
      <NavLink to="/">
        {({ isActive }) => <NavButton isActive={isActive} text="Home" />}
      </NavLink>
      <NavLink to="/tags">
        {({ isActive }) => <NavButton isActive={isActive} text="Tags" />}
      </NavLink>
      <div className="m-auto flex w-4 items-center">
        <div className="absolute right-5">
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}
