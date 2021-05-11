import React from 'react';
import styled from 'styled-components';

import { Title, Button, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};

  /* .image-box {
    position: relative;
  }
  .home-bg {
    padding-top: 7rem;
    width: 428px;
  }
  .home-img {
    position: absolute;
    left: 2rem;
    top: 0rem;
  }
  @media screen and (max-width: 768px) {
    .home-bg {
      padding-top: 2.75rem;
      width: 215px;
    }
    .home-img {
      position: absolute;
      left: 1.5rem;
    }
  } */
`;

const HomeBanner = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Title>
              We help restart happy and fulfilled lives after the devastating
              effects of gambling addiction
            </Title>
            <div className="mt-5">
              <Subtitle>
                We provide professional training and practical advice to those
                recovering from a gambling addiction to help them rebuild happy
                and fulfilled lives and prevent them from relapsing. We support
                those who have suffered gambling harm on their recovery journey
                to build resilience, find new and meaningful opportunities and
                so positively restart their lives after gambling.
              </Subtitle>
            </div>
            <div className="mt-5">
              <Button to="/about">Who we are</Button>
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src="/images/herobg.png" className="" alt="background-png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default HomeBanner;
