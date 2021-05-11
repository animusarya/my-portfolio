import React from 'react';
import styled from 'styled-components';

import { Heading, Subtitle, Title } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  .title-info {
    font-style: italic;
  }
  @media screen and (max-width: 768px) {
    .info-box {
      padding: 2rem !important;
    }
  }
`;
const Wrapper = styled.div``;

const FeatureDetail = () => {
  return (
    <Container className="section is-medium">
      <div className="container">
        <Wrapper className="columns is-gapless">
          <div className="column has-background-white">
            <div className="p-6 info-box">
              <Heading isMedium className="mb-5">
                We Know What it’s Like
              </Heading>
              <Title
                isSmall
                color={(props) => props.theme.lightShades}
                className="mb-5 title-info"
              >
                Reassure - Respect - Real --> RESTART
              </Title>
              <Subtitle secondary className="mb-5">
                All our Programme Support Mentors have lived experience of
                gambling addiction. They know first hand the devastating effects
                of gambling addiction and how hard it is to maintain recovery
                and rehabilitation. Our mentors walk alongside our delegates,
                guiding them through our programmes, listening to them, offering
                encouragement and advice from their own experiences and
                signposting practical support. Our delegates are not alone.
              </Subtitle>
            </div>
          </div>
          <div className="column">
            <img
              src="/images/Feature-bg01.png"
              className="tracker-bg"
              alt="service"
            />
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default FeatureDetail;
