import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand='lg' className='bg-dark text-light' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img
            src='../assets/netflix_logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#tvshows'>TV Shows</Nav.Link>
            <Nav.Link href='#movies' className='fw-bold'>
              Movies
            </Nav.Link>
            <Nav.Link href='#recently-added'>Recently Added</Nav.Link>
            <Nav.Link href='#my-list'>My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className='justify-content-end'>
          <Dropdown>
            <Dropdown.Toggle
              id='dropdown-basic'
              className='text-light bg-dark border-dark'
            >
              User
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-end'>
              <Dropdown.Item href='#action-1'>Edit profile</Dropdown.Item>
              <Dropdown.Item href='#action-2'>Settings</Dropdown.Item>
              <Dropdown.Item href='#action-3'>Switch User</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
