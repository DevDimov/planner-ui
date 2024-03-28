import LogoutButton from '../../authentication/logout'

export function NavBar() {
  return (
    <nav className="flex items-center justify-end">
      <LogoutButton />
    </nav>
  )
}
