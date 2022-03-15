import React, { useState, useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
import { speciesColumn } from '../shared/Data'
import { useNavigate } from 'react-router-dom'

function Species() {
	const [rowData, setRowData] = useState([])
	const navigate = useNavigate()
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
		<AppLayout>
			<Table
				tableTitle='Species'
				{...{
					columns: speciesColumn,
					rows: rowData,
				}}
				rowOnClick={(row) => navigate(`/species/${row.id}`)}
			/>
		</AppLayout>
	)
}

export default Species
