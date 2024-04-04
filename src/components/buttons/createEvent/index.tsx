import { Button } from '..'
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
        <DialogHeader></DialogHeader>
        <CreateEventForm />
      </DialogContent>
    </Dialog>
  )
}
