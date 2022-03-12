import React, { useState } from 'react'

export function useLogin() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [user, setUser] = useState(false)
	const login = () => {
		setLoggedIn(true)
	}
	return {
		loggedIn,
		login,
		user,
		setUser,
	}
}
