import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  /* .img-box {
    background-color: ${(props) => props.theme.textColorLite};
    padding: 2rem;
    border-top-right-radius: 100px;
  } */
`;

const ServiceBanner = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns ">
          <div className="column is-6">
            <Title className="mb-5">What we do</Title>
            <Subtitle small>
              Currently most gambling harm reduction programmes focus on the
              gamblers journey until they have received treatment for their
              addiction. But very few focus on providing support after treatment
              as they look to restart and rebuild their lives. Research shows
              that even after treatment relapse rates can be as high as 90% name
              of research. We believe treatment alone is not enough. More help
              is needed.
            </Subtitle>
          </div>
          <div className="column is-5 is-offset-1">
            <div className="img-box">
              <img src="/images/service-bg-01.png" alt="flow-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default ServiceBanner;
