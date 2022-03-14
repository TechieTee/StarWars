import React from 'react'
import styled from 'styled-components'
import { NavItemIcon } from '../Images/SvgIcons'

const Index = ({ cardTitle, fill, number, desc }) => {
	return (
		<Card>
			<Title>
				<H3>{cardTitle}</H3>{' '}
				<span>
					<NavItemIcon fill={fill} width='17px' height='16px' />
				</span>{' '}
			</Title>
			<Details>
				<H3>{number}</H3>
				<p>{desc}</p>
			</Details>
		</Card>
	)
}
export default Index

const Card = styled.div`
	background: #ffffff;
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	border-radius: 10px;
	width: 240px;
	height: 155px;
	padding: 15px 20px;
`
const Title = styled.div`
	display: grid;
	grid-template-columns: 80% 20%;
	margin-bottom: 40px;

	span {
		margin: auto;
		width: 27px;
		height: 26px;

		border-radius: 5px;
	}
`

const Details = styled.div`
	p {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-size: 11px;
		color: #00992b;
		margin-top: -5px;
	}
`
const H3 = styled.h3`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #434854;
`
