import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const News = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | News</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>News</h1>
      </Container>
    </>
  );
};

export default News;
