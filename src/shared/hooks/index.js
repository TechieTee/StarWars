import React, { useState } from 'react'

export function useLogin() {
	const [loggedIn, setLoggedIn] = useState(
		Boolean(localStorage.getItem('user')) || false,
	)
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || {},
	)
	const login = () => {
		setLoggedIn(true)
		localStorage.setItem('loggedIn', 'true')
	}
	const logOut = () => {
		setLoggedIn(false)
		localStorage.removeItem('loggedIn')
		setUser({})
		localStorage.removeItem('user')
	}

	const handleSetUser = (data) => {
		setUser(data)
		localStorage.setItem('user', JSON.stringify(data))
	}
	console.log(loggedIn, user)
	return {
		loggedIn,
		login,
		user,
		handleSetUser,
	}
}
