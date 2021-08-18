import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Styles from '../styles/Research.module.css';
const ProspectiveStudents = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Prospective Students</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={Styles.title1 + ' py-md-5'}>
        <h1>Prospective Students</h1>
        <Row>
          <Col>
            <p className="ads  mt-5 text-justify">
              We host undergraduate and graduate students, as well as
              postdoctoral researchers, for the realization of projects related
              to our research interests. The researchers can obtain funding for
              their activities through research initiative programs held by
              National Council for Scientific and Technological Development
              (CNPq), Coordination for the Improvement of Higher Education
              Personnel (CAPES), and São Paulo Research Foundation (FAPESP).
            </p>
            <p className="ads text-justify">
              If you are interested in carrying out a research project at
              LEMAC/UNICAMP or wants to know about the opportunities at our
              group, please send an e-mail to{' '}
              <a className="ads" href="mailto:hugo@unicamp.br">
                hugo@unicamp.br
              </a>
              . More information about our research activities can be found in
              the articles of our list of publications.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProspectiveStudents;
