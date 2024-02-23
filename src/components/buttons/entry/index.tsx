import React from 'react'
import { Modal } from '@mui/base/Modal'
import { Button } from '@mui/base/Button'
import { EventEntryForm } from '../../forms/eventEntry'

type EntryButtonProps = {
  title: string
  onClick: () => void
}

export default function EntryButton({ title, onClick }: EntryButtonProps) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        className="ease mb-1 w-full rounded-sm bg-blue-200 bg-opacity-0 py-8 font-normal text-white text-opacity-0 transition-colors duration-300 hover:bg-opacity-100 hover:text-opacity-100"
        onClick={handleOpen}
      >
        {title}
      </Button>
      <Modal
        id={'add-entry-modal'}
        open={open}
        onClose={handleClose}
        className="fixed inset-0 flex items-center justify-center bg-blue-200 bg-opacity-50"
      >
        <div className="z-10 m-1 flex w-[350px] flex-col gap-y-4 rounded-sm border border-solid border-slate-200 bg-white p-3 font-inter text-slate-900 shadow-md">
          <EventEntryForm />
        </div>
      </Modal>
    </div>
  )
}
