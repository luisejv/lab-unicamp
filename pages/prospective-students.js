import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const ProspectiveStudents = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Prospective Students</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <h1>Prospective Students</h1>
      </Container>
    </>
  );
};

export default ProspectiveStudents;
