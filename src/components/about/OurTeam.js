import React from 'react';
import styled from 'styled-components';

import { Heading } from '../elements';
import AboutCard from './AboutCard';

const Section = styled.div`
  background: ${(props) => props.theme.backgroundWhite};
`;

const personInfo = [
  {
    id: 1,
    img: '/images/sharon-parr.png',
    title: 'CEO',
    subtitle: 'Sharon Parr',
  },
  {
    id: 2,
    img: '/images/steve-ramsey.png',
    title: 'Programme Support Mentor',
    subtitle: 'Steve Ramsey',
  },
  {
    id: 3,
    img: '/images/mark-pickering.png',
    title: 'Programme Support Mentor',
    subtitle: 'Mark Pickering',
  },
  {
    id: 4,
    img: '/images/ritchie-paxton.png',
    title: 'Programme Support Mentor',
    subtitle: 'Ritchie Paxton',
  },
  {
    id: 5,
    img: '/images/Andy-Margett.png',
    title: 'Programme Coordinator',
    subtitle: 'Andy Margett',
  },
];

const OurTeam = () => (
  <Section className="section is-medium">
    <div className="container">
      <div className="has-text-centered mb-6">
        <Heading>Our Team</Heading>
      </div>
      <div className="columns is-multiline is-centered mt-4 is-variable is-5">
        {personInfo.map((item) => (
          <div className="column is-4 is-flex is-justify-content-center mt-6">
            <AboutCard data={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default OurTeam;
