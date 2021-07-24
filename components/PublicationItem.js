import React from "react";
import { Row } from "react-bootstrap";
import Styles from "../styles/Publication.module.css";

const PublicationItem = ({ title, cite, link }) => {
  return (
    <Row className={Styles.publication}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={Styles.title}
      >
        {title}
      </a>
      <div className={Styles.cite}>{cite}</div>
    </Row>
  );
};
export default PublicationItem;
