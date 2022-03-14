import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'
import { AuthGuard } from './components/AuthGuard'
import People from './Pages/People'
import StarShips from './Pages/StarShips'
import Species from './Pages/Species'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<AuthGuard>
								<Dashboard />
							</AuthGuard>
						}
					/>
					<Route
						path='/people'
						element={
							<AuthGuard>
								<People />
							</AuthGuard>
						}
					/>
					<Route
						path='/starships'
						element={
							<AuthGuard>
								<StarShips />
							</AuthGuard>
						}
					/>
					<Route
						path='/species'
						element={
							<AuthGuard>
								<Species />
							</AuthGuard>
						}
					/>
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
