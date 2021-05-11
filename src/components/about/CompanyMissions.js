import React from 'react';
import styled from 'styled-components';

import { Subtitle, Title } from '../elements';

const Section = styled.div`
  background-color: ${(props) => props.theme.textColorLite};
  .title {
    color: ${(props) => props.theme.textColor} !important;
    line-height: 1.3 !important;
    margin-bottom: 0rem;
    padding: 0rem 3rem;
  }
`;

const CompanyMission = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Title
            isSmall
            color={(props) => props.theme.textColor}
            className="mb-4"
          >
            EPIC Risk Management
          </Title>
          <Subtitle secondary>
            A commercially successful socially driven business “preventing
            people getting to the edge of the cliff”.
          </Subtitle>
        </div>
        <div className="column">
          <div className="image-box has-text-centered">
            <img src="/images/puzzle.png" className="puzzle" alt="puzzle" />
          </div>
        </div>
        <div className="column">
          <Title
            isSmall
            color={(props) => props.theme.textColor}
            className="mb-4"
          >
            EPIC Restart Foundation
          </Title>
          <Subtitle secondary>
            A not for profit charity “supporting those who fall off the cliff to
            lead a positive life after treatment”.
          </Subtitle>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-flex is-align-items-center">
          <img src="/images/risk-management.png" alt="epic-risk-management" />
        </div>
        <div className="column is-flex is-flex-direction-column">
          <p className="title is-size-4 is-size-5-mobile has-text-weight-medium has-text-centered">
            Different but complementary missions
          </p>
          <div className="image-box has-text-centered mt-4">
            <img src="/images/union.png" className="union" alt="epic logo" />
          </div>
        </div>
        <div className="column is-flex is-align-items-center">
          <div className="image-box">
            <img src="/images/logo.png" className="logo" alt="epic" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export default CompanyMission;
