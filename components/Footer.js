import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="subfooter">
        <Row>
          <Col>{/* <Direction></Direction> */}</Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <div className="footer"></div>
    </React.Fragment>
  );
};

export default Footer;
