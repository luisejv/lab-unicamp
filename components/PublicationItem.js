import React from 'react';
import Styles from '../styles/Publication.module.css';

const PublicationItem = ({ title, cite, link }) => {
  return (
    <section className={Styles.publication}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={Styles.title}
      >
        {title}
      </a>
      <div className={Styles.cite}>{cite}</div>
    </section>
  );
};
export default PublicationItem;
