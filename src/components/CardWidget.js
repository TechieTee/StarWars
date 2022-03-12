import React from 'react'
import styled from 'styled-components'

const Index = () => {
	return (
		<Card>
			<Title>
				<H3>Films</H3> <span></span>{' '}
			</Title>
			<Details>
				<H3>200</H3>
				<p>20 More than than yesterday</p>
			</Details>
		</Card>
	)
}
export default Index

const Card = styled.div`
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 208px;
	height: 130px;
	padding: 15px 20px;
`
const Title = styled.div`
	display: grid;
	grid-template-columns: 80% 20%;
	margin-bottom: 23px;

	span {
		margin: auto;
		width: 27px;
		height: 26px;
		background: #a9ffe0;
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
		margin-top: -14px;
	}
`
const H3 = styled.h3`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #434854;
`
