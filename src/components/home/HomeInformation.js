import React from 'react';
import styled from 'styled-components';

import { Subtitle } from '../elements';

const Section = styled.div`
  background-color: ${(props) => props.theme.darkShades};
`;

const HomeInformation = () => (
  <Section className="section hero is-medium">
    <div className="her-body">
      <div className="container">
        <Subtitle small>
          <span className="has-text-weight-bold">Gambling Addiction</span> is an
          increasing societal problem that can ruin lives. It negatively impacts
          people’s resources, relationships and health. Gambling harms are not
          just experienced by gamblers, they also affect the health and
          wellbeing of their children, partners, families and social networks,
          as well as their employers and wider communities. Whilst treatment for
          gambling addiction is available relapse rates remain high and more
          help is needed to support recovery and rehabilitation.
        </Subtitle>
        <div className="mt-5">
          <img src="/images/service-info.png" alt="service-info" />
        </div>
      </div>
    </div>
  </Section>
);
export default HomeInformation;
