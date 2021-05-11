import React from 'react';
import styled from 'styled-components';

import { Title, CardItem } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const NewsInfo = [
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
  {
    id: 4,
    img: '/images/blog-04.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 5,
    img: '/images/blog-05.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 6,
    img: '/images/blog-06.png',
    title: 'Company Name',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

const BlogItem = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns mb-5">
          <div className="column pl-5">
            <Title className="">News</Title>
          </div>
        </div>
        <div className="columns is-multiline mt-5 is-variable is-5">
          {NewsInfo.map((item) => (
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
export default BlogItem;
