import React from "react";
import { Info } from "../../info/peopleInfo";
import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";
import { GrMail } from "react-icons/gr";

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
            <Col md={12} lg={7}>
              <Row>
                <Col className="colF" xs={12}>
                  <h1 className="peopleTitle">{person.name}</h1>
                  <div className="peoplePosition mb-3">{person.filter[0]}</div>
                  {/* NOTE: For now it is only rendering prof Hugo's info. 
                   If you want to add other people's info, you need to insert it in the Info array 
                   as an atribute and specify it here, so that it renders dynamically for each one. */}
                  {person.content &&
                    person.content.length > 0 &&
                    person.content.map((iter, idx) => (
                      <div key={idx} className="peopleDescription">
                        {iter}
                      </div>
                    ))}
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={5}>
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
                  {person.charge && <div>{person.charge}</div>}
                  {person.career && <div>{person.career}</div>}
                  {person.email && (
                    <div>
                      <GrMail className="icon mr-1" color="#555555" />
                      {person.email}
                    </div>
                  )}
                  {person.link && (
                    <div>
                      <a href={person.link} target="_blank" rel="noreferrer">
                        Google Scholar Link
                      </a>
                    </div>
                  )}
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
