import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Contact from "./Contact";
import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const contacts = [
    {
      title: "Universidad de Campiñas' Lab",
      address: "901 Schapiro CEPSR, 530 West 120th Street · New York, NY 10027",
    },
    {
      title: "Assistant",
      address:
        "1001 Schapiro CEPSR, 530 West 120th Street · New York, NY 10027",
    },
    {
      title: "Professor",
      address:
        "1006 Schapiro CEPSR, 530 West 120th Street · New York, NY 10027",
    },
  ];

  const options = [
    { name: "Research", href: "/research" },
    { name: "Videos", href: "/videos" },
    { name: "People", href: "/people" },
    { name: "Publications", href: "/publications" },
    { name: "Prospective Students", href: "/prospective-students" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <React.Fragment>
      <Container fluid className="subfooter">
        <Container className="py-3">
          <Row>
            <Col md={9}>
              <Row>
                <Col>
                  {contacts.map((contact, idx) => (
                    <Contact
                      type="marker"
                      key={"contact" + idx}
                      title={contact.title}
                      address={contact.address}
                    />
                  ))}
                </Col>
                <Col className="text-center">
                  <Contact type="phone" title={"Phone"} link={"212-853-0953"} />
                  <Contact
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
