import React from "react";
import { Container } from "react-bootstrap";
import Coffee from "../components/assets/coffee-beans.jpg";
import Card from "../components/Card/card";
import Dated from "../components/assets/Date.png"
import Calendar from "../components/assets/Calendar.png"

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
      <div className="container mt-5 d-flex justify-content-center h-100 height:100vh">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6 ">
          <Card Image={Dated} Title={"Fechas de Mantenimiento"} BodyText={"bd txt"}   />
          </div>
          <div className="col-xl-6 col-md-6 ">
          <Card Image={Calendar} Title={"Ultima fecha de uso"} BodyText={"bd txt"}   />
            <div className="row justify-content-center ">
            <Card Title={"Titulo"} BodyText={"bd txt"}   />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mantenimiento;
