import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const Information = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Title className="mb-5">Our impact</Title>
            <div className="mt-4">
              <Subtitle small>
                We are a new charity. We are testing a hypothesis and new
                approach to support the National Strategy to Reduce Gambling
                Harm. Our programmes will be independently evaluated by
                Measurement and Evaluation specialists and in due course we plan
                to share their assessment of the impact we will make.
              </Subtitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Information;
