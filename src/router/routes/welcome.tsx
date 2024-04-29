import LoginButton from '../../authentication/login'
import Logo from '../../components/logo/logo'
import { TypographyH3 } from '../../components/typography/h3'
import privateTutorSchedule from '../../assets/images/calendar-private-tutor.png'
import privateTutorEventProperties from '../../assets/images/calendar-private-tutor-event-properties.png'

export default function Welcome() {
  return (
    <div className="flex h-screen flex-col">
      <div className="m-auto flex w-full flex-col content-center items-center pb-24">
        <div className="m-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-12">
          <div>
            <Logo />
          </div>
          <TypographyH3 className="text-center">
            A customisable calendar for managing and visualising your schedule.
          </TypographyH3>
          <div className="w-fit">
            <LoginButton />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-4 md:max-w-[80%] md:gap-12 md:px-0">
          <div className="flex flex-col gap-4">
            <TypographyH3>How It Works</TypographyH3>
            <p>
              The app allows you to create events and assign them tags to help
              you understand your priorities at a glance.
            </p>
          </div>
          <div className="w-80% overflow-hidden rounded-lg">
            <img
              src={privateTutorSchedule}
              alt="An example schedule of a private tutor"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TypographyH3>How to Customise It</TypographyH3>
            <p>
              You can store additional information about your events by adding
              custom properties.
            </p>
          </div>
          <div className="w-80% overflow-hidden rounded-lg">
            <img
              src={privateTutorEventProperties}
              alt="Example properties being added to an event"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
