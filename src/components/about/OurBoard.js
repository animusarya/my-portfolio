import React from 'react';
import styled from 'styled-components';

import { Heading } from '../elements';
import AboutCard from './AboutCard';

const personInfo = [
  {
    id: 1,
    img: '/images/robert.png',
    title: 'Chairman',
    subtitle: 'Robert White',
  },
  {
    id: 2,
    img: '/images/paul-buck.png',
    title: 'Trustee',
    subtitle: 'Paul Buck',
  },
  {
    id: 3,
    img: '/images/adam-barraclough.png',
    title: 'Trustee',
    subtitle: 'Adam Barraclough',
  },
  {
    id: 4,
    img: '/images/rebecca-jones.png',
    title: 'Trustee',
    subtitle: 'Rebecca Jones',
  },
];

const Section = styled.div`
  background: ${(props) => props.theme.textColorLite};
`;

const OurBoard = () => (
  <Section className="section is-medium">
    <div className="container">
      <div className="has-text-centered mb-6">
        <Heading>Our Board</Heading>
      </div>
      <div className="columns is-centered is-variable is-5">
        <div className="column is-8 ">
          <div className="columns is-multiline is-justify-content-center mt-4">
            {personInfo.map((item) => (
              <div className="column is-6 mb-3">
                <AboutCard data={item} key={item.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default OurBoard;
