import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Importa Link da react-router-dom

function MyNavbar() {
  return (
    <Navbar expand='lg' className='bg-dark text-light' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'
            width='100'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/tv-shows'>
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to='/movies'>
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to='/recently-added'>
              Recently Added
            </Nav.Link>
            <Nav.Link as={Link} to='/my-list'>
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className='justify-content-end'>
          <Dropdown>
            <Dropdown.Toggle
              id='dropdown-basic'
              className='text-light bg-dark border-dark p-0'
            >
              <img
                src='https://tiermaker.com/images/templates/fnaf-hw-characters-956499/9564991618673258.PNG'
                width='30'
                height='30'
                className='rounded-circle'
                alt='User Avatar'
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-end'>
              <Dropdown.Item as={Link} to='/user-page'>
                Edit profile
              </Dropdown.Item>{" "}
              {/* Cambiato href a to */}
              <Dropdown.Item href='#'>Settings</Dropdown.Item>
              <Dropdown.Item href='#'>Switch User</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
