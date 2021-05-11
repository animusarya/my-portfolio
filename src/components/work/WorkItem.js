import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle, CardItem } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const CardInfo = [
  {
    id: 1,
    img: '/images/work-img-02.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    img: '/images/work-img-03.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 3,
    img: '/images/work-img-4.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 4,
    img: '/images/work-img-05.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 5,
    img: '/images/work-img-06.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 6,
    img: '/images/work-img-01.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 7,
    img: '/images/work-img-08.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 8,
    img: '/images/work-img-07.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 9,
    img: '/images/work-img-4.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

const WorkItem = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns ">
          <div className="column pl-5">
            <Title className="mb-5">Who we work with</Title>
            <Subtitle small>
              We work with lots of different organisations - delivery partners,
              funders, supporters, measurement and evaluation partners - who all
              believe in our vision and mission and are committed to helping us
              give recovering gambling addicts the best chance to restart happy
              and fulfilled lives.
            </Subtitle>
          </div>
        </div>
        <div className="columns is-multiline mt-6 is-variable is-5">
          {CardInfo.map((item) => (
            <div className="column is-4 mb-5" key={item.id}>
              <CardItem
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                buttonTitle="Visit website"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
export default WorkItem;
