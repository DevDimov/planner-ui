import { Link, Outlet } from 'react-router-dom'
import LoginButton from '../authentication/login'
import Calendar from '../components/calendar'
import App from '../App'
import SignUpButton from '../authentication/signUp'
import { TypographyH1 } from '../components/typography/h1'
import { TypographyH2 } from '../components/typography/h2'
import { TypographyH3 } from '../components/typography/h3'
import { NavBar } from '../components/navigation'

export default function Root() {
  return (
    // <div className="flex h-screen w-screen items-center justify-center">
    //   <div className="flex flex-col gap-4">
    //     <TypographyH1>Kalendara</TypographyH1>
    //     <TypographyH3>
    //       The flexible calendar app that keeps you organised!
    //     </TypographyH3>
    //     <div className="mt-8 flex w-full gap-x-4">
    //       <LoginButton />
    //       <SignUpButton />
    //     </div>
    //   </div>
    // </div>
    // <App />
    <div className="flex flex-col gap-y-4 p-4">
      <NavBar />
      <Outlet />
    </div>
  )
}
