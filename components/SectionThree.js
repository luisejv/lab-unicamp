import React from "react";
import SectionHeader from "./SectionHeader";
import { Col, Row, Card } from "react-bootstrap";
import format from "date-fns/format";
import { useRouter } from "next/dist/client/router";

const SectionThree = () => {
  const router = useRouter();
  const news = [
    {
      title:
        "Est elit aliquip et est occaecat deserunt deserunt occaecat cupidatat voluptate anim aliqua Lorem",
      date: format(new Date("2021-07-19"), "LLLL dd, yyyy"),
      photo: "news1.png",
      url: "/",
    },
    {
      title: "Occaecat anim qui dolore nostrud deserunt",
      date: format(new Date("2021-09-01"), "LLLL dd, yyyy"),
      photo: "news2.png",
      url: "/",
    },
    {
      title:
        "Quis aliquip commodo nostrud incididunt laborum consectetur qui non sint duis fugiat et officia velit",
      date: format(new Date("2021-09-29"), "LLLL dd, yyyy"),
      photo: "news3.jpeg",
      url: "/",
    },
  ];
  return (
    <Row className="asdd mt-4">
      <Col>
        <SectionHeader>News</SectionHeader>
        <Row className="pt-5 borderSection justify-content-center">
          <Col xs={6}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLEMAC-DECOM-FEEC-Unicamp-355407718423022&tabs=timeline&width=750&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="750"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Col>
          {/* {news.map((newIter, idx) => (
            <Col key={"new" + idx}>
              <Card
                className="new"
                style={{ width: '100%', height: '500px', cursor: 'pointer' }}
                onClick={() => router.push(newIter.url)}
              >
                <Card.Img variant="top" src={newIter.photo} />
                <Card.Body>
                  <Card.Title className="textBlue1">{newIter.title}</Card.Title>
                  <Card.Text className="date" style={{ textAlign: 'left' }}>
                    {newIter.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))} */}
        </Row>
      </Col>
    </Row>
  );
};

export default SectionThree;
