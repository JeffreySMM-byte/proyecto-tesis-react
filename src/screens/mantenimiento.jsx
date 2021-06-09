import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/navbar";

const Mantenimiento = () => {
  return (
    <Container style={{ backgroundColor: "purple" }} fluid>
      <Container style={{ backgroundColor: "black" }} fluid>
        <Navbar></Navbar>
      </Container>
      <Container>Mantenimiento</Container>
    </Container>
  );
};

export default Mantenimiento;
