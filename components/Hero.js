import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonBanner from "./ButtonBanner";
import Image from "next/image";

const Hero = () => {
  const [loadedText, setLoadedText] = React.useState(false);

  const setBannerText = () => {
    setTimeout(() => {
      setLoadedText(true);
    }, 500);
  };

  return (
    <Container fluid className={"bannerContainer px-0"}>
      <Row className="w-100 h-100 no-gutters">
        <Col xs className="no-gutters bannerCol">
          <div className="heroOverlap"></div>
          <Image
            src="/banner.jpg"
            alt="banner"
            layout="fill"
            className={"heroImage"}
            priority="true"
            onLoad={() => {
              setBannerText();
            }}
          />
          {loadedText && (
            <React.Fragment>
              <Row className="justify-content-center w-100 bannerAnimation">
                <div className="bannerText">
                  Welcome to Universidad de Campiñas&apos; Lab
                </div>
              </Row>
              <Row className="w-100 justify-content-center bannerAnimation">
                <ButtonBanner anchor="/research">Research</ButtonBanner>
                <ButtonBanner anchor="/people">The Team</ButtonBanner>
                <ButtonBanner anchor="/publications">Publications</ButtonBanner>
              </Row>
            </React.Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
