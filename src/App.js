import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthGuard } from './components/AuthGuard'
import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'
import People from './Pages/People'
import StarShips from './Pages/StarShips'
import Species from './Pages/Species'
import DetailsPage from './Pages/DetailsPage'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/dashboard'
						element={
							<AuthGuard>
								<Dashboard />
							</AuthGuard>
						}
					/>
					<Route
						path='/films/:id'
						element={
							<AuthGuard>
								<DetailsPage />
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
						path='/people/:id'
						element={
							<AuthGuard>
								<DetailsPage />
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
						path='/starships/:id'
						element={
							<AuthGuard>
								<DetailsPage />
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
					<Route
						path='/species/:id'
						element={
							<AuthGuard>
								<DetailsPage />
							</AuthGuard>
						}
					/>
					<Route path='/' element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
