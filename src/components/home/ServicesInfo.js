import React from 'react';
import styled from 'styled-components';

import { Heading, Subtitle, Button } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.textColorLite};
  .wrapper {
    padding: 3rem 1.5rem;
  }
  .col-wrapper-two {
    min-height: 300px;
    background: ${(props) => props.theme.backgroundWhite};
  }
  .col-wrapper {
    position: relative;
    min-height: 300px;
    @media screen and (max-width: 768px) {
      min-height: 100px;
    }
  }
  .columns {
    margin-bottom: 7rem !important;
  }
  .text {
    margin-bottom: 0.5rem !important;
  }
`;

const Img = styled.img`
  position: absolute;
  left: ${(props) => (props.isSecondary ? '0' : '5%')};
  top: ${(props) => (props.isSecondary ? '6%' : '-16%')};
`;

const BoxWrapper = styled.div`
  background: ${(props) =>
    props.isSecondary ? props.theme.mainBrandColor : props.theme.lightShades};
  border-radius: ${(props) =>
    props.isSecondary ? '100px 0 0 0' : '0 0 100px 0'};
  height: 100%;
  width: 70%;
  margin-left: ${(props) => (props.isSecondary ? 'auto' : '')};
  @media screen and (max-width: 768px) {
    width: 78%;
    padding-top: 11rem;
    margin-bottom: 0rem !important;
  }
`;

const Wrapper = styled.div`
  flex-direction: ${(props) => (props.isSecondary ? '' : 'row-reverse')};
`;

const ImgWrapper = styled.div`
  text-align: ${(props) => (props.isSecondary ? 'end' : 'start')};
`;

const ServiceItem = [
  {
    id: 1,
    img: '/images/home-01.png',
    Heading: 'Experience',
    title:
      'Our Adventure and Personal Development programmes provide deep experiential learning opportunities to help restore confidence and resilience.',
  },
  {
    id: 2,
    img: '/images/service-02.png',
    Heading: 'Grow',
    title:
      'Our Programme Support Mentors all have lived experience of gambling harm. They know what its like to rebuild their lives after addiction.  They provide personalised support throughout our programmes to help get ready for life after treatment.',
  },
  {
    id: 3,
    img: '/images/home-03.png',
    Heading: 'Thrive',
    title:
      'Our online learning programmes offer opportunities to retrain and learn new skills or revise and refresh old ones, to help improve self awareness, employability and better manage relationships.',
  },
];
const ServicesInfo = () => {
  return (
    <Container className="section hero ">
      <div className="hero-body">
        <div className="container">
          {ServiceItem.map((item, index) => (
            <Wrapper
              className="columns is-gapless is-multiline is-centered"
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
              <div className="column col-wrapper-two">
                <div className=" wrapper">
                  <Heading isMedium className="mb-5 text">
                    {item.Heading}
                  </Heading>
                  <Subtitle secondary>{item.title}</Subtitle>
                </div>
              </div>
            </Wrapper>
          ))}
          <div className="has-text-centered mt-6">
            <Button secondary large to="/service">
              What we do
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesInfo;
