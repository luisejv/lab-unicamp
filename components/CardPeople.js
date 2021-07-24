import React from "react";
import Card from "react-bootstrap/Card";
import Styles from "../styles/CardPeople.module.css";
const CardPeople = ({ name, grade }) => {
  return (
    <Card
      className={Styles.card}
      data-aos={"flip-up"}
      data-aos-easing={"ease-out-cubic"}
      style={{ flexBasis: "33%" }}
    >
      <Card.Body className={Styles.body}>
        <h1 className={Styles.name}>{name}</h1>
        <h1 className={Styles.grade}> {grade}</h1>
      </Card.Body>
    </Card>
  );
};

export default CardPeople;
