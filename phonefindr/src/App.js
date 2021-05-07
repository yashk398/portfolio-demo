import "./styles.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import data from "./phones.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import favIcon from "./Asset-4.png";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  Card
} from "react-bootstrap";

const { useState } = React;

export default function App() {
  const [phonesFound, setPhonesFound] = useState([]);
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(180000);
  const [memory, setMemory] = useState(1);
  const [storage, setStorage] = useState(1);
  const [battery, setBattery] = useState(500);
  const [darkMode, setDarkMode] = useState(false);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  function lookUpInDB(e) {
    e.preventDefault();

    console.log(
      "Check DB function to be written yet! Config : " +
        memory +
        " " +
        Math.pow(2, storage) +
        " " +
        battery +
        " " +
        data +
        " " +
        priceHigh +
        " " +
        priceLow
    );
    let arr = [];
    let i;
    for (i = 0; i < data.length; i++) {
      if (
        data[i].battery.capacity >= battery &&
        data[i].memory >= memory &&
        data[i].storage > storage &&
        priceHigh >= data[i].price &&
        data[i].price >= priceLow
      ) {
        arr.push(data[i]);
      }
    }
    if(arr.length!==0){
    setPhonesFound(arr);
    console.log(phonesFound);
    }
    else{
      setPhonesFound([]);
    }
  }

  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar variant="dark" id="boot-nav">
        <Navbar.Brand href="/" style={{ fontWeight: 700 }}>
          <img
            src={favIcon}
            width="30"
            height="30"
            style={{ marginRight: "10px" }}
            className="d-inline-block align-top"
            alt="phoneFindr"
          />
          phoneFindr
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link id="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <FontAwesomeIcon id="switch" size="2x" icon={faSun} />
            ) : (
              <FontAwesomeIcon id="switch" size="2x" icon={faMoon} />
            )}
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* REAL CONTENT BOIZ */}
      <Switch>
        <Route exact path="/">
          <Container id="boot-container">
            <Jumbotron id="boot-jumbotron">
              <div className="welcome">
                <h3>Welcome to phoneFindr</h3>
                <div className="text-muted">
                  We will help you select your next smartphone.
                </div>
              </div>
              <hr></hr>
              <Form id={darkMode ? "form-dark" : "form"}>
                <h5>Tell us what you need in your next phone</h5>
                <Row>
                  <Col>
                    <h5>Select your budget</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group style={{ opacity: !min && !max ? 1 : 0.5 }}>
                      <Form.Check
                        type="radio"
                        label="up to 10000"
                        value="0"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="10000-20000"
                        value="10000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="20000-30000"
                        value="20000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="30000-40000"
                        value="30000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="40000-50000"
                        value="40000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="50000-60000"
                        value="50000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 10000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="60000 or more"
                        value="60000"
                        onClick={(event) => {
                          setPriceLow(parseInt(event.target.value, 10));
                          setPriceHigh(
                            parseInt(event.target.value, 10) + 100000
                          );
                          setMin("");
                          setMax("");
                        }}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                    </Form.Group>
                    <hr></hr>
                  </Col>
                </Row>
                <Row>
                  <Col>Define Custom Range</Col>
                </Row>
                <Row  id="boot-row-width" style={{ marginTop: "10px" }}>
                  <Col style={{ textAlign: "left" }}>
                    <Form.Group controlId="formHorizontalPrice">
                      <Form.Label>Min Limit</Form.Label>
                      <Form.Control
                        type="number"
                        value={min}
                        placeholder="minimum"
                        onChange={(event) => {
                          setPriceLow(event.target.value);
                          if (
                            event.target.value !== null ||
                            event.target.value !== ""
                          ) {
                            setMin(event.target.value);
                          } else {
                            setMin(null);
                          }
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col style={{ textAlign: "left" }}>
                    <Form.Group controlId="formHorizontalPrice">
                      <Form.Label>Max Limit</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="maximum"
                        value={max}
                        onChange={(event) => {
                          setPriceHigh(event.target.value);
                          if (
                            event.target.value !== null ||
                            event.target.value !== ""
                          ) {
                            setMax(event.target.value);
                          } else {
                            setMax(null);
                          }
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br></br>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Memory | RAM</Form.Label>
                  <Form.Control
                    value={memory ? memory : 0}
                    type="range"
                    min="0"
                    max="18"
                    onChange={(event) => {
                      setMemory(event.target.value);
                      lookUpInDB(event);
                    }}
                  />
                  <span>
                    {memory
                      ? memory >= 1
                        ? memory + " GB or more"
                        : "<1 GB"
                      : "<1 GB"}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Internal Storage</Form.Label>
                  <Form.Control
                    value={storage ? storage : 1}
                    type="range"
                    min="1"
                    max="10"
                    variant="primary"
                    onChange={(event) => {
                      setStorage(event.target.value);
                      lookUpInDB(event);
                    }}
                  />
                  <span>
                    {storage
                      ? storage >= 2
                        ? Math.pow(2, storage) + " GB or more"
                        : "<4GB"
                      : "<4GB"}{" "}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Battery</Form.Label>
                  <Form.Control
                    value={battery ? battery : 0}
                    type="range"
                    min="0"
                    max="7000"
                    step="500"
                    variant="primary"
                    onChange={(event) => {
                      setBattery(event.target.value);
                      lookUpInDB(event);
                    }}
                  />
                  <span>
                    {battery
                      ? battery >= 500
                        ? battery + " mAH or more"
                        : "<500mAH"
                      : "<500mAH"}{" "}
                  </span>
                </Form.Group>
                <Button
                  onClick={(e) => lookUpInDB(e)}
                  variant={darkMode ? "outline-light" : "outline-dark"}
                >
                  <FontAwesomeIcon
                    size="1x"
                    icon={faSearch}
                    style={{ marginRight: "10px" }}
                  />
                  Find phones
                </Button>
              </Form>
            </Jumbotron>
            <Jumbotron id="boot-jumbotron" style={{marginBottom: '0',}}>
              <div
                style={{ 
                  margin: "1em auto 5em auto",
                  display: phonesFound.length!==0?'flex':'none' 
                }}
              >
                <h5 style={{ margin: "auto" }}>Found some phones for you</h5>
                <Link to="/your-options" style={{ right: 10 }}>
                  Show All
                </Link>
              </div>
              {phonesFound.length!==0 ? (
                phonesFound.map(
                  (phone, index) =>
                    index < 5 && (
                      <Card
                        variant={darkMode ? "dark" : "light"}
                        bg={darkMode ? "dark" : "light"}
                      >
                        <Card.Title>{phone.model}</Card.Title>
                        <Card.Body>{phone.price}</Card.Body>
                      </Card>
                    )
                )
              ) : (
                <h5 className="text-muted">No phones listed</h5>
              )}
            </Jumbotron>
          </Container>
        </Route>
        <Route path="/your-options">
          <YourOptions phones={phonesFound} darkMode={darkMode}></YourOptions>
        </Route>
      </Switch>
    </div>
  );
}

function YourOptions(props) {
  const phonesFound = props.phones;
  return (
    <div>
      <Jumbotron id="boot-jumbotron" style={{ marginBottom: 0 }}>
        <div style={{ display: "flex", margin: "1em auto 5em auto", display: phonesFound.length!==0?'block':'none' }}>
          <h5 style={{ margin: "auto" }}>Found some phones for you</h5>
        </div>
        <Row>
          {phonesFound.length!==0 ? (
            phonesFound.map(
              (phone, index) =>
                index < 5 && (
                  <Col md={3}>
                    <Card
                      variant={props.darkMode ? "dark" : "light"}
                      bg={props.darkMode ? "dark" : "light"}
                    >
                      <Card.Title>{phone.model}</Card.Title>
                      <Card.Body>{phone.price}</Card.Body>
                    </Card>
                  </Col>
                )
            )
          ) : (
            <h5 className="text-muted">No phones listed</h5>
          )}
        </Row>
      </Jumbotron>
    </div>
  );
}
