import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useLogin } from '../shared/hooks'

export function AuthGuard({ children }) {
	let location = useLocation()
	const { loggedIn } = useLogin()
	console.log(loggedIn);
	if (!loggedIn) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	return children
}
