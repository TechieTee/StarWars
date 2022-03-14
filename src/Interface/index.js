import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import LoginPage from './LoginPage'
import { AuthGuard } from '../components/AuthGuard'
import Dashboard from './Dashboard'

import Layout from '../components/Layout'

const Index = () => {
	// const [showDashboard, setShowDashboard] = useState(true)
	// const onClick = () => setShowDashboard(true)
	return (
		<Layout>
			<Routes>
				<Route
					path='/dashboard'
					element={
						<AuthGuard>
							<Dashboard />
						</AuthGuard>
					}
				/>
				<Route path='/' element={<LoginPage />} />
				{/* <LoginPage handleLogin={onClick} /> */}
			</Routes>
		</Layout>
	)
}
export default Index
