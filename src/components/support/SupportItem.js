import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle, CardItem } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const SupportInfo = [
  {
    id: 1,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 3,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 4,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 5,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 6,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 7,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 8,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 9,
    img: '/images/support-bg.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

const SupportItem = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6 pl-5">
            <Title className="mb-5">Support</Title>
            <Subtitle small>
              If you are suffering the effects fo gambling addiction, there is
              lots of help available, including from these organisations:
            </Subtitle>
          </div>
        </div>
        <div className="columns is-multiline mt-6 is-variable is-5">
          {SupportInfo.map((item) => (
            <div className="column is-4 mb-5" key={item.id}>
              <CardItem
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                buttonTitle="Visit website"
                hasBackground
                hasButton
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
export default SupportItem;
