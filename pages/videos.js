import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const Videos = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Videos</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <h1>Videos</h1>
        <section
          className="my-5"
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <iframe
            width={"1170"}
            height={"658"}
            src={"https://www.youtube.com/embed/zbfPVQ00KBM"}
            title={"YouTube video player"}
            frameBorder={"0"}
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            }
            allowFullScreen
          ></iframe>
        </section>
      </Container>
    </>
  );
};

export default Videos;
