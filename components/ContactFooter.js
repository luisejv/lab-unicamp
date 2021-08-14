import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const ContactFooter = (props) => {
  return (
    <Row className="mb-5 mt-4">
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
        {props.address &&
          props.address.split("\n").map((line, idx) => (
            <Row key={"line" + idx} className="contactContent">
              {line}
            </Row>
          ))}
        {props.link && (
          <Row as="a" className="contactLink">
            {props.link}
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default ContactFooter;
