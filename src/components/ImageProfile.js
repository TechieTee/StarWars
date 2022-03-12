import React from 'react'
import styled from 'styled-components'
import profileImg from '../Images/image6.png'

const Index = () => {
	return (
		<ImageProfile>
			<img src={profileImg} alt='profileImg' />
			<div>
				<h3>Cover</h3> <p>Director: Kingsley Omin</p>
				<p>Producer: Kingsley Omin</p>
				<p>Release Date: January 24, 2022.</p>
			</div>
		</ImageProfile>
	)
}
export default Index

const ImageProfile = styled.div`
	width: 750px;
	height: 530px;
	grid-gap: 0px;
	display: grid;
	grid-template-columns: 50% 50%;
	img {
		margin: auto;
		width: 100%;
		height: 100%;
	}

	div {
		margin: auto;
		width: 90%;
		height: 90%;

		h3 {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 48px;
			line-height: 90px;
			color: #000000;
		}
		p {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}
`
