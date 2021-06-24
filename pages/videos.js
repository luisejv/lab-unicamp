import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const Videos = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | Videos</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Videos</h1>
      </Container>
    </>
  );
};

export default Videos;
