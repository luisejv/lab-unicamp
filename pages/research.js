import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import DropdownItem from "../components/DropdownItem";
import { Info } from "../info/researchInfo";

const Research = () => {
  return (
    <>
      <Head>
        <title>LEMAC | Research</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-5">
        <h1>Research</h1>
        <section style={{ marginBottom: "60px" }}>
          {Info.map((info, idx) => (
            <DropdownItem
              key={"item" + idx}
              title={info.title}
              info={info.info}
              id={idx}
              images={info.images}
            />
          ))}
        </section>
      </Container>
    </>
  );
};

export default Research;
