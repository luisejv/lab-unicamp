import React from "react";
import { Info } from "../../info/peopleInfo";
import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";

export const getStaticPaths = () => {
  const paths = Info.map((person) => {
    return {
      params: {
        id: person.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = (context) => {
  const id = context.params.id;
  return {
    props: {
      person: Info[id],
    },
  };
};

const Person = ({ person }) => {
  return (
    <>
      <Head>
        <title>LEMAC | People | {person.name}</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <section className="content" style={{ margin: "60px", height: "100%" }}>
          <Row>
            <Col md={12} lg={8}>
              <Row>
                <Col className="colF" xs={12}>
                  <h1 className="peopleTitle">{person.name}</h1>
                  <div className="peoplePosition">{person.filter[0]}</div>
                  {/* NOTE: For now it is only rendering prof Hugo's info. If you want to add other people's info, you need to insert it in the Info array as an atribute and specify it here, so that it renders dinamically for each one. */}
                  {person.id == 0 && (
                    <div className="peopleDescription">
                      Hugo E. Hernández Figueroa received the B.Sc. degree in
                      electrical engineering from the Federal University of Rio
                      Grande do Sul, Porto Alegre, Brazil, in 1983. <br></br>He
                      received the M.Sc. degree in electrical engineering and
                      the M.Sc. in informatics, from the Pontifical Catholic
                      University of Rio de Janeiro, Rio de Janeiro, Brazil, in
                      1985 and 1987, respectively, and the Ph.D. degree in
                      physics from the Imperial College of Science, Technology
                      and Medicine, London, UK, in 1992. <br></br>After spending
                      two years as a Postdoctoral Fellow with the Department of
                      Electronic and Electrical Engineering, UCL, London, UK, he
                      joined the UNICAMP, FEEC, as an Assistant Professor in
                      1995. <br></br>
                      <br></br>
                      He became Full Professor in 2005. He has been an Associate
                      Editor (Nanophotonics) of the IEEE Photonics Journal since
                      March 2011, and was an Associate Editor
                      (Opto-Electronics/Integrated Optics) of the IEEE/OSA
                      Journal of Lightwave Technology (January 2004 – December
                      2009).
                      <br></br> He is a Fellow of the OSA class 2011, was a
                      recipient of the IEEE Third Millennium Medal in 2000, and
                      also, the recipient of the Attilio Giarola’s Medal in
                      2013, for outstanding research achievements from the SBMO.
                      He has acted as area coordinator of engineering at the
                      Brazilian Agency FAPESP since 2014.
                      <br></br>Presently he is the Director of the National
                      Institute of Science and Technology FOTONICOM. His main
                      research topics are: integrated photonics, optical fibers,
                      antennas, microwaves, and computational electromagnetics,
                      applied to telecommunications and biosensing.
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={4}>
              <Row>
                <Col className="colF2" xs={12}>
                  {person.src && (
                    <Image
                      className="peopleImage"
                      src={person.src}
                      fluid
                      alt={person.name}
                    />
                  )}
                  <h5 className="peopleTitleFooter">{person.name}</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Person;
