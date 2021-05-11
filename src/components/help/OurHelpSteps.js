import React from 'react';
import styled from 'styled-components';

import CycleFlowInfo from '../global/CycleFlowInfo';
import { Subtitle } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundWhite};
  .subtitle {
    font-size: ${(props) => props.theme.fontSizeExtraMedium} !important;
    color: ${(props) => props.theme.textColor} !important;
  }
`;

const stepInfo = [
  {
    id: 1,
    title:
      'support the National Strategy to Reduce Gambling Harm (add in link to their website)',
  },
  {
    id: 2,
    title:
      'produce an empowered alumni with confidence to use their voice to contribute to reducing harm to others and working with other projects advancing the National Strategy ',
  },
  {
    id: 3,
    title:
      'provide informed evidence on how best to complement current treatment services and how to scale different types of ongoing support to reduce any further gambling harm',
  },
];

const OurHelpSteps = () => (
  <Container className="hero">
    <div className="hero-body">
      <div className="container">
        <div>
          <CycleFlowInfo />
        </div>
        <div className="mt-6 mb-5 ml-5">
          <Subtitle secondary className="subtitle is-size-4">
            Our programmes:
          </Subtitle>
        </div>
        <div className="columns is-multiline is-variable is-8">
          {stepInfo.map((item) => (
            <div className="column is-6 ">
              <div className="is-flex">
                <img
                  src="/images/bullet-point-icon.png"
                  className="mr-2 mt-2 image is-24x24"
                  alt="logo-point"
                />
                <Subtitle secondary>{item.title}</Subtitle>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
export default OurHelpSteps;
