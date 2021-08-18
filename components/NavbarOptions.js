import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const NavbarOptions = () => {
  const options = [
    { name: 'Research', href: '/research' },
    { name: 'Videos', href: '/videos' },
    { name: 'People', href: '/people' },
    { name: 'Publications', href: '/publications' },
    { name: 'Prospective Students', href: '/prospective-students' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact-us' },
  ];
  return (
    <Row className={'navRes mb-2'}>
      {options.map((option) => {
        return (
          <Link passHref href={option.href} key={option.name}>
            <Col md="auto" className="navbarOption">
              {option.name}
            </Col>
          </Link>
        );
      })}
    </Row>
  );
};

export default NavbarOptions;
