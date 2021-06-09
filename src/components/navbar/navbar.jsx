import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="#home">
        React-Bootstrap
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#actuales">
            Datos Actuales
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#totales">
            Datos totales
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#mantenimiento">
            Mantenimiento
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
