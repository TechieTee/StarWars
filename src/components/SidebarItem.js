import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Images/Logo.png'
import { GridSmall, CancelIcon, NavItemIcon } from '../Images/SvgIcons'

const SidebarItem = () => {
	const navItems = [
		{ name: 'Overview', fill: '<GridSmall/>', path: '/starships' },
		{ name: 'Starships', fill: '#A9C1FF', path: '/starships' },
		{ name: 'People', fill: '#FFA9EC', path: '/people' },
		{ name: 'Species', fill: '#FDFFA9', path: '/species' },
	]
	return (
		<>
			<Img>
				<img src={Logo} alt='logo' />
			</Img>
			<Nav>
				{navItems.map((item) => (
					<Button
						startIcon={
							<NavItemIcon fill={item.fill} width='17px' height='16px' />
						}
						key={item}
					>
						<Link to={item.path}>
							<ItemName>{item.name}</ItemName>
						</Link>
					</Button>
				))}
			</Nav>

			<LogOut>
				<Button startIcon={<CancelIcon />}>
					<ItemName>Log Out</ItemName>
				</Button>
			</LogOut>
		</>
	)
}
const ItemName = styled.span`
	position: absolute;
	width: 85px;
	height: 24px;
	left: 50px;
	top: -22px;
	color: #fff;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 75px;
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
const LogOut = styled.div`
	position: absolute;
	width: 232px;
	height: 48px;
	left: 50px;
	top: 800px;
`

export const ImgLogo = styled.div`
	width: 245px;
	margin: auto;
	margin-top: 335px;

	left: 23px;

	top: 330px;

	img {
		height: 100%;
		width: 100%;
	}
`

export default SidebarItem
