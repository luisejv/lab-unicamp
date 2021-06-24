import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const People = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | People</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>People</h1>
      </Container>
    </>
  );
};

export default People;
