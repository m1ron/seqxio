'use client'
import { useState } from 'react'
import Icons from '../common/Icons'
import Button from '../ui/Button'

interface DateNotesModalProps {
    isOpen: boolean
    onClose: () => void
    selectedDate: string
    existingNote?: string
    onSave: (date: string, note: string) => void
    onDelete: (date: string) => void
}

const DateNotesModal = ({ isOpen, onClose, selectedDate, existingNote = '', onSave, onDelete }: DateNotesModalProps) => {
    const [note, setNote] = useState(existingNote)

    if (!isOpen) return null

    const handleSave = () => {
        if (note.trim()) {
            onSave(selectedDate, note.trim())
        }
        onClose()
    }

    const handleDelete = () => {
        onDelete(selectedDate)
        onClose()
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={handleClose}>
            <div className="bg-white rounded-[15px] p-6 max-w-[500px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium text-black">Note for {selectedDate}</h2>
                    <button onClick={handleClose} className="cursor-pointer bg-red-500 hover:bg-red-900 rounded-sm transition-all ease-linear duration-300">
                        <Icons icon="closenav" />
                    </button>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-normal text-black">Add your note</label>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter your note here..."
                        className="font-normal text-base leading-120 text-black placeholder:text-graphite border border-black outline-none py-3 px-3 rounded-[10px] w-full min-h-[150px] resize-none"
                        autoFocus
                    />
                </div>

                <div className="flex gap-3 items-center flex-wrap!">
                    {existingNote && (
                        <Button
                            variant="outline"
                            onClick={handleDelete}
                            className="flex-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                            Delete
                        </Button>
                    )}
                    <Button variant="outline" onClick={handleClose} className="flex-1">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} className="flex-1 text-nowrap">
                        Save Note
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DateNotesModal
