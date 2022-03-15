import { useState } from 'react'

export function useLogin() {
	const lIn = Boolean(localStorage.getItem('loggedIn')) || false
	const authUser = JSON.parse(localStorage.getItem('user')) || {}
	const [loggedIn, setLoggedIn] = useState(lIn)
	const [user, setUser] = useState(authUser)

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

	return {
		loggedIn,
		login,
		user,
		handleSetUser,
		logOut,
	}
}
