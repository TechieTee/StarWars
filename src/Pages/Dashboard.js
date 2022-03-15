import React, { useState, useEffect } from 'react'
import { CardWrapper } from './Styles'
import AppLayout from '../components/AppLayout'
import Card from '../components/CardWidget'
import Table from '../components/Table'
import useFetch from '../shared/hooks/useFetch'
import { cardInfo, filmsColumn } from '../shared/Data'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const [rowData, setRowData] = useState([])
	const navigate = useNavigate()
	const data = useFetch('https://swapi.dev/api/films')

	useEffect(() => {
		if (data) {
			const filtered = data?.results.map((item, index) => {
				const {
					title,
					release_date,
					director,
					producer,
					episode_id,
					characters,
				} = item
				return {
					id: index,
					title,
					release_date,
					director,
					producer,
					episode_id,
					characters,
				}
			})
			setRowData(filtered)
		}
	}, [data])

	return (
		<AppLayout>
			<CardWrapper>
				{cardInfo.map((item) => (
					<Card
						key={item}
						cardTitle={item.title}
						fill={item.fill}
						number={item.number}
						desc={item.desc}
					/>
				))}
			</CardWrapper>

			<Table
				tableTitle='Films'
				{...{
					columns: filmsColumn,
					rows: rowData,
				}}
				rowOnClick={(row) => navigate(`/films/${row.id}`)}
			/>
		</AppLayout>
	)
}
export default Dashboard
