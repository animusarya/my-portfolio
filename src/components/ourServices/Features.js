import React from 'react';
import styled from 'styled-components';

import { Heading, Subtitle, Title } from '../elements';
import { theme } from '../../utils/theme';

const Container = styled.div`
  background-color: ${(props) => props.theme.textColor};
  .col-wrapper {
    position: relative;
    max-height: 300px;
    @media screen and (max-width: 768px) {
      height: 200px;
    }
  }
  .title-info {
    font-style: italic;
  }
  .info-box {
    border-radius: 0px;
    @media screen and (max-width: 768px) {
      padding: 2rem !important;
    }
  }
  .columns {
    margin-bottom: 7rem !important;
  }
  h1 {
    @media screen and (max-width: 768px) {
      margin-bottom: 0.5rem !important;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  left: ${(props) => (props.isSecondary ? '0' : '5%')};
  top: ${(props) => (props.isSecondary ? '8%' : '-17%')};
`;

const BoxWrapper = styled.div`
  background: ${(props) =>
    props.isSecondary ? props.theme.mainBrandColor : props.theme.lightShades};
  border-radius: ${(props) =>
    props.isSecondary ? '100px 0 0 0' : '0 0 100px 0'};
  height: 100%;
  width: 70%;
  margin-left: ${(props) => (props.isSecondary ? 'auto' : '')};
`;

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.isSecondary ? '' : 'row-reverse')};
`;

const ImgWrapper = styled.div`
  text-align: ${(props) => (props.isSecondary ? 'end' : 'start')};
`;

const qualityItem = [
  {
    id: 1,
    img: '/images/service-07.png',
    Heading: 'Experience',
    title: 'Repair Self Belief - Restore Confidence --> RESTART',
    color: `${theme.lightShades}`,
    subtitleOne:
      'Our 4 day residential outdoor adventure learning experience is set in the Coniston Coppermines in the Lake District.',
    subtitleTwo:
      ' It is run by John Peck and Tiger Teams, who specialise in a rigorous, no-bull approach to ignite energy, unleash talent and build courage and resilience. Drawing on the fields of sports psychology, extreme adventure and business, John and his team are experts in their fields who advise British Olympic Teams and the military, have led expeditions into remote corners of the globe and who have triumphed where others failed.',
  },
  {
    id: 2,
    img: '/images/service-02.png',
    Heading: 'Grow',
    title: 'Rebuild Self Awareness - Ready For Opportunities --> RESTART',
    color: `${theme.mainBrandColor}`,
    subtitleOne:
      'Our 3 day residential course helps delegates to developing their personal brand and toolkit that will help them to improve their employability',
    subtitleTwo:
      'It is run by Brad Waldron of Intelligent Inspiration, who delivers proven & innovative solutions to enable people to be more flexible, responsive & ready to seize opportunities. Brad has the power to ignite the heart and mind with an enlightened energy for greater personal mastery using principles from Stephen Covey’s “7 Habits of Highly Effective People',
  },
  {
    id: 3,
    img: '/images/home-01.png',
    Heading: 'Thrive',
    title: 'Relearn - Reskill --> RESTART',
    color: `${theme.lightShades}`,
    subtitleTwo:
      'Our self motivated online learning programme covers a breath of subjects to support ongoing personal development, , including: Mindfulness, Personal Financial Management, CV Writing, Interview Skills, Presentation Skills, Social Media Marketing.',
  },
];
const Features = () => {
  return (
    <Container className="section hero">
      <div className="hero-body">
        <div className="container">
          {qualityItem.map((item, index) => (
            <Wrapper
              className="columns is-gapless is-multiline mb-6"
              key={item.id}
              isSecondary={index % 2 === 0}
            >
              <ImgWrapper
                className="column is-4 col-wrapper"
                isSecondary={index % 2 === 0}
              >
                <BoxWrapper className="box" isSecondary={index % 2 === 0} />
                <Img
                  src={item.img}
                  className="tracker-bg"
                  alt="service"
                  isSecondary={index % 2 === 0}
                />
              </ImgWrapper>
              <div className="column">
                <div className="box info-box p-6">
                  <Heading isMedium className="mb-5">
                    {item.Heading}
                  </Heading>
                  <Title color={item.color} isSmall className="mb-5 title-info">
                    {item.title}
                  </Title>
                  <Subtitle secondary className="mb-5">
                    {item.subtitleOne}
                  </Subtitle>
                  <Subtitle secondary>{item.subtitleTwo}</Subtitle>
                </div>
              </div>
            </Wrapper>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
