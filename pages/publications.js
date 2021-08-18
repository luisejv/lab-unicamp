import React from "react";
import Head from "next/head";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Pagination,
  Row,
} from "react-bootstrap";
import { Info } from "../info/publicationInfo";
import PublicationItem from "../components/PublicationItem";
import Styles2 from "../styles/Research.module.css";

const Publications = () => {
  const [publications, setPublications] = React.useState([
    ...Info.sort((a, b) => b.timestamp - a.timestamp),
  ]);
  const [itemsPerPage] = React.useState(10);
  const [numberOfPages] = React.useState(Math.ceil(Info.length / itemsPerPage));
  const [pages, setPages] = React.useState([]);
  const [activePage, setActivePage] = React.useState(0);

  React.useEffect(() => {
    const pagesToSet = [];
    for (let i = 0; i < numberOfPages; i++) {
      pagesToSet.push(i);
    }
    setPages(pagesToSet);
    console.log(pages);
  }, []);

  const sortAlphabeticallly = (sortKey) => {
    console.log("az", sortKey);
    if (sortKey) {
      setPublications([
        ...Info.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else {
      setPublications([
        ...Info.sort((a, b) => {
          if (b.title < a.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1;
          }
          return 0;
        }),
      ]);
    }
    console.log(publications);
  };

  const sortByTimestamp = (sortKey) => {
    console.log("time", sortKey);
    if (sortKey) {
      setPublications([...Info.sort((a, b) => b.timestamp - a.timestamp)]);
    } else {
      setPublications([...Info.sort((a, b) => a.timestamp - b.timestamp)]);
    }
    console.log(publications);
  };

  return (
    <>
      <Head>
        <title>LEMAC | Publications</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={Styles2.title1 + " py-md-5"}>
        <Row>
          <Col xs={9}>
            <h1>Publications</h1>
          </Col>
          <Col xs={2}>
            <DropdownButton id="dropdown-basic-button" title="Sort By">
              <Dropdown.Item
                onSelect={() => {
                  sortAlphabeticallly(true);
                }}
              >
                A-Z
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => {
                  sortAlphabeticallly(false);
                }}
              >
                Z-A
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => {
                  sortByTimestamp(true);
                }}
              >
                Newest
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => {
                  sortByTimestamp(false);
                }}
              >
                Oldest
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Container style={{ marginBottom: "60px" }}>
          <Row>
            <Col md={8}>
              {publications
                .slice(
                  activePage * itemsPerPage,
                  itemsPerPage * (activePage + 1)
                )
                .map((publi, idx) => (
                  <PublicationItem
                    key={idx}
                    title={publi.title}
                    cite={publi.cite}
                    link={publi.link}
                  />
                ))}
            </Col>
          </Row>
          <Row>
            <Pagination>
              {pages.map((page) => (
                <Pagination.Item
                  key={page}
                  active={page === activePage}
                  onClick={() => {
                    setActivePage(page);
                    window.scrollTo(0, 0);
                  }}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Publications;
