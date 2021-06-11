import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Coffee from "../assets/coffee-beans.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${Coffee}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 1000px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const JumbotronM = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container>
            <h1>Mantenimiento</h1>
          </Container>
        </div>
      </Jumbo>
    </Styles>
  );
};

export default JumbotronM;
