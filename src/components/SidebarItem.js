import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Images/Logo.png'
import { GridSmall, CancelIcon, NavItemIcon } from '../Images/SvgIcons'
import { useLogin } from '../shared/hooks/useLogin'

const navItems = [
	{ name: 'Starships', fill: '#A9C1FF', path: '/starships' },
	{ name: 'People', fill: '#FFA9EC', path: '/people' },
	{ name: 'Species', fill: '#FDFFA9', path: '/species' },
]

const SidebarItem = () => {
	const { logOut } = useLogin()
	return (
		<div className='px-5 h-100 position-relative'>
			<Img>
				<img src={Logo} alt='logo' />
			</Img>
			<div>
				<Action>
					<Link to={'/'} className='text-decoration-none'>
						<span className='me-3'>
							<GridSmall />
						</span>
						<ItemName>OverView</ItemName>
					</Link>
				</Action>
				<Nav className='mt-5'>
					{navItems.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							className='d-block h-auto p-0 text-decoration-none'
						>
							<span className='me-3'>
								<NavItemIcon fill={item.fill} width='17px' height='16px' />
							</span>
							<ItemName>{item.name}</ItemName>
						</Link>
					))}
				</Nav>
			</div>
			<LogOut>
				<button onClick={logOut}>
					<span className='me-3'>
						<CancelIcon />
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
	margin-top: 100px;
`

const Nav = styled.div`
	color: #fff;
	font-family: 'Inter';
	font-weight: 600;
	font-size: 16px;
`

const LogOut = styled.div`
	position: absolute;
	bottom: 2rem;
	button {
		background: none;
		padding: 0;
		border: none;
		outline: none;
	}
`

export default SidebarItem
