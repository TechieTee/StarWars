import React, { useEffect, useState } from 'react'
import DashbordLayout from '../components/DashbordLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
const columns = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'model', headerName: 'Model', width: 130 },
	{
		field: 'starship_class',
		headerName: 'Class',
		width: 160,
	},
	{
		field: 'passengers',
		headerName: 'Passengers',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'length',
		headerName: 'Length',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'films',
		headerName: 'Films',
		width: 160,
	},
]

function StarShips() {
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
		<DashbordLayout>
			<Table
				{...{
					columns,
					rows: rowData,
				}}
			/>
		</DashbordLayout>
	)
}

export default StarShips
