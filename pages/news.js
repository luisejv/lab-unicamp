import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const News = () => {
  return (
    <>
      <Head>
        <title>LEMAC | News</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <h1>News</h1>
      </Container>
    </>
  );
};

export default News;
