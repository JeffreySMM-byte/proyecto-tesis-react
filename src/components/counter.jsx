import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Card from "./Card/card";




class Counter extends Component {
  state = {
    count: 0,
    tags:['tag1', 'tag2', 'tag3']
  };

  
  
  render() {
    return (
      <Container style={{ backgroundColor: "red", height: "100%" }} fluid h-100>
        <Container style={{ padding: 10 }}>
          {
            this.state.tags.map((titles) => 
              <Card textVal = {titles}></Card>
            )
          }
          <Button>ALAVERGA</Button>
        </Container>
      </Container>
    );
  }
  
}

export default Counter;
