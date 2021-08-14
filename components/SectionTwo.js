import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { Info as researchs } from "../info/researchInfo";
import { Info as publications } from "../info/publicationInfo";
import { useRouter } from "next/dist/client/router";

const SectionTwo = () => {
  const router = useRouter();

  /* Choose here the number of projects you want to show. Im choosing 4. */
  const activeProjects = researchs
    .map((item) => ({
      content: item.info.split(".")[0],
      ...item,
    }))
    .slice(0, 4);

  const recentPublication = publications[0];

  return (
    <Row className="mt-5 sectionTwo">
      <Col xs={12} md={8}>
        <Row className="my-1">
          <Col>
            <div className="section2Header">Active Research Projects</div>
          </Col>
        </Row>
        {activeProjects.map((project, iter) => (
          <Row
            className="py-3"
            key={"project" + iter}
            onClick={() => {
              router.push("/research");
            }}
          >
            <Col>
              <div className="projectTitle">{project.title}</div>
              <p className="projectContent">{project.content}</p>
            </Col>
          </Row>
        ))}
        <Link href="/research">
          <a className="textBlue1">See full list of projects</a>
        </Link>
      </Col>
      <Col xs={12} md={4}>
        <Row className="my-1">
          <Col>
            <div className="section2Header">Recent Publication</div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <a
              href={recentPublication.link}
              target="_blank"
              rel="noreferrer"
              className="projectTitle"
            >
              {recentPublication.title}
            </a>
            <p className="projectContent">{recentPublication.cite}</p>
          </Col>
        </Row>
        <Link href="/publications">
          <a className="textBlue1">See full list of publications</a>
        </Link>
      </Col>
    </Row>
  );
};

export default SectionTwo;
