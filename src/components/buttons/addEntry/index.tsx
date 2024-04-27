import { Button } from '..'
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog'
import { AddEntryForm } from '../../forms/addEntry'

export default function AddEntryButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add entry</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto">
        <AddEntryForm />
      </DialogContent>
    </Dialog>
  )
}
