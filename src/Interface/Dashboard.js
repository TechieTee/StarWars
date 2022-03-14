import React, { useState } from 'react'
import InAppMenu from '../components/InAppMenu'
import NavBar from '../components/NavBar'
import Card from '../components/CardWidget'
import ImageProfile from '../components/ImageProfile'
import Table from '../components/Table'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'
import { useLogin } from '../shared/hooks/index'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm, Controller } from 'react-hook-form'

import NavItems from '../components/NavItems'

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

const Index = () => {
	const [index, setIndex] = useState(false)
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
	return (
		<Container>
			{/* <Sidebar style={{ width: `${width}px` }}> */}
			<Sidebar>
				<NavItems index={index}></NavItems>
				{/* <SideBar /> */}
				{/* <SideBar
				ref={sideBarRef}
				links={links}
				handleClick={handleClick}
				width={width}
				drawer={drawer}
			/> */}
			</Sidebar>
			{/* <Main style={{ width: `calc(100% - ${width}px)`, left: `${width}px` }}> */}
			<Main>
				{' '}
				<NavBar />
				<DashboardWrapper>
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
					<Table />
				</DashboardWrapper>
			</Main>
		</Container>
	)
}
export default Index

const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	margin-bottom: 150px;
`
const DashboardWrapper = styled.div`
	width: 90%;
	margin: auto;
	margin-top: 50px;
`

const Container = styled.div`
	display: flex;
	height: 100vh;
	position: relative;
	font-family: 'Poppins', sans-serif;
`
const Sidebar = styled.div`
	/* flex:0 0 20%; */
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: all 0.3s ease;
	width: 270px;
	background: #031434;
`
const Main = styled.main`
	position: fixed;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	height: 100vh;
	width: calc(100% - 270px);
	margin-left: 270px;
	overflow: auto;
`
