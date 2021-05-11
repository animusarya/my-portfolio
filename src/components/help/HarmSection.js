import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.textColor};
  .item {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    color: ${(props) => props.theme.textColorLite} !important;
  }
  /* .image-box {
    position: relative;
  }
  .gambling-harm-bg {
    height: 396px;
    margin-top: 8rem;
  }
  .gambling-harm {
    position: absolute;
    right: 2rem;
  }
  @media screen and (max-width: 768px) {
    .text {
      margin-top: 1rem !important;
    }
    .gambling-harm-bg {
      height: 221px;
      margin-top: 3rem;
    }
    .gambling-harm {
      position: absolute;
      right: 1rem;
    }
  } */
`;

const HarmItem = [
  {
    id: 1,
    title: 'Loss of employment',
  },
  {
    id: 2,
    title: 'Debt',
  },
  {
    id: 3,
    title: 'Crime',
  },
  {
    id: 4,
    title: 'Breakdown of relationships',
  },
  {
    id: 5,
    title: 'Deterioration of physical and mental',
  },
  {
    id: 6,
    title: 'Health',
  },
  {
    id: 7,
    title: 'And at worst, loss of life through suicide',
  },
];

const HarmSection = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column has-text-right">
            <div className="image-box">
              <figure className="ambling-harm">
                <img src="/images/harm-img.png" alt="person" />
              </figure>
            </div>
          </div>
          <div className="column is-offset-1">
            <Title isMedium>Gambling Harm</Title>
            <div className="mt-6 text">
              <ul>
                {HarmItem.map((item) => (
                  <li
                    className="is-flex is-align-items-center mb-4"
                    key={item.id}
                  >
                    <figure className="image is-16x16">
                      <img src="/images/vector.png" alt="logo-bullet" />
                    </figure>
                    <p className="item ml-4">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 text">
          <Subtitle small>
            Those suffering from a pathological gambling addiction often see
            themselves as weak and undeserving of attention. They can feel
            ashamed and suffer from social anxiety, which can prevent them from
            overcoming their addiction and moving on with their lives. Even
            after treatment, rates of relapse remain very high, often up to 90%
            (National Centre for Responsible Gaming 2009).
          </Subtitle>
        </div>
        <div className="mt-6">
          <Subtitle small>
            <span className="has-text-weight-bold">Gambling Addiction</span> is
            an increasing societal problem that can ruin lives. It negatively
            impacts people’s resources, relationships and health. Gambling harms
            are not just experienced by gamblers, they also affect the health
            and wellbeing of their children, partners, families and social
            networks, as well as their employers and wider communities. Whilst
            treatment for gambling addiction is available relapse rates remain
            high and more help is needed to support recovery and rehabilitation.
          </Subtitle>
        </div>
        <div className="mt-6">
          <img src="/images/service-info.png" alt="service-info" />
        </div>
      </div>
    </div>
  </Container>
);
export default HarmSection;
