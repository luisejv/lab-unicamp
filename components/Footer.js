import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactFooter from "./ContactFooter";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { contacts, options } from "../info/footerInfo";

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="subfooter">
        <Container className="py-3">
          <Row>
            <Col xs={9}>
              <Row>
                <Col sm={12} md={7}>
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
                    link={"+55 19 3521-3703"}
                  />
                  <ContactFooter
                    type="mail"
                    title={"Contact Us"}
                    link={"hugo@unicamp.br"}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={2} className="pt-3 text-left">
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
          <Row className="mt-2 aaa">
            <Col xs="auto">
              <div className="dis">Follow us</div>
              <FaTwitter
                color="#0071b3"
                style={{ cursor: "pointer", transform: "scale(1.5)" }}
                className="m-2"
              />
              <FaYoutube
                color="#0071b3"
                style={{ cursor: "pointer", transform: "scale(1.5)" }}
                className="m-2"
              />
              <a
                href={
                  "https://www.facebook.com/LEMAC-DECOM-FEEC-Unicamp-355407718423022"
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook
                  color="#0071b3"
                  style={{ cursor: "pointer", transform: "scale(1.5)" }}
                  className="m-2"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="footer py-3">
        <Container>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/unicamp.png" height="100" width="100" alt="Unicamp" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
