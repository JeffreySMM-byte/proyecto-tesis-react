import React from "react";
import { Container } from "react-bootstrap";
import Coffee from "../components/assets/coffee-beans.jpg";
import Card from "../components/Card/card";

const Mantenimiento = () => {
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
        <h1 style={{ color: "white" }}>Mantenimiento</h1>
      </Container>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6 bg-danger">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="col-xl-6 col-md-6 bg-warning">
            <Card />
            <div className="row justify-content-center ">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mantenimiento;
