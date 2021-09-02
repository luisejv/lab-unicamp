import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const News = () => {
  return (
    <>
      <Head>
        <title>LEMAC | News</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="py-md-5">
        <Row>
          <Col>
            <h1>News</h1>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="OpticalSociety"
                options={{ height: 400 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="IEEEPhotonics"
                options={{ height: 400 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sbfoton"
                options={{ height: 400 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="SPIEtweets"
                options={{ height: 400 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default News;
