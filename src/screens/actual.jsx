import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Coffee from "../components/assets/coffee-beans.jpg";
import Card from "../components/Card/card";
import Battery from "../components/assets/battery.png"
import Clock from "../components/assets/clock.png"
import Check from "../components/assets/check.png"
import Temperature from "../components/assets/temperature.png"
import Robot from "../components/assets/robot.png"
import Speed from "../components/assets/speed.png"

const Actual = () => {
  useEffect(() => {
    console.log("AAA")
  });
  return (
    <Container
      style={{
        backgroundImage: `url(${Coffee})`,
        height: "100vh",
        backgroundSize: "cover",
        justifyItems: "center",
      }}
      fluid
    >
      <Container fluid style={{ padding: 0 }}>
        <h1 style={{ color: "white" }}>Datos Actuales</h1>
      </Container>
      <div className="container mt-5 d-flex justify-content-center align-items-center h-100 height:100vh">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6 ">
            <Card Image={Battery} Title={"Nivel de Bateria"} BodyText={"bd txt"}   />
            <Card Image={Clock} Title={"Tiempo de uso"}    />
            <Card Image={Check} Title={"Ciclos completados"}    />
          </div>
          <div className="col-xl-6 col-md-6 ">
          <Card Image={Temperature} Title={"Temperatura del café"}    />
            <div className="row justify-content-center ">
            <div className="col-xl-6 col-md-6 "></div>
            <Card Image={Robot} Title={"Modo de Uso"}    />
            <div className="col-xl-6 col-md-6 "></div>
            <Card Image={Speed} Title={"Velocidad de uso"}    />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Actual;
