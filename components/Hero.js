import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonBanner from "./ButtonBanner";
// import Image from "next/image";

const Hero = () => {
  const [loadedText, setLoadedText] = React.useState(true);

  const image = React.useRef();

  const setBannerText = () => {
    setTimeout(() => {
      setLoadedText(true);
    }, 500);
  };

  React.useEffect(() => {
    if (image.current.complete) setBannerText();
  }, []);

  return (
    <Container fluid className={"bannerContainer px-0"}>
      <Row className="w-100 h-100 no-gutters">
        <Col xs className="no-gutters bannerCol">
          <div className="heroOverlap"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={image}
            src="/banner.jpg"
            alt="banner"
            className="heroImage"
          />
          {/* <Image
            src="/banner.jpg"
            alt="banner"
            layout="fill"
            className={"heroImage"}
            priority="true"
            onLoad={() => {
              setBannerText();
            }}
          /> */}
          {loadedText && (
            <Row noGutters className="bannerTextSection">
              <Row className="justify-content-center w-100 bannerAnimation">
                <div className="bannerText">
                  Welcome to Laboratory of <br></br>Applied and Computational
                  <br></br> Electromagnetics
                </div>
              </Row>
              <Row className="w-100 justify-content-center bannerAnimation">
                <ButtonBanner anchor="/research">Research</ButtonBanner>
                <ButtonBanner anchor="/people">The Team</ButtonBanner>
                <ButtonBanner anchor="/publications">Publications</ButtonBanner>
              </Row>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
