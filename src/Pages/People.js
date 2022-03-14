import React, { useState, useEffect } from 'react'
import DashbordLayout from '../components/DashbordLayout'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair

const columns = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'birth_year', headerName: 'Birth Year', width: 130 },
	{
		field: 'gender',
		headerName: 'Gender',
		width: 160,
		// valueGetter: (params) =>
		// 	`${params.row.gender || ''}`,
	},
	{
		field: 'hair_color',
		headerName: 'Hair Color',
		description: 'This column has a value getter and is not sortable.',
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'height',
		headerName: 'Height',
		description: 'This column has a value getter and is not sortable.',
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'created',
		headerName: 'Created',
		width: 160,
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
]

function People() {
	const [rowData, setRowData] = useState([])
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

export default People
