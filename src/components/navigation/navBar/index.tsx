import { NavLink } from 'react-router-dom'
import LogoutButton from '../../../authentication/logout'
import NavButton from '../navButton'
import { ReactComponent as Logo } from '../../../assets/Kalendara.svg'

export function NavBar() {
  return (
    <nav className="mb-12 mt-6 flex flex-col items-center justify-center gap-1 md:mt-0 md:flex-row">
      <Logo className="w-36 fill-slate-800" />
      {/* <div className="m-auto flex w-4 items-center">
        <div className="absolute left-5 flex w-36">
          <Logo className="fill-slate-800" />
        </div>
      </div> */}
      <div className="mb-3 flex justify-center gap-1 md:mb-0 md:flex-grow md:flex-row">
        <NavLink to="/">
          {({ isActive }) => <NavButton isActive={isActive} text="Home" />}
        </NavLink>
        <NavLink to="/tags">
          {({ isActive }) => <NavButton isActive={isActive} text="Tags" />}
        </NavLink>
      </div>
      {/* <div className="m-auto flex w-4 items-center">
        <div className="absolute right-5">
          <LogoutButton />
        </div>
      </div> */}
      <LogoutButton />
    </nav>
  )
}
