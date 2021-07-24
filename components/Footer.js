import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactFooter from "./ContactFooter";
import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { contacts, options } from "../info/footerInfo";

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="subfooter">
        <Container className="py-3">
          <Row>
            <Col md={9}>
              <Row>
                <Col md={7}>
                  {contacts.map((contact, idx) => (
                    <ContactFooter
                      type="marker"
                      key={"contact" + idx}
                      title={contact.title}
                      address={contact.address}
                    />
                  ))}
                </Col>
                <Col md={5} className="text-center">
                  <ContactFooter
                    type="phone"
                    title={"Phone"}
                    link={"212-853-0953"}
                  />
                  <ContactFooter
                    type="mail"
                    title={"Contact Us"}
                    link={"ml3745@unicamp.edu.br"}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={2} className="pt-3 text-center">
              {options.map((option) => {
                return (
                  <Link passHref href={option.href} key={option.name}>
                    <Row as="a" className="footerOption">
                      {option.name}
                    </Row>
                  </Link>
                );
              })}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs="auto">
              <div>Follow us</div>
              <FaTwitter
                color="#0071b3"
                style={{ cursor: "pointer", transform: "scale(1.5)" }}
                className="mr-2 ml-2 mt-2"
              />
              <FaYoutube
                color="#0071b3"
                style={{ cursor: "pointer", transform: "scale(1.5)" }}
                className="ml-2 mt-2"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="footer"></div>
    </React.Fragment>
  );
};

export default Footer;
