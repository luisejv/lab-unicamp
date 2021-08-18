import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  return (
    <Container className="pt-md-3">
      {/* <Row>
        <Col md={5}>Universidad de Campinas</Col>
      </Row> */}
      <Row>
        <Link href="/" passHref={true}>
          <Col className={'uniName'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/logo.png" alt="LEMAC" />
          </Col>
        </Link>
      </Row>
      <NavbarOptions />
    </Container>
  );
};

export default Navbar;
