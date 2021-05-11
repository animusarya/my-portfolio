import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Title, Subtitle, Heading } from '../elements';
import SocialIcons from '../global/SocialIcons';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  .box {
    border-radius: 0 30% 0 0;
  }
  .icons {
    display: grid;
    align-items: end;
  }
`;

const Section = styled.div`
  background: ${(props) => props.theme.backgroundWhite};
  .box {
    border-radius: 0 30% 0 0;
  }
  .blogImage {
    margin-top: -12%;
    @media screen and (max-width: 768px) {
      margin-top: -21%;
    }
  }
  .text {
    @media screen and (max-width: 768px) {
      margin-top: 10px !important;
      margin-bottom: 0px !important;
    }
  }
`;

const BlogDetail = () => {
  return (
    <>
      <Container className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <Title>
              Lorem ipsum dolor sit amet, consectetur dolor sit amet,
              consectetur
            </Title>
            <div className="columns mt-4">
              <div className="column is-7">
                <Subtitle small>Posted on March 04, 2021</Subtitle>
                <Subtitle small>
                  We help those recovering from the effects of a gambling
                  addiction to ensure they are given the best chance to restart
                  happy and fulfilled lives.
                </Subtitle>
              </div>
              <div className="column is-5 icons">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Section className="hero">
        <div className="hero-body">
          <div className="container">
            <img
              src="/images/blog-main-image.png"
              className="blogImage"
              alt="logo-bullet"
            />
            <div className="mt-6 mb-6 text">
              <Heading>
                Lorem ipsum dolor sit amet, consectetur dolor sit amet,
                consectetur
              </Heading>
            </div>
            <div className="markdown-container">
              <ReactMarkdown
                source="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus [`mauris vitae`]() ultricies. Scelerisque in dictum non consectetur. Libero justo laoreet sit amet cursus sit amet dictum sit. Gravida rutrum quisque non tellus orci ac auctor augue. Egestas congue quisque egestas diam in. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Duis at tellus at urna condimentum mattis. Venenatis a condimentum vitae sapien. Orci ac auctor augue mauris augue. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Sit amet mattis vulputate enim nulla aliquet. Mauris pellentesque pulvinar pellentesque habitant morbi. Aliquam sem fringilla ut morbi tincidunt. Tempus iaculis urna id volutpat. In arcu cursus euismod quis. Duis ut diam quam nulla.

              Sit amet mauris commodo quis imperdiet massa tincidunt. Aliquet nibh praesent tristique magna sit. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ut faucibus pulvinar elementum integer. Dui faucibus in ornare quam viverra. Diam volutpat commodo sed egestas egestas fringilla. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Arcu ac tortor dignissim convallis aenean. Rhoncus urna neque viverra justo nec. Amet aliquam id diam maecenas ultricies. Ac ut consequat semper viverra nam libero. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Morbi leo urna molestie at elementum eu facilisis sed odio.
              "
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
export default BlogDetail;
