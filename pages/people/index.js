import React, { useState } from "react";
import Head from "next/head";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import IsoTopeGrid from "react-isotope";
import { Info } from "../../info/peopleInfo";
import { alumniInfo } from "../../info/alumniInfo";
import Styles from "../../styles/CardPeople.module.css";
import Styles2 from "../../styles/Research.module.css";
import useWidth from "../../context/useWidth";

const People = () => {
  const { width: windowWidth } = useWidth();
  const [width, setWidth] = React.useState(windowWidth);
  const [people, setPeople] = React.useState(Info);
  const [gridSize, setGridSize] = React.useState({ rows: 0, cols: 4 });
  const filtersDefault = [
    { label: "All", isChecked: true },
    { label: "Principal Investigator", isChecked: false },
    { label: "Senior Research Scientist", isChecked: false },
    { label: "Post Doctoral Fellow", isChecked: false },
    { label: "Associate Research Scientist", isChecked: false },
    { label: "Graduate Student PhD", isChecked: false },
    { label: "Graduate Student MSc", isChecked: false },
    { label: "Undergrad", isChecked: false },
    { label: "Faculty Member", isChecked: false },
  ];
  const [filters, updateFilters] = useState(filtersDefault);
  const router = useRouter();

  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value && f.isChecked === true) {
          return f;
        }
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        } else {
          f.isChecked = false;
        }
        return f;
      })
    );
  };

  const sortInfo = (maxCol) => {
    const newPeople = [];
    let x = 0;
    let y = 0;
    for (let person of Info) {
      if (y === maxCol) {
        x += 1;
        y = 0;
      }
      newPeople.push({ ...person, row: x, col: y });
      y += 1;
    }
    setGridSize({ rows: x, cols: maxCol });
    setPeople(newPeople);
  };

  React.useEffect(() => {
    setWidth(windowWidth);
    if (windowWidth < 515) {
      sortInfo(1);
    }
    if (windowWidth < 992 && windowWidth >= 515) {
      sortInfo(2);
    }
    if (windowWidth < 1200 && windowWidth >= 992) {
      sortInfo(3);
    }
    if (windowWidth >= 1200) {
      sortInfo(4);
    }
  }, [windowWidth]);

  React.useEffect(() => {
    if (width < 515) {
      sortInfo(1);
    }
    if (width < 992 && width >= 576) {
      sortInfo(2);
    }
    if (width < 1200 && width >= 992) {
      sortInfo(3);
    }
    if (width >= 1200) {
      sortInfo(4);
    }
  }, [width]);

  return (
    <>
      <Head>
        <title>LEMAC | People</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={Styles2.title1 + " py-md-5"}>
        <h1>People</h1>
        <section
          className="content"
          style={{ marginBottom: "60px", height: "100%" }}
        >
          <div>
            {filters.map((e) => (
              <button key={`${e.label}_key`} className={Styles.filter}>
                <input
                  id={e.label}
                  type="checkbox"
                  value={e.label}
                  onChange={onFilter}
                  checked={e.isChecked}
                />
                <label htmlFor={e.label}>{e.label}</label>
              </button>
            ))}
          </div>
          <div
            style={{
              height: (gridSize.rows + 1) * 260 + "px",
            }}
          >
            <IsoTopeGrid
              gridLayout={people}
              noOfCols={gridSize.cols}
              unitHeight={width < 576 ? 240 : 250}
              unitWidth={width < 576 ? 240 : 250}
              filters={filters}
              className={Styles.Iso}
              isFitWidth
            >
              {Info.map((person) => (
                <div key={person.id}>
                  <Card
                    className={Styles.card}
                    data-aos={"flip-up"}
                    data-aos-easing={"ease-out-cubic"}
                    onClick={() => router.push(`/people/${person.id}`)}
                  >
                    <Card.Body className={Styles.body}>
                      {person.src && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={person.src}
                          alt={person.name}
                          height={250}
                          width={250}
                          style={{ overflow: "hidden" }}
                          className={Styles.images + " img-fluid"}
                        />
                      )}
                      <div className={Styles.bodyText}>
                        <h3 className={Styles.grade}>{person.filter[0]}</h3>
                        <h1 className={Styles.name}>{person.name}</h1>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </IsoTopeGrid>
          </div>
          <Container className="my-5">
            <Row className="mb-3">
              <Col>
                <h1>Alumni</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      {width >= 426 && <th>Supervision</th>}
                      <th>Current Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumniInfo.map((alumni) => (
                      <tr key={alumni.name}>
                        <td>
                          {alumni.name}
                          {width < 426 && (
                            <>
                              <br /> <strong>{alumni.supervision}</strong>
                            </>
                          )}
                        </td>
                        {width >= 426 && <td>{alumni.supervision}</td>}
                        <td>{alumni.currentActivity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default People;
