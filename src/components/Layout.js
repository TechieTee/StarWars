import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import NavItems from './NavItems'

const Index = ({ index, children }) => {
	performance.mark('start')
	const [width, setWidth] = useState(270)
	const [drawer, setDrawer] = useState(false)
	const [login, setLogin] = useState(true)
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

	return <Container>{children}</Container>
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
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	height: 100vh;
	width: calc(100% - 270px);
	margin-left: 270px;
	overflow: auto;
`
