import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Styles from '../styles/Research.module.css';
import { MdExpandLess } from 'react-icons/md';
import Image from 'next/image';

const DropdownItem = ({ title, info, id, images }) => {
  const [active, setActive] = useState(true);
  return (
    <React.Fragment>
      <Accordion>
        <Card
          style={{
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderTop: 'transparent',
          }}
        >
          <Accordion.Toggle
            style={{
              backgroundColor: 'transparent',
              paddingBottom: '0',
              paddingLeft: '0',
            }}
            as={Card.Header}
            variant="link"
            eventKey="0"
            className={Styles.Dropdown}
            onClick={() => {
              setActive(!active);
            }}
          >
            <div className={Styles.header}>
              <h1 className={Styles.id}>{id + 1}</h1>
              <h1 className={Styles.title}>{title}</h1>
              <MdExpandLess
                className={active ? Styles.icon : Styles.iconDown}
              />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {info}
              <section className={Styles.images}>
                {images.map(
                  (image) =>
                    image != '_' && (
                      <Image
                        src={image}
                        height={250}
                        width={690}
                        layout="intrinsic"
                      />
                    )
                )}
              </section>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
};

export default DropdownItem;
