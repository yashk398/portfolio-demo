import React from 'react';
import './App.css';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <Jumbotron id="hero">
          <Container>
               <Row>
                    <Col md={3}>
                         <Row>
                              <img className="rounded-image" src="https://cdn.icon-icons.com/icons2/17/PNG/256/microsoft_xbox_xbox360_2158.png" alt="error"/>
                         </Row>
                         <Row>
                              <h5 style={{marginBottom: '1em'}}>NoobRacer</h5>
                         </Row>
                         <Row>
                              Game#1
                         </Row>
                         <Row>
                              Game#2
                         </Row>
                    </Col>
                    <Col md={7}>
                         <Card  id="col-hero">
                              <Row>
                                   <Col>
                                        <h3>This game</h3>
                                   </Col>
                              </Row>
                         </Card>
                    </Col>
                    <Col md={2}>
                         <Row>
                              <h5>Tags</h5>
                         </Row>
                    </Col>
               </Row>
          </Container>
     </Jumbotron>
    </div>
  );
}

export default App;
