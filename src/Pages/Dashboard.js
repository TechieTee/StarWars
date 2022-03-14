import React, { useState, useEffect } from 'react'
// import InAppMenu from '../components/InAppMenu'
import NavBar from '../components/NavBar'
import Card from '../components/CardWidget'
// import ImageProfile from '../components/ImageProfile'
import Table from '../components/Table'
import styled from 'styled-components'
import Logo from '../Images/Logo.png'

import { GridSmall, NavItemIcon } from '../Images/SvgIcons'

// import { useLogin } from '../shared/hooks/index'
import { makeStyles } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import DashbordLayout from '../components/DashbordLayout'
import useFetch from '../shared/hooks/useFetch'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
}))

const cardInfo = [
	{
		title: 'Films',
		fill: '#A9FFE0',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'Startships',
		fill: '#A9C1FF',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'People',
		fill: '#FFA9EC',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'Species',
		fill: '#FDFFA9',
		number: '200',
		desc: '20 More than than yesterday',
	},
]
const columns = [
	{ field: 'title', headerName: 'Title', width: 130 },
	{ field: 'release_date', headerName: 'Release Date', width: 130 },
	{
		field: 'director',
		headerName: 'Director',
		width: 160,
	},
	{
		field: 'producer',
		headerName: 'Producer',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'episode_id',
		headerName: 'Episode_Id',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'characters',
		headerName: 'Characters',
		width: 160,
	},
]

const Index = () => {
	const [rowData, setRowData] = useState([])
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
	// console.log(data)

	return (
		<DashbordLayout>
			<>
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
				{/* <ImageProfile /> */}
				<Table
					{...{
						columns,
						rows: rowData,
					}}
				/>
			</>
		</DashbordLayout>
	)
}
const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	margin-bottom: 150px;
`
export default Index
