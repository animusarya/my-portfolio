import React from 'react';
import styled from 'styled-components';

import { Subtitle } from '../elements';

const Container = styled.div`
  background-image: url(/images/review-bg-06.png);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-position: center;
  }
  .content {
    color: ${(props) => props.theme.backgroundWhite};
    font-size: ${(props) => props.theme.fontSizeExtraLarge} !important;
    line-height: 46px;
  }
`;

const Reviews = ({ title, subtitle }) => {
  return (
    <Container className="hero is-medium">
      <div className="hero-body">
        <div className="container py-6">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="mb-6 mt-4">
                <h6 className="has-text-weight-light has-text-centered content">
                  {title}
                </h6>
                <Subtitle isCentered className="mt-4">
                  {subtitle}
                </Subtitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Reviews;
