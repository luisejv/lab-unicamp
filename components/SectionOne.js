import React from "react";
import { Col, Row } from "react-bootstrap";
// import Image from "next/image";

const SectionOne = () => {
  return (
    <Row className="h-100 w-100">
      <Col xs className="h-100">
        <Row className="mainHeader">
          Welcome to Laboratory of Applied Electromagnetics and Computing
        </Row>
        <Row className="pt-4 h-100 px-3">
          <Col
            xs={12}
            md={7}
            className="pr-3 py-3 pl-0 d-flex flex-column justify-content-center text-justify"
          >
            <p>
              The Laboratory of Applied and Computational Electromagnetics
              (LEMAC), headed by Prof. Dr. Hugo Enrique Hernandez Figueroa, is
              part of the School of Electrical and Computer Engineering (FEEC)
              at the University of Campinas (UNICAMP).
            </p>
            <p>
              The research activities carried out at LEMAC/UNICAMP are related
              to the following topics: integrated photonics, optical fibers,
              antennas, microwaves, computational electromagnetism, optical
              communications, and telecommunications.
            </p>
          </Col>
          <Col xs={12} md={5}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/main1.jpg"
              alt="main-photo"
              layout="fill"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6} className="text-center">
            <iframe
              width="100%"
              height="300"
              // src="https://www.youtube.com/embed/fg3eFuYmVEw"
              src="https://www.youtube.com/embed/zbfPVQ00KBM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/JWrBTyorXnM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          {/* <Col className="text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/25YmgXKnpsE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

export default SectionOne;
