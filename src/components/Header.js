import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-success nav-expand">
      <Container>
        <Navbar.Brand><h1>TD$J</h1></Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link to="/trainees" className="nav-link">TRAINEES</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addtrainee" className="nav-link">ADD</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">LOGIN</Link>
           
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link">SIGN UP</Link>
           
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
