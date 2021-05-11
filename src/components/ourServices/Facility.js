import React from 'react';
import styled from 'styled-components';

import { Heading, Subtitle } from '../elements';

const Container = styled.div`
  .item {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    color: ${(props) => props.theme.textColor} !important;
  }
  .image-box {
    position: relative;
  }
  .home-bg {
    padding-top: 6rem;
    width: 349px;
  }
  .programer-image {
    position: absolute;
    left: 2rem;
    top: 0rem;
  }
  @media screen and (max-width: 768px) {
    .home-bg {
      padding-top: 2.75rem;
      width: 209px;
    }
    .programer-image {
      position: absolute;
      left: 1.5rem;
    }
  }
`;

const facilityItem = [
  {
    id: 1,
    title: 'restore confidence',
  },
  {
    id: 2,
    title: 'repair self belief and better manage relationships',
  },
  {
    id: 3,
    title: 'rebuild self awareness and resilience',
  },
  {
    id: 4,
    title: 'relearn and reskill',
  },
  {
    id: 5,
    title: 'improve employability',
  },
  {
    id: 6,
    title: 'get ready to seize new opportunities',
  },
];

const Facility = () => (
  <Container className="Section hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <Heading className="mb-5">Our Programmes</Heading>
            <Subtitle secondary>
              We provide holistic support with professional training and
              practical advice to help sustain the ongoing recovery of those who
              have received treatment for gambling addiction. Our programmes
              start after treatment, and equip those recovering from gambling
              addiction with useful and constructive tools to support their
              rehabilitation by helping them to:
            </Subtitle>
            <div className="mt-6">
              <ul>
                {facilityItem.map((item) => (
                  <li
                    className="is-flex is-align-items-center mb-4"
                    key={item.id}
                  >
                    <img
                      src="/images/bullet-icon.png"
                      className="mr-4"
                      alt="logo-bullet"
                    />
                    <p className="item">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="column is-5 is-offset-1">
            <figure className="image is-5by4">
              <img src="/images/feature-info.png" alt="mountain" />
            </figure>
            {/* <div className="image-box">
              <figure className="home-bg">
                <img
                  src="/images/home-bg.png"
                  className=""
                  alt="background-png"
                />
              </figure>
              <figure className="programer-image">
                <img
                  src="/images/programer-image.png"
                  className=""
                  alt="home-png"
                />
              </figure>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Facility;
