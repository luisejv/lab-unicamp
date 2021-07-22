import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { DropdownItem } from '../components/DropdownItem';

const Research = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | Research</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Research</h1>
        <Container>
          <DropdownItem />
        </Container>
      </Container>
    </>
  );
};

export default Research;
