import React, { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
import { starshipColumn } from '../shared/Data'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

function StarShips() {
	const navigate = useNavigate()
	const [rowData, setRowData] = useState([])
	const data = useFetch('https://swapi.dev/api/starships')
	useEffect(() => {
		if (data) {
			const filtered = data?.results.map((item, index) => {
				const { name, model, starship_class, passengers, length, films } = item
				return {
					id: index,
					name,
					model,
					starship_class,
					passengers,
					length,
					films,
				}
			})
			setRowData(filtered)
		}
	}, [data])
	// console.log(data)
	return (
		<AppLayout>
			<Table
				tableTitle='Starships'
				{...{
					columns: starshipColumn,
					rows: rowData,
				}}
				rowOnClick={(row) => navigate(`/starships/${row.id}`)}
			/>
		</AppLayout>
	)
}

export default StarShips
