import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GridSmall, NavItemIcon } from '../Images/SvgIcons'

const NavItem = ({ itemName, fill, path }) => {
	return (
		<Button startIcon={<NavItemIcon fill={fill} width='17px' height='16px' />}>
			<Link to={path}>
				<ItemName>{itemName}</ItemName>
			</Link>
		</Button>
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

export default NavItem
