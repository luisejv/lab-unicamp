import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Button } from 'react-bootstrap';
import CardPeople from '../components/CardPeople';
import IsoTopeGrid from 'react-isotope';
import { Info } from '../info/peopleInfo';
import Styles from '../styles/CardPeople.module.css';

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
        <title>Unicamp Lab | People</title>
        <meta name="description" content="Unicamp Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>People</h1>
        <section style={{ marginBottom: '60px' }}>
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
          <div>
            <IsoTopeGrid
              gridLayout={Info}
              noOfCols={4}
              unitWidth={200}
              unitHeight={100}
              filters={filters}
              className={Styles.Iso}
            >
              {Info.map((person) => (
                <CardPeople
                  key={person.id}
                  name={person.name}
                  grade={person.filter[0]}
                />
              ))}
            </IsoTopeGrid>
          </div>
        </section>
      </Container>
    </>
  );
};

export default People;
