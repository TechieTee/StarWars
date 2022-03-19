import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthGuard } from './components/AuthGuard'
import LoginPage from './Pages/LoginPage'
import Dashboard from './Pages/Dashboard'
import People from './Pages/People'
import StarShips from './Pages/StarShips'
import Species from './Pages/Species'
import DetailsPage from './Pages/DetailsPage'
import NotFound from './Pages/NotFound'
import SpeciesDetails from './Pages/SpeciesDetails'
import PeopeleDetails from './Pages/PeopleDetails'
import StarshipsDetails from './Pages/StarshipsDetails'

function App() {
	return (
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
							<PeopeleDetails />
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
							<StarshipsDetails />
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
							<SpeciesDetails />
						</AuthGuard>
					}
				/>
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
