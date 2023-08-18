import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import logo from "../assets/logo.png";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-2 text-warning">
          <img
            // src={logo}
            alt="NGO Management Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          NGO Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fs-5 fw-medium text-warning">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/registration"
              className="fs-5 fw-medium text-warning"
            >
              Sign Up
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/login"
              className="fs-5 fw-medium text-warning"
            >
              Sign In
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contactus"
              className="fs-5 fw-medium text-warning"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/user"
              className="fs-5 fw-medium text-warning"
            >
              Demo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
