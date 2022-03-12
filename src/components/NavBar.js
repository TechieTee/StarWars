import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Index = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='#'>Back</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					></Nav>
					<Nav.Link href='#action1'>Home</Nav.Link>
					<Nav.Link href='#action2'>Link</Nav.Link>
					<Nav.Link href='#' disabled>
						Link
					</Nav.Link>
					ok
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
export default Index
