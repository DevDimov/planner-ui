import { Button } from '..'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../ui/dialog'
import { CreateEventForm } from '../../forms/createEvent'

export default function CreateEventButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <CreateEventForm />
      </DialogContent>
    </Dialog>
  )
}
