import React from 'react';
import styled from 'styled-components';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import { Title, Subtitle } from '../components/elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <Container className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="mb-4">
              <Title className="mb-5">Privacy Policy</Title>
            </div>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit. Eleifend quam adipiscing
              vitae proin sagittis nisl. Tristique et egestas quis ipsum
              suspendisse. At quis risus sed vulputate odio ut enim. Ultrices
              eros in cursus turpis massa tincidunt dui ut. Justo eget magna
              fermentum iaculis eu non diam. Nulla facilisi morbi tempus iaculis
              urna. Odio aenean sed adipiscing diam. Amet est placerat in
              egestas erat imperdiet sed euismod nisi. Condimentum id venenatis
              a condimentum vitae sapien pellentesque. Quis vel eros donec ac
              odio tempor orci dapibus. Tincidunt ornare massa eget egestas
              purus viverra accumsan in nisl. Magna fermentum iaculis eu non
              diam phasellus vestibulum lorem. Phasellus faucibus scelerisque
              eleifend donec pretium vulputate sapien nec. In tellus integer
              feugiat scelerisque varius. Faucibus et molestie ac feugiat sed
              lectus. Eget egestas purus viverra accumsan in nisl. Massa massa
              ultricies mi quis. Massa tincidunt nunc pulvinar sapien et ligula.
              Lectus proin nibh nisl condimentum id venenatis. Eget egestas
              purus viverra accumsan in nisl nisi scelerisque eu.
            </Subtitle>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default PrivacyPolicy;
