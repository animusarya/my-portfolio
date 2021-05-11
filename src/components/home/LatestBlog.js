import React from 'react';
import styled from 'styled-components';

import { Heading, CardItem } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.darkAccent};
`;

const BlogInfo = [
  {
    id: 1,
    img: '/images/blog-01.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    img: '/images/blog-03.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 3,
    img: '/images/blog-02.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

const LatestBlog = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="mb-3">
          <Heading className="ml-5 ">Latest News</Heading>
        </div>
        <div className="columns is-multiline mt-6 is-variable is-5">
          {BlogInfo.map((item) => (
            <div className="column is-4 mb-5" key={item.id}>
              <CardItem
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                buttonTitle="Visit website"
                to="/blog-view"
                hasButton
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
export default LatestBlog;
