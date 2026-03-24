import React from 'react'
import NotesButton from '../components/NotesTags'

const Notes = () => {
  return (
    <section>
        <span className="text-stone font-sans text-sm font-light">
          NOTES YOU EXPERIENCE
        </span>
        <div className='mt-2'>
        <NotesButton/>
        </div>
      </section>
  )
}

export default Notes