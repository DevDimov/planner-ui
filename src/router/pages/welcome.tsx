import LoginButton from '../../authentication/login'
import Logo from '../../components/logo/logo'
import { TypographyH3 } from '../../components/typography/h3'

export default function Welcome() {
  return (
    <div className="flex h-screen flex-col">
      <div className="m-auto flex w-full flex-col content-center items-center">
        <div className="m-auto flex max-w-3xl flex-col items-center gap-12">
          <div>
            <Logo />
          </div>
          <TypographyH3 className="text-center">
            A handy tool for scheduling events and staying organised.
          </TypographyH3>
          <div className="w-fit">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  )
}
