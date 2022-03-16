import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
	NotificationIcon,
	LineIcon,
	ProfileIcon,
	BreadCrumbIcon,
	Arrow,
} from '../Images/SvgIcons'

const Index = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='#'>
					<Link to={'/dashboard'} style={{ textDecoration: 'none', color: '#aaa' }}>
						<Arrow />
						Back
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					></Nav>
					<Nav.Link href='#action1'>
						<NotificationIcon />
					</Nav.Link>
					<Nav.Link href='#action2'>
						<LineIcon />
					</Nav.Link>
					<Nav.Link href='#' disabled>
						<ProfileIcon />
					</Nav.Link>
					<Nav.Link href='#' disabled>
						Fatima Bello
					</Nav.Link>
					<Nav.Link href='#' disabled>
						<BreadCrumbIcon />
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
export default Index
