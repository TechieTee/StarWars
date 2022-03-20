import React from 'react'
import styled from 'styled-components'
import Logo from '../Images/Logo.png'
import { GridSmall, LogoutIcon, NavItemIcon } from '../Images/SvgIcons'
import { useLogin } from '../shared/hooks/useLogin'
import NavLink from './NavLink'

const navItems = [
	{ name: 'Starships', fill: '#A9C1FF', path: '/starships', sub: 'starships' },
	{ name: 'People', fill: '#FFA9EC', path: '/people', sub: 'people' },
	{ name: 'Species', fill: '#FDFFA9', path: '/species', sub: 'species' },
]

const SidebarItem = () => {
	const { logOut } = useLogin()
	return (
		<div className='px-3 h-100 position-relative'>
			<Img>
				<img src={Logo} alt='logo' />
			</Img>
			<div>
				<Action>
					<NavLink
						sub='films'
						to={'/'}
						icon={() => <GridSmall />}
						text={'OverView'}
					/>
				</Action>
				<Nav className='mt-5'>
					{navItems.map((item, index) => (
						<NavLink
							key={index}
							sub={item.sub}
							icon={() => (
								<NavItemIcon fill={item.fill} width='17px' height='16px' />
							)}
							text={item.name}
							to={item.path}
						/>
					))}
				</Nav>
			</div>
			<LogOut>
				<button onClick={logOut}>
					<span className='me-3'>
						<LogoutIcon />
					</span>
					<ItemName>Log Out</ItemName>
				</button>
			</LogOut>
		</div>
	)
}
const ItemName = styled.span`
	color: #fff;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 75px;
`
const Img = styled.div`
	width: 130px;
	margin-inline: auto;
	margin-top: 35px;
	img {
		width: 100%;
	}
`

const Action = styled.div`
	margin-top: 50px;
`

const Nav = styled.div`
	color: #fff;
	font-family: 'Inter';
	font-weight: 600;
	font-size: 16px;
`

const LogOut = styled.div`
	position: absolute;
	bottom: 4rem;
	button {
		background: none;
		padding: 0;
		border: none;
		outline: none;
		height: 48px;
		width: 100%;
		padding: 0 2rem;
	}
`

export default SidebarItem
