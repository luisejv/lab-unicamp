import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { Info } from '../info/publicationInfo';
import PublicationItem from '../components/PublicationItem';
import Styles2 from '../styles/Research.module.css';
const Publications = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Publications</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={Styles2.title1 + ' py-md-5'}>
        <h1>Publications</h1>
        <Container style={{ marginBottom: '60px' }}>
          <Row>
            <Col md={8}>
              {Info.map((publi, idx) => (
                <PublicationItem
                  key={idx}
                  title={publi.title}
                  cite={publi.cite}
                  link={publi.link}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Publications;
