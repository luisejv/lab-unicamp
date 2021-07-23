import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Unicamp Lab | Contact Us</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Contact Us</h1>
        <section
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '60px',
          }}
        >
          <iframe
            src={
              'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14709.989078432536!2d-47.066406!3d-22.8210849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2ac1445ada25c91!2sFaculdade%20de%20Engenharia%20El%C3%A9trica%20e%20de%20Computa%C3%A7%C3%A3o%20-%20Unicamp!5e0!3m2!1sen!2spe!4v1626923025418!5m2!1sen!2spe'
            }
            width={'600'}
            height={'500'}
            style={{ border: '0' }}
            allowfullscreen={''}
            loading={'lazy'}
          ></iframe>
        </section>
      </Container>
    </>
  );
};

export default ContactUs;
