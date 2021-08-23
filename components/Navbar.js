import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import NavbarOptions from "./NavbarOptions";
import styles from "../styles/NavbarResponsive.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Container className={styles.navBar + " pt-md-3"}>
        <Row className="align-items-center">
          <Link href="/" passHref={true}>
            <Col className={"uniName"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo" src="/logo.png" alt="LEMAC" />
            </Col>
          </Link>
          <Col xs={2}>
            <div className={styles.mobileIcon} onClick={() => setisOpen(true)}>
              <FaBars />
            </div>
          </Col>
        </Row>
        <NavbarOptions />
      </Container>
      <aside
        className={styles.sideBar}
        style={{
          opacity: isOpen ? "100%" : "0",
          top: isOpen ? "0" : "-100%",
        }}
      >
        <div className={styles.icon} onClick={() => setisOpen(false)}>
          <FaTimes className={styles.closeIcon} />
        </div>
        <div className={styles.sideBarWrapper}>
          <div className={styles.sideBarMenu} onClick={() => setisOpen(false)}>
            <Link className={styles.sideBarLink} href="/research">
              Research
            </Link>
            <Link className={styles.sideBarLink} href="/videos">
              Videos
            </Link>
            <Link className={styles.sideBarLink} href="/people">
              People
            </Link>
            <Link className={styles.sideBarLink} href="/publications">
              Publications
            </Link>
            <Link className={styles.sideBarLink} href="/prospective-students">
              Prospective Students
            </Link>
            <Link className={styles.sideBarLink} href="/news">
              News
            </Link>
            <Link className={styles.sideBarLink} href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Navbar;
