import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle, Button } from '../elements';
import CompanyMission from './CompanyMissions';

const Section = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  span {
    text-decoration: underline;
  }
`;

const AboutInformation = () => (
  <Section className=" hero is-medium">
    <div className="hero-body">
      <div className="container">
        <Title isMedium className="mb-5 ml-3">
          Who we are
        </Title>
        <div className="columns">
          <div className="column">
            <Subtitle small className="mt-1">
              The EPIC Restart Foundation is a new independent charity, founded
              by EPIC Risk Management a leading global gambling harm
              minimisation consultancy.
            </Subtitle>
            <Subtitle small className="mt-5">
              Many of the EPIC Risk Management team have lived experience of
              gambling harm, including their{' '}
              <span className="has-text-weight-semibold">CEO Paul Buck</span>{' '}
              and their passion to help others who have suffered the effects of
              gambling addiction was the inspiration for The EPIC Restart
              Foundation, which was formally registered with the Charity
              Commission in December 2020.
            </Subtitle>
            <Subtitle small className="mt-5">
              EPIC Risk Management’s mission is to help organisations prevent
              gambling related harm. They are making great strides but given the
              scale of the problem, they are realistic that stopping all
              gambling harm is a huge challenge. For those who are harmed, The
              EPIC Restart Foundation will give them a second chance to restart
              their lives after gambling.
            </Subtitle>
            <a
              href="https://www.epicriskmanagement.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-5 mb-5">Visit website</Button>
            </a>
          </div>
        </div>
        <div className="mt-6">
          <CompanyMission />
        </div>
        <div className="mt-6">
          <Subtitle small>
            The EPIC Restart Foundation is led by a dedicated team of trustees
            and staff members. We come from different backgrounds but what
            unites us is our shared belief that all those who have suffered from
            gambling addiction should be given the best chance to restart happy
            and fulfilled lives.
          </Subtitle>
        </div>
      </div>
    </div>
  </Section>
);
export default AboutInformation;
