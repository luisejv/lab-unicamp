import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../components/Contact";
import { contacts } from "../info/contactsInfo";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Contact Us</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <h1>Contact Us</h1>
        <Row className="my-5">
          <Col md={8}>
            <section
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                marginBottom: "60px",
              }}
            >
              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14709.989078432536!2d-47.066406!3d-22.8210849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2ac1445ada25c91!2sFaculdade%20de%20Engenharia%20El%C3%A9trica%20e%20de%20Computa%C3%A7%C3%A3o%20-%20Unicamp!5e0!3m2!1sen!2spe!4v1626923025418!5m2!1sen!2spe"
                }
                width={"800"}
                height={"500"}
                style={{ border: "0" }}
                allowFullScreen={""}
                loading={"lazy"}
              ></iframe>
            </section>
          </Col>
          <Col md={4} className="px-5">
            {contacts.map((contact, idx) => (
              <Contact
                key={"contact" + idx}
                charge={contact.charge}
                email={contact.email || ""}
                office={contact.office}
                phone={contact.phone || ""}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
