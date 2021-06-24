import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const SectionTwo = () => {
  const activeProjects = [
    {
      title:
        "Consequat nulla exercitation labore irure minim sit exercitation eiusmod officia proident nulla",
      content:
        "Mollit velit aliqua laborum elit duis duis. Excepteur mollit duis et occaecat nostrud laborum. Enim duis veniam duis tempor qui fugiat dolor ut consequat culpa. Veniam magna culpa aliquip consequat.",
    },
    {
      title: "Anim esse nulla reprehenderit ad consequat ut eu cillum est in.",
      content:
        "Duis consectetur culpa commodo Lorem laborum reprehenderit sit anim quis enim consectetur nostrud in est. Exercitation culpa qui eiusmod proident proident eu sint aliquip id minim. Sunt officia aute eu occaecat deserunt nisi aliqua anim in voluptate cupidatat veniam veniam. Nostrud magna elit proident mollit eu esse magna.",
    },
  ];
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
              /* router to project */
            }}
          >
            <Col>
              <div className="projectTitle">{project.title}</div>
              <p className="projectContent">{project.content}</p>
            </Col>
          </Row>
        ))}
        <Link href="/">
          <a className="textBlue1">See full list of projects</a>
        </Link>
      </Col>
      <Col xs={12} md={4}>
        <Row className="my-1">
          <Col>
            <div className="section2Header">Recent Publication</div>
          </Col>
        </Row>
        <Row
          className="py-3"
          onClick={() => {
            /* router to project */
          }}
        >
          <Col>
            <div className="projectTitle">
              Officia reprehenderit magna irure Lorem eiusmod mollit labore
              laborum adipisicing officia irure velit.
            </div>
            <p className="projectContent">
              Dolore cupidatat adipisicing esse duis dolore ut in qui sunt in et
              eu culpa culpa. Commodo eu ad velit enim laborum tempor et Lorem.
              Officia laborum dolore magna duis cillum elit minim id ex in ipsum
              veniam ipsum ex. Duis deserunt nisi voluptate esse dolor proident
              proident officia ut laboris labore. Aliqua fugiat ad commodo
              aliquip excepteur reprehenderit aute et adipisicing ea ut.
            </p>
          </Col>
        </Row>
        <Link href="/">
          <a className="textBlue1">See full list of publications</a>
        </Link>
      </Col>
    </Row>
  );
};

export default SectionTwo;
