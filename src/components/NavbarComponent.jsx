import React from 'react'
import {Navbar, Container, Form, Button} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='d-flex justify-content-between'>
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='https://www.nicepng.com/png/full/102-1023343_collaboration-plan-nacional-del-buen-vivir-2017-al.png'
              width="100"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'#464F41', borderColor:'black'}} variant='dark'>Buscar</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
