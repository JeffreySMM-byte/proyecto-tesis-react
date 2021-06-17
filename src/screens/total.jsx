import React from "react";
import { Container } from "react-bootstrap";
import Coffee from "../components/assets/coffee-beans.jpg";
import Card from "../components/Card/card";
import Totaltime from "../components/assets/Total time.png";
import Complete from "../components/assets/Complete.png";

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
      <div className="container mt-5 d-flex justify-content-center h-100 height:100vh">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6 ">
                <Card
           
           
                  Image={Totaltime}
          
          
                    Title={"Tiempo Total de Uso "}
          
          
                    BodyText={"bd txt"}
         
         
            />
          </div>
          <div className="col-xl-6 col-md-6 ">
                <Card
           
           
                  Image={Complete}
          
          
                    Title={"Ciclos Totales Completados"}
          
          
                    BodyText={"bd txt"}
         
         
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Total;
