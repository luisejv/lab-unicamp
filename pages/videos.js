import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

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
        <section
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
          <iframe
            width={'560'}
            height={'315'}
            src={'https://www.youtube.com/embed/zbfPVQ00KBM'}
            title={'YouTube video player'}
            frameborder={'0'}
            allow={
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            }
            allowfullscreen
          ></iframe>
        </section>
      </Container>
    </>
  );
};

export default Videos;
