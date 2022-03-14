import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
// import InAppMenu from '../components/InAppMenu'

import Card from '../components/CardWidget'
// import ImageProfile from '../components/ImageProfile'
import Table from '../components/Table'
import Logo from '../Images/Logo.png'

import { GridSmall, NavItemIcon } from '../Images/SvgIcons'

// import { useLogin } from '../shared/hooks/index'
import { makeStyles } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const navItems = [
	{ name: 'Startships', fill: '#A9C1FF', path: '/starships' },
	{ name: 'People', fill: '#FFA9EC', path: '/people' },
	{ name: 'Species', fill: '#FDFFA9', path: '/species' },
]
function DashbordLayout({ children }) {
	return (
		<Container>
			{/* <Sidebar style={{ width: `${width}px` }}> */}
			<Sidebar>
				<>
					<Img>
						<img src={Logo} alt='logo' />
					</Img>
					<Action>
						<Button
							variant='contained'
							startIcon={<GridSmall />}
							color={'primary'}
						>
							OverView
						</Button>
					</Action>
					<Nav>
						{navItems.map((item) => (
							<NavItem
								itemName={item.name}
								key={item}
								fill={item.fill}
								path={item.path}
							/>
						))}
					</Nav>
					{/* <Routes>
                <Route path='/' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
                <Route path='/foo' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
                <Route path='/about' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
            </Routes> */}
				</>
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
				<NavBar />

				<DashboardWrapper>{children}</DashboardWrapper>
			</Main>
		</Container>
	)
}

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

const Img = styled.div`
	width: 130px;
	margin: auto;
	margin-top: 35px;

	img {
		height: 100%;
		width: 100%;
	}
`

const Action = styled.div`
	position: absolute;
	width: 232px;
	height: 48px;
	left: 50px;
	top: 149px;
`

const Nav = styled.div`
	position: absolute;
	width: 85px;
	height: 24px;
	left: 50px;
	top: 250px;
	color: #fff;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 75px;
`

export default DashbordLayout
