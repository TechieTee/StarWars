import React from 'react'
import NavBar from './NavBar'
import Card from './CardWidget'
import ImageProfile from './ImageProfile'
import Form from '../Interface/LoginPage'
import Table from './Table'

const Index = () => {
	// const CardWidgetData = [
	// 	{
	// 		img: <TimelineIcon />,
	// 		label: 'TIMELINE',
	// 	},
	// 	{
	// 		img: <GeoMapIcon />,
	// 		label: 'GEOMAP',
	// 	},
	// 	{
	// 		img: <TableIcon />,
	// 		label: 'TABLE',
	// 	},
	// 	{
	// 		img: <PieChartIcon />,
	// 		label: 'PIE',
	// 	},
	// ]
	return (
		<>
			{' '}
			<NavBar />
			<Card />
			{/* <ImageProfile /> */}
			<Table />
		</>
	)
}
export default Index
