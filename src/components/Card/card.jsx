import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

class Card extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "red", height: "100%" }} fluid h-100>
        <Container style={{ padding: 10 }}>
          <Row>
            <Col sm={12} lg={12} className="card">
              {this.props.textVal}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Card;
