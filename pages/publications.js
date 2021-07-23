import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { Info } from '../info/publicationInfo';
import PublicationItem from '../components/PublicationItem';
const Publications = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | Publications</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Publications</h1>
        <section style={{ marginBottom: '60px' }}>
          {Info.map((publi, idx) => (
            <PublicationItem
              key={idx}
              title={publi.title}
              cite={publi.cite}
              link={publi.link}
            />
          ))}
        </section>
      </Container>
    </>
  );
};

export default Publications;
