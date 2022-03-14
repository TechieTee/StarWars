// import React from 'react'
// import styled from 'styled-components'
// import Logo from '../Images/Logo.png'
// import Button from '@material-ui/core/Button'
// import { GridSmall, NavItemIcon } from '../Images/SvgIcons'

// export const NavItem = ({ itemName, fill, path }) => {
// 	return (
// 		<Button startIcon={<NavItemIcon fill={fill} width='17px' height='16px' />}>
// 			{/* <Link to={path}> */}
// 			<ItemName>{itemName}</ItemName>
// 			{/* </Link> */}
// 		</Button>
// 	)
// }

// const Index = ({ index }) => {
// 	const navItems = [
// 		{ name: 'Startships', fill: '#A9C1FF', path: '/' },
// 		{ name: 'People', fill: '#FFA9EC', path: '/foo' },
// 		{ name: 'Species', fill: '#FDFFA9', path: '/about' },
// 	]
// 	return (
// 		<>
// 			{index ? (
// 				<ImgLogo>
// 					<img src={Logo} alt='logo' />
// 				</ImgLogo>
// 			) : (
// 				<>
// 					<Img>
// 						<img src={Logo} alt='logo' />
// 					</Img>
// 					<Action>
// 						<Button
// 							variant='contained'
// 							startIcon={<GridSmall />}
// 							color={'primary'}
// 						>
// 							OverView
// 						</Button>
// 					</Action>
// 					<Nav>
// 						{navItems.map((item) => (
// 							<NavItem
// 								itemName={item.name}
// 								key={item}
// 								fill={item.fill}
// 								path={item.path}
// 							/>
// 						))}
// 					</Nav>
// 					{/* <Routes>
// 						<Route path='/' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
// 						<Route path='/foo' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
// 						<Route path='/about' element={'kakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} />
// 					</Routes> */}
// 				</>
// 			)}
// 		</>
// 	)
// }
// export default Index
// const ImgLogo = styled.div`
// 	width: 245px;
// 	margin: auto;
// 	margin-top: 335px;

// 	left: 23px;

// 	top: 330px;

// 	img {
// 		height: 100%;
// 		width: 100%;
// 	}
// `

// const Img = styled.div`
// 	width: 130px;
// 	margin: auto;
// 	margin-top: 35px;

// 	img {
// 		height: 100%;
// 		width: 100%;
// 	}
// `

// const Action = styled.div`
// 	position: absolute;
// 	width: 232px;
// 	height: 48px;
// 	left: 50px;
// 	top: 149px;
// `

// const Nav = styled.div`
// 	position: absolute;
// 	width: 85px;
// 	height: 24px;
// 	left: 50px;
// 	top: 250px;
// 	color: #fff;

// 	font-family: 'Inter';
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 16px;
// 	line-height: 75px;
// `
// const ItemName = styled.span`
// 	position: absolute;
// 	width: 85px;
// 	height: 24px;
// 	left: 50px;
// 	top: -22px;
// 	color: #fff;

// 	font-family: 'Inter';
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 16px;
// 	line-height: 75px;
// `
