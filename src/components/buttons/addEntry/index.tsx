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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add entry</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add entry</DialogTitle>
          <DialogDescription>
            Add new entry to an existing event
          </DialogDescription>
        </DialogHeader>
        <AddEntryForm />
      </DialogContent>
    </Dialog>
  )
}
