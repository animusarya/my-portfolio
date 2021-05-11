import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const HelpBanner = () => {
  return (
    <Container className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Title className="mb-5">How will we help</Title>
              <div className="mt-4">
                <Subtitle small>
                  We provide holistic support with professional training and
                  practical advice to equip those recovering from gambling
                  addiction with the right tools to positively restart their
                  lives. We give them a better chance of not relapsing by
                  providing reassurance and respect, support and encouragement
                  from mentors who know what it’s like to suffer the devastating
                  effects of gambling addiction and how hard it is to maintain
                  recovery after treatment.
                </Subtitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HelpBanner;
