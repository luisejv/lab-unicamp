import Head from "next/head";
import Hero from "../components/Hero";
import { Container } from "react-bootstrap";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unicamp Lab | Home</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container className="h-100 mainContainer">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Container>
    </>
  );
}
