import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = ({ charge, name, email, phone, office }) => {
  return (
    <Row className="mb-5">
      <Col>
        <Row className="my-1">
          <h4 style={{ color: "#00294a" }}>{charge}</h4>
        </Row>
        <Row className="my-1">
          <strong>{name}</strong>
        </Row>
        {email && (
          <Row className="my-1">
            <strong className="mr-1">E-mail:</strong> <span>{email}</span>
          </Row>
        )}
        {phone && (
          <Row className="my-1">
            <strong className="mr-1">Phone:</strong> <span>{phone}</span>
          </Row>
        )}
        <Row className="my-1">
          <strong className="mr-1">Office:</strong> <span>{office}</span>
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
