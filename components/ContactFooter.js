import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const ContactFooter = (props) => {
  return (
    <Row className="mb-1 mt-1 mb-md-5 mt-md-4">
      <Col xs="auto" className="pt-1">
        {props.type === 'marker' && (
          <FaMapMarkerAlt
            className="icon"
            style={{ transform: 'scale(1.5)' }}
            color="#555555"
          />
        )}
        {props.type === 'phone' && (
          <FaPhoneAlt
            className="icon"
            style={{ transform: 'scale(1.5)' }}
            color="#555555"
          />
        )}
        {props.type === 'mail' && (
          <GrMail
            className="icon"
            style={{ transform: 'scale(1.5)' }}
            color="#555555"
          />
        )}
      </Col>
      <Col xs>
        <Row className="contactTitle">{props.title}</Row>
        {props.address &&
          props.address.split('\n').map((line, idx) => (
            <Row key={'line' + idx} className="contactContent">
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
