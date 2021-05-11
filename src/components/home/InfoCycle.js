import React from 'react';
import styled from 'styled-components';

import CycleFlowInfo from '../global/CycleFlowInfo';
import { Subtitle, Heading, Button } from '../elements';

const Container = styled.div``;

const InfoCycle = () => (
  <Container className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <Heading secondary centered className="mb-5">
              Experience - Grow - Thrive --> RESTART
            </Heading>
            <Subtitle isCentered secondary>
              Our innovative programmes, together with personalised support from
              people with their own lived experience of gambling harm, provide
              an holistic approach to give those recovering from gambling
              addiction the very best chance of restarting happy and fulfilled
              lives.
            </Subtitle>
          </div>
        </div>
        <div className="mt-5">
          <CycleFlowInfo />
        </div>
        <div className="has-text-centered mt-6">
          <Button secondary large to="/help">
            How we help
          </Button>
        </div>
      </div>
    </div>
  </Container>
);
export default InfoCycle;
