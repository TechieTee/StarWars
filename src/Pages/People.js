import React, { useState, useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
import { peopleColumn } from '../shared/Data'
import { useNavigate } from 'react-router-dom'

function People() {
	const [rowData, setRowData] = useState([])
	const navigate = useNavigate()
	const data = useFetch('https://swapi.dev/api/people')
	useEffect(() => {
		if (data) {
			const filtered = data?.results.map((item, index) => {
				const { birth_year, gender, height, name, created, hair_color } = item
				return {
					id: index,
					birth_year,
					gender,
					height,
					name,
					created,
					hair_color,
				}
			})
			setRowData(filtered)
		}
	}, [data])

	return (
		<AppLayout>
			<Table
				tableTitle='People'
				{...{
					columns: peopleColumn,
					rows: rowData,
				}}
				rowOnClick={(row) =>navigate(`/people/${row.id}`)}
			/>
		</AppLayout>
	)
}

export default People
