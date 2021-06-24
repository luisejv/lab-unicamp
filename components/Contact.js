import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = (props) => {
  return (
    <Row className="my-3">
      <Col xs="auto" className="pt-1">
        {props.type === "marker" && (
          <FaMapMarkerAlt style={{ transform: "scale(1.5)" }} color="#555555" />
        )}
        {props.type === "phone" && (
          <FaPhoneAlt style={{ transform: "scale(1.5)" }} color="#555555" />
        )}
        {props.type === "mail" && (
          <GrMail style={{ transform: "scale(1.5)" }} color="#555555" />
        )}
      </Col>
      <Col xs>
        <Row className="contactTitle">{props.title}</Row>
        {props.address && <Row className="contactContent">{props.address}</Row>}
        {props.link && (
          <Row as="a" className="contactLink">
            {props.link}
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default Contact;
