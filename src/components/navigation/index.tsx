import { NavLink } from 'react-router-dom'
import LogoutButton from '../../authentication/logout'
import { Button } from 'components/buttons'
import { cn } from 'utils'

export function NavButton({
  text,
  isActive,
}: {
  isActive: boolean
  text: string
}) {
  return (
    <div className="relative">
      <Button
        variant="ghost"
        className={cn(isActive ? 'hover:cursor-default hover:bg-white' : '')}
      >
        {text}
      </Button>
      <div
        className={cn(
          isActive ? 'absolute h-1 w-full cursor-default border-b-4' : ''
        )}
      ></div>
    </div>
  )
}

export function NavBar() {
  return (
    <nav className="mb-4 flex items-center justify-center gap-1">
      <div className="m-auto w-4"></div>
      <NavLink to="/">
        {({ isActive }) => <NavButton isActive={isActive} text="Home" />}
      </NavLink>
      {/* <Button variant="ghost">
        <NavLink to="/events">Events</NavLink>
      </Button> */}
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
