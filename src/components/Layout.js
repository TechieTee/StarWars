import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

const Index = ({ home, children }) => {
	performance.mark('start')
	const [width, setWidth] = useState(270)
	const [drawer, setDrawer] = useState(false)
	const sideBarRef = useRef()

	const handleClick = () => {
		console.log(sideBarRef)
		setDrawer((prevDrawer) => !prevDrawer)
		console.log('click occured')
	}

	performance.mark('end')
	performance.measure('performance for layout', 'start', 'end')
	const measurement = performance.getEntriesByType('measure')
	console.log(measurement)

	useEffect(() => {
		if (drawer === true) {
			setWidth((currWidth) => 70)
		} else {
			setWidth((currWidth) => 270)
		}
	}, [drawer])

	return (
		<Container>
			{/* <Sidebar style={{ width: `${width}px` }}> */}
			<Sidebar>
				<SideBar index={home === true ? <div>l</div> : <div>bbb</div>} />
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
				{children}
				{/* <InAppMenu /> */}
			</Main>
		</Container>
	)
}
export default Index

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
	transition: all 0.3s ease;
	height: 100vh;
	width: calc(100% - 270px);
	margin-left: 135px;
	overflow: auto;
	${'' /* background-color: blue; */}
`
