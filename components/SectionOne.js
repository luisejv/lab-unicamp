import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const SectionOne = () => {
  return (
    <Row className="h-100 w-100">
      <Col xs className="h-100">
        <Row className="mainHeader">
          Welcome to Universidad de Campiñas&apos; Lab!
        </Row>
        <Row className="pt-4 h-100 px-3">
          <Col
            xs={12}
            md={7}
            className="pr-3 py-3 pl-0 d-flex flex-column justify-content-center"
          >
            <p>
              Commodo in reprehenderit velit voluptate qui aliqua qui velit duis
              nostrud. Consequat ea voluptate eu id. Enim labore eiusmod
              incididunt adipisicing et adipisicing ipsum do. Cillum in esse id
              eu dolore id eu eu mollit officia eu cillum ullamco sunt. Sunt
              elit proident reprehenderit consectetur. Fugiat in dolor elit
              sint.
            </p>
            <p>
              Aliquip dolor sit aliquip irure commodo fugiat. Officia officia
              quis non aliquip occaecat commodo ex laboris occaecat ad. Elit est
              tempor deserunt cupidatat laborum cupidatat est ea velit commodo.
            </p>
          </Col>
          <Col xs={12} md={5}>
            <Image
              src="/main1.jpg"
              alt="main-photo"
              layout="fill"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/fg3eFuYmVEw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col className="text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/RVO7LYs_Y1s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col className="text-center">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/25YmgXKnpsE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SectionOne;
