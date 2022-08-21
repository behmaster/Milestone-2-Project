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
              <Nav.Link href='http://localhost:3005/category/Mens'>
                Men's
              </Nav.Link>
              <Nav.Link href='http://localhost:3005/category/Womens'>
                Women's
              </Nav.Link>
              <Nav.Link href='http://localhost:3005/category/Childrens'>
                Children's
              </Nav.Link>
              <Nav.Link href='/sunglasses'>Sunglasses</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              {/* importing icons from font awesome, import was saved in index.html */}
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i>Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
