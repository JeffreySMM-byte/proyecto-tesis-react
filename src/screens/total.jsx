import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/navbar";

const Total = () => {
  return (
    <Container style={{ backgroundColor: "green" }} fluid>
      <Container style={{ backgroundColor: "blue" }} fluid>
        <Navbar></Navbar>
      </Container>
      <Container>Total</Container>
    </Container>
  );
};

export default Total;
