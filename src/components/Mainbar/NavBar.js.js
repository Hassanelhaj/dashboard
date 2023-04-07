import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import calnder from '../../imgs/calnder.png';
import logo from '../../imgs/logo.png';

const NavBar = () => {
  return (


     <div className='site-nav '>
        <Navbar  expand="lg">
         
          {/* <Col> */}
            <Navbar.Brand >Control Panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '180px' }}
                navbarScroll
              >
                <Nav.Link href="#"><img src={calnder} className='dash-logo'/>
                
                </Nav.Link>
                {/* </Col> */}
              
             <Col>
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='sidebar-con'>Search</Button>
              </Form>
              </Col>
              <Col>
              <Nav.Link href="#" >
              <div className='flex-row'>
                  <h4> Hassan</h4>
                  <img src ={logo} className='dash-logo'/>
               </div> 
                </Nav.Link>
              </Col>
              </Nav>
             
            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        </div>
      );
    
    
  
  
  }
      export default NavBar
