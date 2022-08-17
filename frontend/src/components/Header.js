import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>RAJH Frames</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/mens'>Men's</Nav.Link>
              <Nav.Link href='/womens'>Women's</Nav.Link>
              <Nav.Link href='/childrens'>Children's</Nav.Link>
              <Nav.Link href='/sunglasses'>Sunglasses</Nav.Link>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/login'>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
