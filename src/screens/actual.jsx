import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/navbar";

const Actual = () => {
  return (
    <Container style={{ backgroundColor: "yellow" }} fluid>
      <Container style={{ backgroundColor: "orange" }} fluid>
        <Navbar></Navbar>
      </Container>
      <Container>Actual</Container>
    </Container>
  );
};

export default Actual;
