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
import { AddEntryForm } from '../../forms/addEntry'

export default function AddEntryButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Add entry
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add entry</DialogTitle>
          <DialogDescription>
            Add new entry to an existing event
          </DialogDescription>
        </DialogHeader>
        <AddEntryForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
