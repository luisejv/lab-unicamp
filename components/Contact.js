import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = ({ charge, name, email, phone, office }) => {
  return (
    <Row className="mb-md-5">
      <Col>
        <Row className="my-1">
          <h4 className="charge" style={{ color: '#00294a' }}>
            {charge}
          </h4>
        </Row>
        <Row className="my-1">
          <strong className="name">{name}</strong>
        </Row>
        {email && (
          <Row className="my-1">
            <strong className="name mr-1">E-mail:</strong>{' '}
            <span className="name">{email}</span>
          </Row>
        )}
        {phone && (
          <Row className="my-1">
            <strong className="name mr-1">Phone:</strong>{' '}
            <span className="name">{phone}</span>
          </Row>
        )}
        <Row className="my-1">
          <strong className="name mr-1">Office:</strong>{' '}
          <span className="name">{office}</span>
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
