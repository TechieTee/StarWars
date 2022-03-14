import React, { useState, useEffect } from 'react'
import DashbordLayout from '../components/DashbordLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'

const columns = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'classification', headerName: 'Classification', width: 130 },
	{
		field: 'eye_colors',
		headerName: 'Eye Colors',
		width: 160,
	},
	{
		field: 'hair_colors',
		headerName: 'Hair Colors',
        width: 160,
	},
	{
		field: 'average_height',
		headerName: 'Height',
        width: 160,
	},
	{
		field: 'created',
		headerName: 'Created',
		width: 160,
	},
]

function Species() {
	const [rowData, setRowData] = useState([])
	const data = useFetch('https://swapi.dev/api/species')
	useEffect(() => {
		if (data) {
			const filtered = data?.results.map((item, index) => {
				const {
					classification,
					gender,
					eye_colors,
					average_height,
					name,
					created,
					hair_colors,
				} = item
				return {
					id: index,
					classification,
					gender,
					average_height,
					name,
					created,
					hair_colors,
					eye_colors,
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

export default Species
