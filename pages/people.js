import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import CardPeople from '../components/CardPeople';
import Card from 'react-bootstrap/Card';
import IsoTopeGrid from 'react-isotope';
import { Info } from '../info/peopleInfo';
import { alumniInfo } from '../info/alumniInfo';
import Styles from '../styles/CardPeople.module.css';
import Styles2 from '../styles/Research.module.css';
const People = () => {
  const filtersDefault = [
    { label: 'All', isChecked: true },
    { label: 'Pesq Colab', isChecked: false },
    { label: 'PD', isChecked: false },
    { label: 'Pesq Assoc', isChecked: false },
    { label: 'Phd', isChecked: false },
    { label: 'Master', isChecked: false },
    { label: 'IC', isChecked: false },
  ];
  const [filters, updateFilters] = useState(filtersDefault);
  Info.map((person) => {
    console.log(person.name, person.filter[0], person.id);
  });
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
  return (
    <>
      <Head>
        <title>LEMAC | People</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={Styles2.title1 + ' py-md-5'}>
        <h1>People</h1>
        <section
          className="content"
          style={{ marginBottom: '60px', height: '100%' }}
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
          <div style={{ height: '1550px' }}>
            <IsoTopeGrid
              gridLayout={Info}
              noOfCols={4}
              unitWidth={250}
              unitHeight={250}
              filters={filters}
              className={Styles.Iso}
              style={{ display: 'flex' }}
            >
              {Info.map((person) => (
                <div key={person.id}>
                  <Card
                    className={Styles.card}
                    data-aos={'flip-up'}
                    data-aos-easing={'ease-out-cubic'}
                    // style={{ flexBasis: "33%" }}
                  >
                    <Card.Body className={Styles.body}>
                      {person.src && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={person.src}
                          alt={person.name}
                          height={250}
                          width={250}
                          style={{ overflow: 'hidden' }}
                          className={Styles.images + ' img-fluid'}
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Supervision</th>
                  <th>Current Activity</th>
                </tr>
              </thead>
              <tbody>
                {alumniInfo.map((alumni) => (
                  <tr key={alumni.name}>
                    <td>{alumni.name}</td>
                    <td>{alumni.supervision}</td>
                    <td>{alumni.currentActivity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default People;
