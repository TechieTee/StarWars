import React, { useState } from 'react'

export function useLogin() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [user, setUser] = useState(false)

	return {
		loggedIn,
		setLoggedIn,
		user,
		setUser,
	}
}
