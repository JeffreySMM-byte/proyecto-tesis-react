import React from "react";
import { Container } from "react-bootstrap";
import Coffee from "../components/assets/coffee-beans.jpg";

const Total = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${Coffee})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      fluid
    >
      <Container fluid style={{ padding: 0 }}>
        <h1 style={{ color: "white" }}>Datos Totales</h1>
      </Container>
    </Container>
  );
};

export default Total;
