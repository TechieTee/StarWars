import React, { useEffect, useState } from 'react'
// import note from './note'
import axios from 'axios'

export default function Parent() {
	const [note, getNotes] = useState('')
	const url = ''
	useEffect(() => {
		getAllNotes()
	}, [])

	const getAllNotes = () => {
		axios
			.get(`${url} past`)
			.then((response) => {
				const allNotes = response.data.notes.allNotes
				getNotes(allNotes)
			})
			.catch((error) => console.error(`Error: ${error}`))
	}

	return <NoteTimeline notes={notes} />
}
