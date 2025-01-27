import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  Logo2 from '../../assets/images/Logo2.png'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="shadow">
 <div className='container'>
      <Navbar expand="lg" className="">
        <Navbar.Brand href="#">
          <img src={Logo2} alt="" width={60}/>
          ShopWid-Me
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{  }}
            navbarScroll
          >
            <Nav.Link href="#mens">Mens</Nav.Link>
            <Nav.Link href="#womens">Womens</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>

           <div className='nav-right d-flex'>
            <a href="" className='ms-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path></svg>
            </a>
            <Link to="/cart" className='ms-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z">
              </path></svg>
            </Link>



           </div>


            {/* 
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          */}
          </Nav>
           {/*}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>*/}
        </Navbar.Collapse>
        
      </Navbar>
    </div>
   </header>
  )
}

export default Header
