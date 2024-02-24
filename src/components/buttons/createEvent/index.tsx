import React from 'react'
import { Button } from '..'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog'
import { CreateEventForm } from '../../forms/createEvent'

export default function CreateEventButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Create event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create event</DialogTitle>
          <DialogDescription>
            Create a new event with unique tags
          </DialogDescription>
        </DialogHeader>
        <CreateEventForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
