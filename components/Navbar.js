import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import NavbarOptions from "./NavbarOptions";

const Navbar = () => {
  return (
    <Container className="pt-3">
      <Row>
        <Col md={5}>Universidad de Campiñas</Col>
      </Row>
      <Row>
        <Link href="/" passHref={true}>
          <Col className={"uniName"}>LEMAC</Col>
        </Link>
      </Row>
      <NavbarOptions />
    </Container>
  );
};

export default Navbar;
